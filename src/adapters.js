export default function adapter({
  url, 
  file, 
  onProgress = () => {}, 
  onResponse = () => {}, 
  onResponseError = () => {},
  onError = () => {},
}) {
  if (!url) {
    throw new Error("`url` is not valid");
  }

  if (!file) {
    throw new Error("`file` is not valid");
  }

  const formdata = new FormData();
  const xhr = new XMLHttpRequest();

  formdata.append("file", file);
  
  function handler() {
    if (xhr.readyState == 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        onResponse(xhr.responseText);
      } else {
        onResponseError(xhr.response);
      }
    }
  }

  xhr.onreadystatechange = handler;

  xhr.onprogress = (e) => {
    e.FileList = file;
    onProgress(e);
  };
  xhr.onerror = onError;

  xhr.open("POST", url, true);
  xhr.send(formdata);
}
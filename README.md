## rc-upload-file

select the image and upload it to the back endInstall.

### Installation

```bash
$ yarn add rc-upload-file
```

or 

```bash
$ npm install rc-upload-file
```

### Quick start

```js
import React from 'react';
import ReactDOM from 'react-dom';
import UploadFile from 'rc-upload-file';

function App() {
  return(
    <div className='app'>
      <UploadFile 
      	action="https://example.com/upload"
      	multiple
        accept="*"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```



### API

|  props   |                  description                   |   type    | required |  default  |
| :------: | :--------------------------------------------: | :-------: | -------- | :-------: |
|  action  |            absolute path to upload             | `string`  | `true`   |     —     |
|  accept  |                 file type MIME                 | `string`  | `false`  | `image/*` |
| multiple | whether to allow multiple files to be selected | `boolean` | `false`  |  `false`  |
 

### Contribute

- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3
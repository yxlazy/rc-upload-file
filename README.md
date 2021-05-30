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
import RcUploadFile from 'rc-upload-file';

function App() {
  return(
    <div className='app'>
      <RcUploadFile>
        <button className='app-upload'>upload</button>
      </RcUploadFile>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```



### API

|  props   |     description      |      type       | default |
| :------: | :------------------: | :-------------: | :-----: |
| children | show text on `input` | `ReactElement ` |    —    |

### Test

```bash
$ yarn run test
```

or 

```bash
$ npm run test
```

 

### Contribute

- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3
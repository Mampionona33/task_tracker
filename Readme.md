# TASK TRACKER

---

## Table de matière

1. [General info](#general-info)
2. [Technologies](#technologie)
3. [Development Steps](#development-steps)
4. [Runing the ui server and transformation of jsx](#runing-ui-server)

---

### General info

This app is used to track different types of task in offshore companyes. It recordes the time spend in a task and
give a glimpse of productivity.

---

### Technologies

\* [express](https://expressjs.com/fr/4x/api.html): Version 4.17.1  
\* [node](https://nodejs.org/dist/v14.17.6/node-v14.17.6-x64.msi): v15.9.0

---

### Development Steps

- create the ui server:
  - Create public _ui_ folder
  - Go to _ui_ folder, start the commande: **yarn init -y**
  - Create _uiServer.js_ in side the _ui_ folder
  - Create _public_ folder in side of _ui_
  - Insert _index.html_ in the _public_ folder
  - Implementing `<div id="root">Test</div>` in _index.html_
  - Go to _ui_ folder and install _express_ with the command : **yarn add express**
  - Implementing the _uiServer.js_ code by :
    - importing _express_ with `const express = require('express');`
    - Instantiate a variable _app_ by calling _express()_;
    - Mounting middleware : _express.static('public')_ in app by using function _use()_
    - Starting the server by using _listen()_ function : `app.listen(3000, function ...`
  - Make a tray by start the command : **node uiServer.js**
  - Runing `http://localhost:3000/` in the browser
  - Installing **_nodemon_** bu starting the command : **_yarn add nodemon --dev_**
  - Implementing _start_ script in _package.json_ : `"start": "nodemon uiServer.jsx -w uiServer.jsx"`
  - Test the server with command : **_yarn start_**
  - Adding webpack with command line : **_yarn add webpack --dev_**
  - Adding babel-loader with command line : **_yarn add babel-loader --dev_**
  - Create _webpack.config.js_
  - Create _src_ folder
  - Create _App.jsx_ inside of _src_ folder
  - Implement _webapck.config.js_
  - Adding `"watch": "webpack --watch"` in _ui/package.json_
  - Adding webpack-cli with command line : **_yarn add webpack-cli --dev_**
  - Adding @babel/core with command line : **_yarn add @babel/core --dev_**
  - Adding @babel/preset-env and @babel/preset-react with command line : **_yarn add @babel/preset-react @babel/preset-env --dev_** for the transformation with **_webpack_**
  - Adding **.babelrc** file in _ui/src_
  - Replacing the _helloworld_ classe by three placeholders
  - Installing dotenv for use environment variables : _yarn add dotenv_
  - Import dotenv in _ui/uiServer.js_
  - Create the **.env**
  - Adding **_--progress_** in _watch_ in _package.json_ for updating the **app.bundle.js** in every change in all files _.jsx_
  - Installing react in ui folder: **_yarn add react_**

---

### Runing the ui server and transformation of jsx

- go to ui folder and run command yarn start for starting the server
- go to ui folder and run command yarn watch for watching every transformation in _App.jsx_

# TASK TRACKER

---

## Table de matière

1. [General info](#general-info)
2. [Technologies](#technologie)
3. [Development Steps](#development-steps)

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
  - Create public <u>ui</u> folder
  - Go to ui folder, start the commande: **yarn init -y**
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
  - Make a tray by start the command : **node server.js**

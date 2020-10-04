# SHOPPING CART

This project is based on [The Complete Javascript Course 2020](https://www.udemy.com/share/101WfeBksSdFlTQHQ=/) by **Jonas Shmedtmann**

Tecnologies 
- Node js
- npm
- babel
- webpack

Developer tools
- node
- npm
- webpack
- live-server
- webpack cli
- webpack-dev-server
- html-webpack-plugin

dependencies --> needed at runtime

devDependencies --> needed during the development phase

**Webpack** configuration. webpack asset bubdler

4 core concepts

- entry point
- output
- loaders: import/load files and process them e.g scss to css, ES5 to ES6
- plugins: complex processing in our insput files

**BABEL** a js compiler in order to convert ES+ to ES5

preset --> a collction of code tranform plugins

@babel/env --> env means the browser

**Planning**

MVC 

![mvc](dist/img/mvc.png)

**How to use ES6 modules**

```js
export default 'testing export string'; 
```
```js
export const add = (a,b) => a+b;
export const mul = (a,b) => a*b;
export const id = 23;
```

```js
import string from './models/Serch';
import { add, id } from './view/searchView';
import { add as a , id as m} from './view/searchView'; //  can assign them another name

import * as searchView from './view/searchView'; // import everything

import axios from 'axios'; // the name of the package
console.log(string);
console.log(add(5,5)); // imported functions 
console.log(serchView.add(5,5))
```

**Using and API**

Api key is a password for each user to make request 

We use axios as a way to make requests

Automatically returns json , better ar error handling

Expression Adder (for ETHWORKS)
================

[![GitHub issues](https://img.shields.io/github/issues/lucasnga/polynomial-expression-adder.svg)](https://github.com/lucasnga/polynomial-expression-adder/issues)
[![GitHub PRs](https://img.shields.io/github/issues-pr/lucasnga/polynomial-expression-adder.svg)](https://github.com/lucasnga/polynomial-expression-adder/pulls)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Overview
--------

Adder takes two arrays as arguments. Those arrays contains arrays which have a structure in which each item has a specific meaning:
 
     constrain - number
     exponential - number
     term - [ constrain, exponential ]
     expression/argument - [ term, term, ... ]
 
example:
   
    2x^2 + 3 = [ [2, 2], [3] ]
    3x^3 + x^2 = [ [3,3], [1,2] ]
 
The return value is an array of same structure as arguments.
  
<img src="https://raw.githubusercontent.com/lucasnga/polynomial-expression-adder/master/public/assets/demo.png">

```js
 const result = adder(
  // 2x^2 + 3
  [ [2, 2], [3] ],
  // 3x^3 + x^2  
  [ [3,3], [1,2] ]
);

debugger;

// 3x^3 + 3x^2 + 3
result; // [ [ 3, 3 ], [ 3, 2 ], [ 3 ] ]
``` 

Installation and running
------------------------

You can install application on your local environment or using Docker.

### Using Docker

You need to have Docker and Docker-Compose installed on your local machine.

1. Clone this repository to your local computer.
2. Change directory to project root and run `docker-compose up`.

Application will be accessible by the following address: `http://localhost:3000/`.
Unit tests can be executed by running the following command: `docker exec -it <CONTAINER_NAME> yarn test`.
(use `docker ps` command to determine`<CONTAINER_NAME>`)

### Using Node and Yarn from your local machine

You need to have Node JS and Yarn installed on your local computer.

1. Clone this repository to your local computer.
2. Change directory to project root and run `yarn install`.
3. Run web server by executing command: `yarn start`.

Application will be accessible by the following address: `http://localhost:3000/`.
Unit tests can be executed by running the following command: `yarn test`.

TODO
----

- add eslint, prettier
- use typescript

Author
------

[Łukasz Anuszkiewicz](mailto:odysey84@gmail.com) made with love <span style="color: #e25555;">&#9829;</span> to ETH ;)
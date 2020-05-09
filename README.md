Expression Adder
================

Overview
--------


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

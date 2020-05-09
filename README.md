Expression Adder
================

Overview
--------


Installation and running
------------------------

You can install application on your local environment or using Docker.

### Using Docker

You need to have Docker and Docker-Compose installed on your local machine.

1. Clone your forked repository (master branch) locally.
2. Change directory to project root and run `docker-compose up`.
3. Application will be accessible by the following address: `http://localhost:3000/`.
4. Unit tests can be executed by running the following command: `docker exec -it <CONTAINER_NAME> yarn test`.
5. `<CONTAINER_NAME>` can be checked by running the following command: `docker ps`.

### Using Node and Yarn from your local machine

You need to have Node JS and Yarn installed on your local machine.

1. Clone your forked repository (master branch) locally.
2. Change directory to project root and run `yarn install`.
3. Run web server by using the following command: `yarn start`.
4. Application will be accessible by the following address: `http://localhost:3000/`.
5. Unit tests can be executed by running the following command: `yarn test`.

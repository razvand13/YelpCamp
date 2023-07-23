# Description
This is a Web Development project part of the online course [The Web Developer Bootcamp 2023](https://www.udemy.com/course/the-web-developer-bootcamp/). It is a means of presenting knowledge of HTML, CSS, JavaScript, alongside frameworks, libraries and add-ons like Bootstrap, MongoDB, Mongoose, EJS, Express etc.


# How to run it

Firstly, NodeJS must be installed locally and the command
```
$ npm i
```
must be run in a terminal opened in the root of the directory, to install all of the node dependencies. [Here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) is some helpful documentation.

Aside from the NodeJS dependencies, this project currently uses a local [MongoDB](https://www.mongodb.com/) database. The connection to the database is made via [Mongoose](https://mongoosejs.com/), a dependency which will already be installed by running the command above.

To start this server, MongoDB must exist locally, and the command 
``` 
$ mongod
``` 
must be run in a terminal. This creates a local database node.

Mongo Shell can also be used in a separate terminal, for DB queries. This means installing Mongo Shell and running

``` 
$ mongosh
``` 
in another terminal, but it is not needed for running the application.

Finally, the server is started in a third terminal, with the command 
``` 
$ nodemon app.js
```  
run in the root of the directoy. For some version of nodejs and nodemon this command might be 
``` 
$ node app.js
``` 

# This README will be changed before the final version of the project
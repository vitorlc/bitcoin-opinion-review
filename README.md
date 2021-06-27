# :gear: Bitcoin Opinion Review

API that analyzes opinions about Bitcoin.

***

## Project setup
Assuming you already have Node, NPM and Mysql,
### Clone or fork this repository

#### `git clone https://github.com/vitorlc/bitcoin-opinion-review`

 cd to directory


Run ```npm install``` and install all the necessary dependencies.

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_HOST`
`DB_USERNAME`
`DB_PASSWORD`
`DB_NAME`
`DB_DIALECT`
`DB_PORT`

Rename ".env.sample" to ".env"

### Connect to database
 
Now, you need to connect to the database and then create another database schema with the name you gave in the .env file. In this example, the database name is "database_development" (Ex: `create shema database_development;`). For this step you can use any mysql client interface like MySQL Workbench, DBeaver, etc.



### Run migrations

Now you can run migrations to create the database tables schema.

#### `npx sequelize-cli db:migrate`

### Server is ready! You can run it with:

#### `npm run dev`

That runs the app in development mode.

***
### Run tests

#### `npm run test`

### Routes

ROUTE                      |     HTTP Method   |      Description              |      Links (via PostMan)                 
-------------------------  | ----------------- | ---------------------         | ---------------------------------------- 
/opinions                  |       POST        | Create new Opinion            | POST:    http://localhost:3000/api/opinions      
/opinions/:author          |       GET         | List the author's opinion     | GET:   http://localhost:3000/api/opinions/:author

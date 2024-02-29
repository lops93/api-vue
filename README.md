## About the project

#### Overview:

The ApiVue is a simple application designed to facilitate task management for users. It offers basic functionalities for creating, viewing, updating, and deleting courses from a list.

### REST API Laravel:

Routes for handling CRUD operations (Create, Read, Update, Delete) for courses.

Controllers to process Models to represent task data in the database.

Migrations to define the database structure.

#### Vue.js Front-end:

User interface for interacting with the API.

Pages for displaying, creating, editing, and deleting courses.

Reusable components for forms, course lists, etc.

### MySQL Database:

Stores information about courses, such as title, description, status, creation date, etc.
Tables to represent task data.

#### Technologies Used:

Laravel: PHP framework for the back-end.
Vue.js: JavaScript framework for the front-end.
MySQL: Relational database for storing task data.
Axios: JavaScript library for making HTTP requests from Vue.js to the Laravel API.

## installation

- clone the project

#### rest-api folder

- create .env file (change the APP_URL and configure database)
- composer install
- php artisan migrate --seed
- php artisan key:generate
- php artisan serve

#### vue-rest-api folder

- npm install
- npm run dev

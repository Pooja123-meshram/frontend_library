Library Management System

This project is a Library Management System built using React.js for the frontend and Django REST Framework for the backend. It allows administrators to manage books and enables students to view available books.

Features

Admin Panel: CRUD operations (Create, Read, Update, Delete) for books.

Student View: Search and filter books.

Authentication: Secure login system for admin access.

REST API: Backend built using Django REST Framework (DRF).

Database: MySQL integration for storing book records.

UI: Designed using React for a clean and responsive interface.

Getting Started

Prerequisites

Ensure you have the following installed:

Node.js (For frontend development)

npm or yarn (Package manager)

Python 3.x (For backend development)

Django & Django REST Framework

MySQL (Database)

Installation

1. Clone the Repository
2. 
create project library
cd library

git clone https://github.com/Pooja123-meshram/frontend_library.git


3. Install Dependencies (Frontend)

npm install

3. Start the React App

npm start

This will run the frontend at http://localhost:3000

Backend Setup (Django)

Navigate to the backend directory:

cd backend_library

Install dependencies:

pip install -r requirements.txt

Run migrations:

python manage.py migrate

Start the Django server:

python manage.py runserver

This will run the backend at http://127.0.0.1:8000

Available Scripts

npm start

Runs the frontend in development mode.

npm test

Launches the test runner.

npm run build

Builds the frontend for production.

Deployment

To deploy the frontend, build the project:

npm run build

Then, upload the build/ folder to a hosting service like Vercel, Netlify, or GitHub Pages.

For backend deployment, configure Django with Gunicorn and NGINX, and host it on a cloud provider such as AWS, DigitalOcean, or Heroku.

Learn More

React Documentation: https://reactjs.org/

Django REST Framework: https://www.django-rest-framework.org/

Author

Developed by Pooja Meshram

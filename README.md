Installation:
      Clone the project and install the necessary dependencies and give npm install or yarn install.

Controllers:
      The controllers folder has all the functions which is needed to fetch or post data from or into the table.
      -Fetching data from students table
      -Posting data from the form to the table
      -Fetching all the assessments in the dropdown
      -Fetching data for teachers table
      
Migration:
      The migration folder contains all the tables which is needed to be create for the project.In this project we have three tables such as AssessmentDetails,Students,Teachers. 
You can run the migrations by using the scripts in the package.json.

Routers:
      The routers folder has the routers.
      -Fetching data from students table (http://localhost:8000/api/v10/table)
      -Posting data from the form to the table (http://localhost:8000/api/v10/table)
      -Fetching all the assessments in the dropdown (http://localhost:8000/api/v10)
      -Fetching data for teachers table (http://localhost:8000/api/v10/teacherTable)
You can also do the get, post operations in postman.

Starting the server:
       By giving npm run start or yarn start in the terminal the server will start by running http://localhost:8000.

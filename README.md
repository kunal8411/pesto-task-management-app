# Task Management Application

## Description

This task management application allows users to efficiently manage their tasks. Users can create, update, delete tasks, and filter them based on their status. Tasks are categorized as "To Do," "In Progress," or "Done" and include a title and description.

The backend is built using Node.js with Express, and MongoDB is used as the database to store task data. On the frontend, React functional components are utilized to create an intuitive user interface.

## How to Run

### Prerequisites
- Node.js installed on your machine
- MongoDB installed and running

### Steps
1. Clone the repository:


git clone https://github.com/kunal8411/pesto-task-management-app.git



2. Navigate to the project directory:


cd pesto-task-management-app

3. Install dependencies for the server:

   cd Node
   npm install

4. Start the server:
npm start



5. Open another terminal window/tab, navigate to the project directory, and install dependencies for the client:

cd React/task-management-app
npm install
   
6. Start the client:
npm start


7. Access the application in your web browser at: http://localhost:3000

## Features

- **Create Task**: Users can create new tasks by providing a title, and description, and selecting a status.
- **Update Task**: Tasks can be updated to change their title, description, or status.
- **Delete Task**: Users can delete tasks they no longer need.
- **Filter Tasks**: Users can filter tasks based on their status (e.g., "To Do," "In Progress," "Done").

## Assumptions

- Users must have an account and be authenticated to access the application.
- Tasks can only be deleted by the user who created them.

## Feedback

Your feedback on the application is greatly appreciated! If you encounter any issues or have suggestions for improvements, please feel free to open an issue on GitHub or reach out directly.







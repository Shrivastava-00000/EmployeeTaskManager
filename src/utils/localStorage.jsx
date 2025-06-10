

const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Submit Report",
        taskDescription: "Submit the monthly report",
        taskDate: "2025-06-10",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Database",
        taskDescription: "Update client information",
        taskDate: "2025-06-09",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Follow up Meeting",
        taskDescription: "Follow up with team after meeting",
        taskDate: "2025-06-08",
        category: "Meetings"
      }
    ]
  },
  {
    id: 2,
    firstname: "Sneha",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design New Logo",
        taskDescription: "Design a new logo for a client",
        taskDate: "2025-06-10",
        category: "Design"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Call",
        taskDescription: "Schedule a call with the client",
        taskDate: "2025-06-11",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Market Research",
        taskDescription: "Conduct market research",
        taskDate: "2025-06-12",
        category: "Research"
      }
    ]
  },
  {
    id: 3,
    firstname: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review peer's code",
        taskDate: "2025-06-10",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Write tests for the new module",
        taskDate: "2025-06-09",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Bugs",
        taskDescription: "Resolve reported issues",
        taskDate: "2025-06-11",
        category: "Maintenance"
      }
    ]
  },
  {
    id: 4,
    firstname: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Prepare presentation for the meeting",
        taskDate: "2025-06-08",
        category: "Presentations"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Budget Analysis",
        taskDescription: "Analyze the project budget",
        taskDate: "2025-06-12",
        category: "Finance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Feedback",
        taskDescription: "Review client feedback",
        taskDate: "2025-06-10",
        category: "Communication"
      }
    ]
  },
  {
    id: 5,
    firstname: "Kunal",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Plan Event",
        taskDescription: "Organize a team-building event",
        taskDate: "2025-06-13",
        category: "Events"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server Maintenance",
        taskDescription: "Perform routine server updates",
        taskDate: "2025-06-07",
        category: "IT"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Website",
        taskDescription: "Revise the website content and structure",
        taskDate: "2025-06-14",
        category: "Web Development"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocaStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))


}
export const getLocaStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}

    
}





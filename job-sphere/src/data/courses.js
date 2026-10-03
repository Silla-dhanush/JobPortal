const BASE_URL = import.meta.env.BASE_URL;

export const Courses = [
  {
    id: 1,
    image: `${BASE_URL}images/screen4.png`,
    courseName: "Complete React.js Bootcamp",
    instructor: "John Smith",
    category: "Frontend Development",
    duration: "8 Weeks",
    level: "Intermediate",
    language: "English",
    startDate: "20 August 2026",
    price: "₹2,999",
    rating: 4.8,
    registeredPeople: "2,350+ Students Enrolled",
    description:
      "Master React.js from basics to advanced concepts by building real-world projects using Hooks, React Router, Context API, and state management. Learn component-based architecture, state management techniques, API integration, authentication, performance optimization, and deployment. By the end of the course, you will build multiple production-ready React applications and gain the confidence to develop modern, responsive web applications.",
    whatYouWillLearn: [
      "React Fundamentals",
      "JSX & Components",
      "React Hooks",
      "React Router",
      "Context API",
      "API Integration",
      "Project Deployment"
    ],
    prerequisites: [
      "HTML",
      "CSS",
      "JavaScript Basics"
    ]
  },

  {
    id: 2,
    image: `${BASE_URL}images/screen5.png`,
    courseName: "Node.js & Express Masterclass",
    instructor: "David Wilson",
    category: "Backend Development",
    duration: "10 Weeks",
    level: "Intermediate",
    language: "English",
    startDate: "25 August 2026",
    price: "₹3,499",
    rating: 4.9,
    registeredPeople: "1,890+ Students Enrolled",
    description:
  "Learn backend development using Node.js and Express by building REST APIs with authentication, MongoDB, and JWT. Understand server-side architecture, middleware, routing, database design, file uploads, security best practices, and error handling. You'll create scalable backend applications and deploy them to the cloud using industry-standard development practices.",
    whatYouWillLearn: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "JWT Authentication",
      "File Upload",
      "Deployment"
    ],
    prerequisites: [
      "JavaScript",
      "Basic Programming Knowledge"
    ]
  },

  {
    id: 3,
    image: `${BASE_URL}images/screen6.png`,
    courseName: "Java DSA for Placements",
    instructor: "Rahul Sharma",
    category: "Programming",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    language: "English",
    startDate: "1 September 2026",
    price: "₹3,999",
    rating: 5.0,
    registeredPeople: "4,120+ Students Enrolled",
    description:
  "Prepare for coding interviews by mastering Java and Data Structures & Algorithms with 250+ coding problems. Learn arrays, strings, linked lists, stacks, queues, trees, graphs, dynamic programming, and advanced problem-solving techniques. The course also covers coding interview strategies, time and space complexity analysis, and mock interview practice for top product-based companies.",
    whatYouWillLearn: [
      "Java Basics",
      "Arrays",
      "Strings",
      "Linked Lists",
      "Trees & Graphs",
      "Dynamic Programming",
      "Interview Preparation"
    ],
    prerequisites: [
      "Basic Computer Knowledge"
    ]
  },

  {
    id: 4,
    image: `${BASE_URL}images/screen2.png`,
    courseName: "Python Programming Complete Guide",
    instructor: "Sarah Johnson",
    category: "Programming",
    duration: "6 Weeks",
    level: "Beginner",
    language: "English",
    startDate: "5 September 2026",
    price: "₹2,499",
    rating: 4.7,
    registeredPeople: "3,480+ Students Enrolled",
    description:
  "Learn Python from scratch and build projects while understanding programming fundamentals and automation. Explore object-oriented programming, file handling, modules, exception handling, data analysis basics, and scripting for automation. You'll work on practical projects that strengthen your coding skills and prepare you for software development or data science.",
    whatYouWillLearn: [
      "Python Basics",
      "Functions",
      "OOP",
      "File Handling",
      "Modules",
      "Automation Scripts",
      "Mini Projects"
    ],
    prerequisites: [
      "No Prior Experience Required"
    ]
  },

  {
    id: 5,
    image: `${BASE_URL}images/screen3.png`,
    courseName: "MERN Stack Development",
    instructor: "Michael Brown",
    category: "Full Stack Development",
    duration: "14 Weeks",
    level: "Advanced",
    language: "English",
    startDate: "10 September 2026",
    price: "₹5,499",
    rating: 4.9,
    registeredPeople: "1,520+ Students Enrolled",
    description:
  "Become a Full Stack Developer by mastering MongoDB, Express.js, React.js, and Node.js through industry-level projects. Learn frontend and backend integration, authentication, REST APIs, database management, cloud deployment, and Git version control. By completing a full-scale MERN project, you'll gain the skills required to build and deploy complete web applications.",
    whatYouWillLearn: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Authentication",
      "Cloud Deployment",
      "Complete MERN Project"
    ],
    prerequisites: [
      "HTML",
      "CSS",
      "JavaScript",
      "Basic React Knowledge"
    ]
  },

  {
    id: 6,
    image: `${BASE_URL}images/screen7.png`,
    courseName: "AWS Cloud Practitioner",
    instructor: "Emily Davis",
    category: "Cloud Computing",
    duration: "5 Weeks",
    level: "Beginner",
    language: "English",
    startDate: "15 September 2026",
    price: "₹2,799",
    rating: 4.8,
    registeredPeople: "980+ Students Enrolled",
    description:
  "Learn AWS Cloud fundamentals including EC2, S3, IAM, VPC, and prepare for the AWS Certified Cloud Practitioner exam. Understand cloud computing concepts, networking, storage services, security, monitoring, pricing, and deployment strategies. Gain hands-on experience with AWS services and build the foundation needed for cloud engineering and certification success.",
    whatYouWillLearn: [
      "AWS Fundamentals",
      "EC2",
      "S3",
      "IAM",
      "VPC",
      "Cloud Security",
      "Certification Preparation"
    ],
    prerequisites: [
      "Basic Computer Knowledge",
      "Internet Fundamentals"
    ]
  }
];
// src/data/BlogData.js
import asyncAwaitImg from "../assets/Blogs-images/asyncAwaitImg.png";
import browserImg from "../assets/Blogs-images/browserImg.png";
import connectFrontendBackendImg from "../assets/Blogs-images/connectFrontendBackendImg.jpg";
import eCommerceSiteImg from "../assets/Blogs-images/eCommerceSiteImg.png";
import gitImg from "../assets/Blogs-images/gitImg.png";
import tailwindCssImg from "../assets/Blogs-images/tailwindCssImg.png";
import jsClosuresImg from "../assets/Blogs-images/jsClosuresImg.png";
import jsCodeImg from "../assets/Blogs-images/jsCodeImg.jpg";
import mongoDbImg from "../assets/Blogs-images/mongoDbImg.png";
import portfolioSiteImg from "../assets/Blogs-images/portfolioSiteImg.png";
import reactBlogImg from "../assets/Blogs-images/reactBlogImg.png";
import reactCodeImg from "../assets/Blogs-images/reactCodeImg.jpg";
import securityImg from "../assets/Blogs-images/securityImg.png";
import setupImg from "../assets/Blogs-images/setupImg.jpg";
import productivityToolsImg from "../assets/Blogs-images/productivityToolsImg.png";
import toDoListImg from "../assets/Blogs-images/toDoListImg.png";
import topExtensionsImg from "../assets/Blogs-images/topExtensionsImg.png";
import typescriptImg from "../assets/Blogs-images/typescriptImg.png";
import uiImg from "../assets/Blogs-images/uiImg.jpg";
import nodeJsImg from "../assets/Blogs-images/nodeJsImg.png";
import expressJsImg from "../assets/Blogs-images/expressJsImg.png";
import jsDebuggingImg from "../assets/Blogs-images/jsDebuggingImg.png";

const blogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Dive into React by building your first interactive web app.",
    description:
      "Dive into the world of React by building your first interactive web application. This guide walks you through setting up a React environment, creating components, and managing state to create dynamic user interfaces.",
    category: "Frontend / Web Development",
    slug: "getting-started-with-react",
    publishedDate: "2023-01-01",
    image: reactCodeImg,
    content: `
React is one of the most popular JavaScript libraries for building interactive UIs. It lets developers break interfaces into small, reusable components.

### Setting Up React
You can create a new React app easily:
\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

This sets up everything you need to start coding.

### Why React?
- **Reusable Components:** Build once, use anywhere.
- **Virtual DOM:** React efficiently updates only changed elements.
- **Strong Community:** Tons of libraries and tutorials are available.

React is the perfect start for anyone stepping into frontend development.
`,
  },
  {
    id: 2,
    title: "JavaScript ES6 Features You Must Know",
    excerpt:
      "Learn key ES6 features to simplify and enhance your JavaScript code.",
    description:
      "Explore essential ES6 features like arrow functions, destructuring, and template literals. Learn how these modern JavaScript tools can simplify your code and boost productivity in web development projects.",
    category: "Frontend / Web Development",
    slug: "javascript-es6-features-you-must-know",
    publishedDate: "2023-02-01",
    image: jsCodeImg,
    content: `
ECMAScript 6 (ES6) introduced many new features that made JavaScript more modern and readable.

### Key ES6 Features
1. **Arrow Functions**
   \`\`\`js
   const add = (a, b) => a + b;
   \`\`\`
2. **Template Literals**
   \`\`\`js
   console.log(\`Hello, \${name}!\`);
   \`\`\`
3. **Destructuring**
   \`\`\`js
   const { title, author } = book;
   \`\`\`

### Why Learn ES6?
These features simplify your code, improve readability, and make development faster.
`,
  },
  {
    id: 3,
    title: "Building Responsive UI with Tailwind CSS",
    excerpt: "Create responsive layouts with Tailwind CSS tips and tricks.",
    description:
      "Master responsive design with Tailwind CSS. Discover tips and tricks to create mobile-friendly, adaptable layouts using utility-first CSS, streamlining your workflow for faster and cleaner styling.",
    category: "Frontend / Web Development",
    slug: "building-responsive-ui-with-tailwind-css",
    publishedDate: "2023-03-01",
    image: tailwindCssImg,
    content: `
Tailwind CSS is a utility-first CSS framework that helps you create responsive layouts quickly.

### Getting Started
Install Tailwind in your project:
\`\`\`bash
npm install -D tailwindcss
npx tailwindcss init
\`\`\`

### Example Responsive Layout
\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="bg-blue-500 p-4">Left</div>
  <div class="bg-green-500 p-4">Right</div>
</div>
\`\`\`

### Why Tailwind?
- Rapid styling using utility classes  
- Mobile-first design  
- Easy customization

Build once, and Tailwind handles the responsiveness for you.
`,
  },
  {
    id: 4,
    title: "Understanding Flexbox and CSS Grid",
    excerpt: "Master Flexbox and CSS Grid for easy, powerful layouts.",
    description:
      "Learn the fundamentals of Flexbox and CSS Grid to create flexible and powerful layouts. This guide breaks down both tools with practical examples to simplify web design and alignment challenges.",
    category: "Frontend / Web Development",
    slug: "understanding-flexbox-and-css-grid",
    publishedDate: "2023-04-01",
    image: uiImg,
    content: `
Flexbox and Grid are two powerful CSS layout systems for modern web design.

### Flexbox Example
\`\`\`html
<div class="flex justify-center items-center h-64 bg-gray-200">
  <p>Centered Text</p>
</div>
\`\`\`

### Grid Example
\`\`\`html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-300">1</div>
  <div class="bg-blue-300">2</div>
  <div class="bg-blue-300">3</div>
</div>
\`\`\`

Flexbox is great for 1D layouts (rows/columns), while Grid is ideal for 2D layouts.
`,
  },
  {
    id: 5,
    title: "10 Useful VS Code Extensions for Developers",
    excerpt: "Boost productivity with these top VS Code extensions.",
    description:
      "Boost your coding efficiency with these 10 must-have VS Code extensions. From code formatting to debugging tools, explore extensions that enhance productivity and streamline your development workflow.",
    category: "Frontend / Web Development",
    slug: "10-useful-vs-code-extensions-for-developers",
    publishedDate: "2023-05-01",
    image: topExtensionsImg,
    content: `
Visual Studio Code offers thousands of extensions that improve your workflow.

### Must-Have Extensions
1. **Prettier** — Automatic code formatter  
2. **ESLint** — Code linting for JavaScript  
3. **Live Server** — Real-time browser reload  
4. **GitLens** — View Git history in editor  
5. **Auto Rename Tag** — Renames paired HTML tags  
6. **Material Icon Theme** — Clean file icons  
7. **Tailwind CSS IntelliSense** — Tailwind autocomplete  
8. **Error Lens** — Highlights code errors  
9. **Code Spell Checker** — Catches typos  
10. **Path Intellisense** — Autocomplete for file paths  

Install these to make coding smoother and more enjoyable.
`,
  },
  {
    id: 6,
    title: "Node.js Basics: Your First Server",
    excerpt: "Set up your first Node.js server for backend development.",
    description:
      "Get started with backend development by setting up your first Node.js server. This tutorial covers the basics of Node.js, creating routes, and handling requests to kickstart your backend journey.",
    category: "Backend / Full Stack",
    slug: "node-js-basics-your-first-server",
    publishedDate: "2023-06-01",
    image: nodeJsImg,
    content: `
Node.js allows JavaScript to run outside the browser, perfect for backend development.

### Create a Simple Server
\`\`\`js
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello from Node.js');
});
server.listen(3000);
\`\`\`

Visit \`localhost:3000\` — you’ve just created a web server!

Node.js is great for building scalable, fast applications.
`,
  },
  {
    id: 7,
    title: "REST API with Express.js",
    excerpt: "Build a RESTful API with Express.js step by step.",
    description:
      "Build a RESTful API from scratch using Express.js. Follow this step-by-step guide to create endpoints, handle HTTP requests, and integrate middleware for robust backend functionality.",
    category: "Backend / Full Stack",
    slug: "rest-api-with-express-js",
    publishedDate: "2023-07-01",
    image: expressJsImg,
    content: `
Express.js simplifies building APIs in Node.js.

### Example REST API
\`\`\`js
const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to API' });
});

app.listen(4000, () => console.log('Server running on 4000'));
\`\`\`

This creates an API endpoint returning JSON. You can expand it with routes, middleware, and authentication later.
`,
  },
  {
    id: 8,
    title: "Introduction to MongoDB",
    excerpt: "Learn MongoDB basics for NoSQL database management.",
    description:
      "Discover MongoDB, a leading NoSQL database. This beginner-friendly guide explains how to store, query, and manage data in MongoDB, perfect for building scalable and flexible applications.",
    category: "Backend / Full Stack",
    slug: "introduction-to-mongodb",
    publishedDate: "2023-08-01",
    image: mongoDbImg,
    content: `
MongoDB is a NoSQL database used to store data in flexible, JSON-like documents.

### Example
\`\`\`js
db.users.insertOne({ name: "Palden", age: 20 });
\`\`\`

MongoDB allows quick scaling and works perfectly with Node.js through Mongoose.

### Why Use MongoDB?
- Schema-less flexibility  
- Easy integration with JavaScript  
- Great for modern web apps
`,
  },
  {
    id: 9,
    title: "How to Connect Frontend with Backend",
    excerpt: "Integrate frontend and backend for full-stack apps.",
    description:
      "Learn how to integrate your frontend and backend for a seamless full-stack application. This tutorial covers making API calls, handling responses, and ensuring smooth data flow between client and server.",
    category: "Backend / Full Stack",
    slug: "how-to-connect-frontend-with-backend",
    publishedDate: "2023-09-01",
    image: connectFrontendBackendImg,
    content: `
Connecting your frontend to a backend API is essential for building full-stack applications that handle real data.

### Making API Calls
Use \`fetch\` or Axios to send requests from the frontend:
\`\`\`js
fetch('http://localhost:4000/api/users')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
\`\`\`

### Handling Responses
Process the data in your React components or vanilla JS to update the UI dynamically.

### Why Connect Them?
- Enables data persistence and user interactions.
- Builds scalable apps with separate concerns.
- Essential for modern web development like MERN stack.
`,
  },
  {
    id: 10,
    title: "Authentication & Authorization in Web Apps",
    excerpt: "Secure your web apps with authentication techniques.",
    description:
      "Secure your web applications by implementing authentication and authorization. Learn about user login systems, JWT tokens, and role-based access control to protect your app's data and functionality.",
    category: "Backend / Full Stack",
    slug: "authentication-authorization-in-web-apps",
    publishedDate: "2023-10-01",
    image: securityImg,
    content: `
Securing your web apps with authentication and authorization protects user data and controls access.

### Implementing JWT Authentication
Use JSON Web Tokens (JWT) for secure sessions:
\`\`\`js
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 1 }, 'secretKey', { expiresIn: '1h' });
\`\`\`

### Role-Based Authorization
Check user roles in middleware:
\`\`\`js
function checkAdmin(req, res, next) {
  if (req.user.role === 'admin') return next();
  res.status(403).send('Access denied');
}
\`\`\`

### Why Secure Your App?
- Prevents unauthorized access.
- Builds trust with users.
- Complies with data protection standards.
`,
  },
  {
    id: 11,
    title: "JavaScript Async/Await Explained",
    excerpt: "Simplify asynchronous JavaScript with async/await.",
    description:
      "Simplify asynchronous JavaScript with async/await. This guide explains how to handle promises, manage asynchronous operations, and write cleaner code for tasks like API calls and file operations.",
    category: "Programming & JavaScript",
    slug: "javascript-async-await-explained",
    publishedDate: "2023-11-01",
    image: asyncAwaitImg,
    content: `
Async/await makes handling asynchronous code in JavaScript feel synchronous and easier to read.

### Basic Usage
Wrap async functions and use await for promises:
\`\`\`js
async function fetchData() {
  try {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
\`\`\`

### Error Handling
Use try/catch blocks to manage errors gracefully.

### Why Use Async/Await?
- Cleaner code than callbacks or promises.
- Improves readability for complex flows.
- Essential for modern JS development.
`,
  },
  {
    id: 12,
    title: "Top 10 JavaScript Array Methods You Should Know",
    excerpt: "Master key JavaScript array methods for better coding.",
    description:
      "Master essential JavaScript array methods like map, filter, and reduce. This post explores 10 powerful methods with examples to help you manipulate arrays effectively in your projects.",
    category: "Programming & JavaScript",
    slug: "top-10-javascript-array-methods-you-should-know",
    publishedDate: "2023-12-01",
    image: jsCodeImg,
    content: `
Master these array methods to manipulate data efficiently in JavaScript.

### Key Methods
1. **map()** — Transform elements:
   \`\`\`js
   const doubled = [1, 2, 3].map(x => x * 2);
   \`\`\`
2. **filter()** — Select elements:
   \`\`\`js
   const evens = [1, 2, 3].filter(x => x % 2 === 0);
   \`\`\`
3. **reduce()** — Accumulate values:
   \`\`\`js
   const sum = [1, 2, 3].reduce((acc, x) => acc + x, 0);
   \`\`\`

Other essentials: forEach, find, some, every, includes, sort, splice.

### Why Learn Them?
- Streamlines data processing.
- Reduces code complexity.
- Boosts performance in apps.
`,
  },
  {
    id: 13,
    title: "Understanding JavaScript Closures",
    excerpt: "Learn how JavaScript closures work with clear examples.",
    description:
      "Demystify JavaScript closures with this clear explanation. Learn how closures work, why they’re useful, and how to use them to manage scope and state in your applications.",
    category: "Programming & JavaScript",
    slug: "understanding-javascript-closures",
    publishedDate: "2024-01-01",
    image: jsClosuresImg,
    content: `
Closures allow functions to access variables from an outer scope even after the outer function has returned.

### Simple Example
Create a private counter:
\`\`\`js
function makeCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
\`\`\`

### Practical Uses
Closures are key in callbacks, modules, and data privacy.

### Why Closures Matter?
- Enables data encapsulation.
- Powers higher-order functions.
- Fundamental to advanced JS patterns.
`,
  },
  {
    id: 14,
    title: "How to Debug JavaScript Efficiently",
    excerpt: "Debug JavaScript faster with practical techniques.",
    description:
      "Debug JavaScript like a pro with these practical tips. Discover techniques for using browser dev tools, logging, and breakpoints to identify and fix issues in your code quickly.",
    category: "Programming & JavaScript",
    slug: "how-to-debug-javascript-efficiently",
    publishedDate: "2024-02-01",
    image: jsDebuggingImg,
    content: `
Effective debugging saves time and frustration in JavaScript development.

### Using Browser Dev Tools
Set breakpoints in Chrome DevTools to pause execution and inspect variables.

### Logging Techniques
Use console methods:
\`\`\`js
console.log('Value:', variable);
console.table(arrayData);
console.error('Error occurred');
\`\`\`

### Common Strategies
- Step through code.
- Check for typos and scope issues.
- Use try/catch for errors.

### Why Improve Debugging?
- Fixes bugs faster.
- Leads to cleaner code.
- Enhances overall developer skills.
`,
  },
  {
    id: 15,
    title: "Introduction to TypeScript",
    excerpt: "Add type safety to JavaScript with TypeScript basics.",
    description:
      "Add type safety to your JavaScript projects with TypeScript. This beginner’s guide covers TypeScript basics, setting up types, and integrating it into your existing JavaScript codebase.",
    category: "Programming & JavaScript",
    slug: "introduction-to-typescript",
    publishedDate: "2024-03-01",
    image: typescriptImg,
    content: `
TypeScript adds static typing to JavaScript, catching errors early and improving code quality.

### Basic Types
Declare variables with types:
\`\`\`ts
let name: string = 'Alice';
let age: number = 30;
function greet(person: string): string {
  return \`Hello, \${person}\`;
}
\`\`\`

### Setting Up
Install TypeScript and compile to JS:
\`\`\`bash
npm install -g typescript
tsc script.ts
\`\`\`

### Why Use TypeScript?
- Reduces runtime errors.
- Better IDE support with autocompletion.
- Ideal for large-scale applications.
`,
  },
  {
    id: 16,
    title: "Build a To-Do List App with Vanilla JS",
    excerpt: "Create a to-do list app with vanilla JavaScript.",
    description:
      "Create a functional to-do list app using vanilla JavaScript. This beginner-friendly project covers DOM manipulation, event handling, and local storage to build a practical web app.",
    category: "Projects & Tutorials",
    slug: "build-a-to-do-list-app-with-vanilla-js",
    publishedDate: "2024-04-01",
    image: toDoListImg,
    content: `
Create a simple to-do list app using plain JavaScript to practice DOM manipulation.

### Core Functionality
Add tasks with event listeners:
\`\`\`js
document.getElementById('addBtn').addEventListener('click', () => {
  const task = document.getElementById('input').value;
  const li = document.createElement('li');
  li.textContent = task;
  document.getElementById('list').appendChild(li);
});
\`\`\`

### Adding Features
Include delete buttons and localStorage for persistence.

### Why Build This?
- Reinforces JS fundamentals.
- Hands-on project for beginners.
- Useful real-world application.
`,
  },
  {
    id: 17,
    title: "Create a Personal Portfolio Website",
    excerpt: "Build a portfolio website to showcase your work.",
    description:
      "Showcase your skills by building a personal portfolio website. Learn how to design a professional-looking site with HTML, CSS, and JavaScript to highlight your projects and expertise.",
    category: "Projects & Tutorials",
    slug: "create-a-personal-portfolio-website",
    publishedDate: "2024-05-01",
    image: portfolioSiteImg,
    content: `
Showcase your work with a custom portfolio site built from scratch.

### Structure
Use HTML for layout:
\`\`\`html
<header>Navigation</header>
<section>Projects</section>
<footer>Contact</footer>
\`\`\`

Style with CSS for responsiveness and add JS for interactivity.

### Tips
- Highlight skills and projects.
- Include a contact form.
- Deploy to GitHub Pages.

### Why a Portfolio?
- Attracts job opportunities.
- Demonstrates your abilities.
- Essential for freelancers.
`,
  },
  {
    id: 18,
    title: "Build an E-commerce Product Page",
    excerpt: "Create a responsive e-commerce product page.",
    description:
      "Practice your frontend skills by building an e-commerce product page. Learn to create a responsive layout, add interactive features like image galleries, and style it for a professional look.",
    category: "Projects & Tutorials",
    slug: "build-an-e-commerce-product-page",
    publishedDate: "2024-08-01",
    image: eCommerceSiteImg,
    content: `
Design a product page for an e-commerce site with interactive elements.

### Layout Example
Use HTML and CSS Grid:
\`\`\`html
<div class="product-grid">
  <img src="product.jpg" alt="Product">
  <div class="details">
    <h2>Product Name</h2>
    <p>$99.99</p>
    <button>Add to Cart</button>
  </div>
</div>
\`\`\`

### Adding JS
Handle cart additions and image zoom.

### Why This Project?
- Practices UI/UX design.
- Integrates frontend skills.
- Prepares for real e-commerce work.
`,
  },
  {
    id: 19,
    title: "Git & GitHub for Beginners",
    excerpt: "Learn Git and GitHub for version control basics.",
    description:
      "Master version control with Git and GitHub. This beginner’s guide covers setting up repositories, committing changes, and collaborating on projects using essential Git commands.",
    category: "Tips / Tools",
    slug: "git-github-for-beginners",
    publishedDate: "2024-09-01",
    image: gitImg,
    content: `
Version control with Git and GitHub is crucial for collaborative coding.

### Basic Commands
Initialize and commit:
\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/user/repo.git
git push -u origin main
\`\`\`

### Branching
Create and merge branches for features.

### Why Use Git/GitHub?
- Tracks changes over time.
- Enables team collaboration.
- Hosts open-source projects.
`,
  },
  {
    id: 20,
    title: "10 Productivity Tools for Developers",
    excerpt: "Discover tools to boost your coding productivity.",
    description:
      "Discover 10 powerful tools and extensions to boost your development workflow. From task managers to code optimizers, these tools help you stay organized and code efficiently.",
    category: "Tips / Tools",
    slug: "10-productivity-tools-for-developers",
    publishedDate: "2024-10-01",
    image: productivityToolsImg,
    content: `
These tools can supercharge your development workflow and efficiency.

### Top Tools
1. **Notion** — All-in-one workspace for notes and tasks.  
2. **Postman** — API testing and development.  
3. **Figma** — Collaborative UI/UX design.  
4. **Slack** — Team communication.  
5. **Trello** — Project management boards.  
6. **Docker** — Containerization for apps.  
7. **Stack Overflow** — Quick answers to questions.  
8. **Grammarly** — Writing and code comments.  
9. **RescueTime** — Track productivity.  
10. **Zapier** — Automate workflows.  

Integrate these to streamline your daily tasks.
`,
  },
  {
    id: 21,
    title: "How to Improve Code Readability",
    excerpt: "Write cleaner code with these best practices.",
    description:
      "Write cleaner, more maintainable code with these best practices. Learn tips for formatting, naming conventions, and structuring your code to make it easier for others to understand.",
    category: "Tips / Tools",
    slug: "how-to-improve-code-readability",
    publishedDate: "2024-11-01",
    image: jsCodeImg,
    content: `
Readable code is easier to maintain and collaborate on.

### Best Practices
- Use meaningful variable names: \`userAge\` instead of \`x\`.
- Add comments:
  \`\`\`js
  // Calculate total price with tax
  const total = price * (1 + taxRate);
  \`\`\`
- Follow consistent formatting with tools like Prettier.

### Additional Tips
- Keep functions short.
- Avoid deep nesting.
- Refactor regularly.

### Why Focus on Readability?
- Reduces bugs.
- Speeds up onboarding.
- Improves long-term project health.
`,
  },
  {
    id: 22,
    title: "Debugging Tips for Web Developers",
    excerpt: "Solve coding issues faster with debugging tips.",
    description:
      "Solve problems faster with these debugging strategies. Learn how to use browser tools, logs, and systematic approaches to identify and fix issues in your web development projects.",
    category: "Tips / Tools",
    slug: "debugging-tips-for-web-developers",
    publishedDate: "2024-12-01",
    image: jsDebuggingImg,
    content: `
Master debugging to resolve issues quickly in web projects.

### Techniques
- Use browser console for logs and errors.
- Network tab to inspect API calls.
- Sources panel for breakpoints:
  \`\`\`js
  debugger; // Pauses execution here
  \`\`\`

### Strategies
- Reproduce the bug.
- Isolate the problem.
- Test assumptions.

### Why Hone Debugging Skills?
- Saves development time.
- Builds problem-solving abilities.
- Leads to more robust applications.
`,
  },
  {
    id: 23,
    title: "Learning Programming Effectively",
    excerpt: "Master programming with effective study techniques.",
    description:
      "Maximize your learning with these study techniques and tips. Discover how to set goals, practice coding effectively, and stay motivated while mastering programming concepts.",
    category: "Tips / Tools",
    slug: "learning-programming-effectively",
    publishedDate: "2025-01-01",
    image: setupImg,
    content: `
Adopt strategies to learn programming faster and retain knowledge better.

### Effective Methods
- Practice daily with small projects.
- Use resources like freeCodeCamp or MDN.
- Join communities on Reddit or Discord.

### Study Tips
- Break down complex topics.
- Teach others what you've learned.
- Review and refactor old code.

### Why Learn Effectively?
- Accelerates career growth.
- Builds confidence.
- Turns learning into a habit.
`,
  },
];

export default blogsData;

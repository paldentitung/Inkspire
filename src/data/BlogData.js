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
  },
];

export default blogsData;

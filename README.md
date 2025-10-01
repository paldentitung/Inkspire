# React Blog Platform (Static)

## Project Overview

The React Blog Platform is a simple, static blog website built with React.js. It allows users to browse blog posts, read full content on a dedicated page, and optionally filter posts by category. This project demonstrates skills in React components, state management, routing, and responsive UI design.

## Features

### Home Page (Blog List)

- Displays all blog posts in cards (title, image, short description).
- Responsive layout for mobile and desktop.

### Blog Details Page

- Clicking on a blog card navigates to the full post.
- Shows title, author, date, content, and image.

### Optional Features

- Comment section: users can add comments stored in useState.
- Categories / Tags filter: filter posts by category.
- Search bar: search blog posts by title.

## Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS or plain CSS
- **Routing**: React Router DOM
- **State Management**: useState and optionally Context API for global state
- **Data Storage**: Static JS array (posts.js)

## Folder Structure

```
react-blog-platform/
│
├─ public/
│   └─ index.html
│
├─ src/
│   ├─ assets/           # Images and static assets
│   ├─ components/       # Reusable components (Header, Footer, PostCard)
│   ├─ pages/            # Pages (Home, PostDetails)
│   ├─ data/             # Static posts data (posts.js)
│   ├─ App.js            # Main app with routes
│   ├─ index.js          # Entry point
│   └─ styles.css        # Global CSS (if not using Tailwind)
│
└─ package.json
```

## Future Enhancements

- Add a backend to store posts and comments (Node.js/Express + MongoDB).
- Implement user authentication for adding posts and comments.
- Add likes, shares, and search functionality.
- Improve UI with animations and better responsiveness.

## Screenshots

(Add screenshots of your Home Page, Blog Details Page, and Comment Section)

## Conclusion

This project demonstrates your ability to build a dynamic, component-based React application with routing, state management, and responsive UI. It’s perfect for showcasing on your portfolio or GitHub.

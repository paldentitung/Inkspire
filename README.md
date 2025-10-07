# Inkspire Blog Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://inkspire-blogsite.netlify.app)

---

## Overview

---

Inkspire is a modern, responsive personal blog platform built with React.js, designed to showcase articles and creative content. It allows users to browse blog posts, read full articles on dedicated pages, and filter posts by category or tags. The platform is structured for seamless navigation, scalability, and a polished user experience, with placeholder pages for additional sections like About, Contact.

The project leverages React Router for client-side routing, React Icons for UI elements, and Tailwind CSS for styling. Blog post data is managed statically for demo purposes but can be integrated with a backend API for dynamic content.

## Features

---

- **Blog Post Catalog**: Browse posts with cards displaying title, image, and short description.
- **Post Details**: View full articles with title, author, date, content.
- **Category Filtering**: Filter posts by categories.
- **Search Functionality**: Search blog posts by title or keywords.
- **Responsive Design**: Mobile-first layout using Tailwind CSS.
- **Comment Section**: Add comments to posts, managed with useState (extendable to backend).
- **Navigation**: Dynamic routing with back button support using React Router's `useNavigate`.

## Future Improvements

---

Planned enhancements to evolve Inkspire into a fully-featured blog platform:

- **Backend Integration**: Add a Node.js/Express server or Next.js API routes to handle dynamic post and comment storage.
- **Database Implementation**: Use MongoDB (NoSQL) or PostgreSQL (relational) for posts, comments, and user data.
- **UI/UX Enhancements**: Add Framer Motion animations, improve accessibility (ARIA labels, keyboard navigation), and enhance search/filter components.
- **Additional Features**: Implement user authentication (JWT or Auth0), newsletter subscriptions, SEO optimizations (React Helmet), and progressive web app (PWA) support.

## Tech Stack

---

- **Frontend**: React 18+, React Router DOM
- **Styling**: Tailwind CSS (via className utilities)
- **Icons**: React Icons (e.g., FaArrowLeft)
- **Data Management**: Static JS array for posts (extendable to Redux or Context API)
- **Build Tool**: Vite 
- **Deployment**:  Netlify

## Installation

---

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/paldentitung/Inkspire
   cd inkspire-blog
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Development Server**:

   ```bash
   npm start
   # or
   yarn start
   ```

   The app will open at `http://localhost:3000`.

4. **Build for Production**:

   ```bash
   npm run build
   # or
   yarn build
   ```

## Usage

---

- **Browse Posts**: Navigate to the homepage to view the blog post catalog.
- **Read Articles**: Click a post card to view full content, author, and comments.
- **Filter/Search**: Use category filters or search bar to find specific posts.
- **Static Pages**: Access `/about`, `/contact`.

### Example Post Structure

---

Posts are defined in `postsData.js` with fields like:

- `id`: Unique identifier
- `image`: Imported asset path
- `title`: Post title
- `author`: Author name
- `date`: Publication date
- `category`: e.g., "Technology", "Lifestyle"
- `description`: Short teaser text
- `content`: Full article text
- `tags`: Array of relevant tags

## Project Structure

---

```
inkspire-blog/
├── src/
│   ├── assets/
│   │   └── images/         # Blog images
│   ├── components/
│   │   └── PlaceholderPage.jsx  # Dynamic content pages
│   ├── context/
│   │   └── CommentContext.jsx   # Context for managing comments
│   ├── data/
│   │   └── postsData.js    # Blog post data
│   ├── App.jsx             # Main app with routing
│   └── index.js            # Entry point
├── public/
│   └── index.html
└── package.json
```

## Contributing

---

1. Fork the project.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

We welcome contributions for new features, bug fixes, or UI improvements!

## License

---

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

---

For questions or support, reach out via the `/contact` page or email: [paldendorjetitung@gmail.com](mailto:paldendorjetitung)

---

_Built with ❤️ on October 07, 2025_

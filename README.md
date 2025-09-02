# Portfolio Template

A simple, responsive portfolio website template built with Node.js, Express, and EJS. This template is ideal for models, creatives, or anyone looking to showcase their work and provide a contact form for visitors.

## Features

- Modern, responsive design using Bootstrap 5
- Home, About, Project (Gallery), and Contact sections
- Contact form with message storage to a text file
- Easy to customize images, text, and styles
- Static assets served from the `public` directory

## Project Structure

```
.
├── messages.txt           # Stores contact form submissions
├── package.json           # Project metadata and dependencies
├── server.js              # Express server setup and routes
├── public/
│   ├── css/
│   │   └── style.css      # Custom styles
│   ├── images/
│   │   └── photo1.jpg     # Gallery images (add your own)
│   └── js/
│       └── script.js      # Navbar collapse script
└── views/
    └── index.ejs          # Main EJS template
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   [git clone https://github.com/AkRawat3278/Modern-Portfolio-Template-.git]
   cd portfolio-template
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Add your images:**
   - Place your gallery images in `public/images/` and update the image filenames in `views/index.ejs` if needed.

4. **Run the server:**
   ```sh
   npm start
   ```
   The site will be available at [http://localhost:5000](http://localhost:5000).

## Customization

- **Text and Sections:**  
  Edit `views/index.ejs` to change section content, headings, and structure.
- **Images:**  
  Replace images in `public/images/` and update their references in the gallery section.
- **Styles:**  
  Modify `public/css/style.css` for custom styles.
- **Contact Form:**  
  Submissions are appended to `messages.txt`. You can change this behavior in [`server.js`](server.js).

## Deployment

You can deploy this project to any Node.js-compatible hosting (Heroku, Vercel, etc.). Make sure to set the correct environment variables and update the port if needed.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ using Node.js and bootstrap

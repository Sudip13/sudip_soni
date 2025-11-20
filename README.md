# Sudip Soni - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and professional experience.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Elements**: Typing effect, smooth scrolling, and hover animations
- **Project Showcase**: Display your best work with images and descriptions
- **Contact Form**: Easy way for visitors to get in touch
- **Social Links**: Connect on GitHub, LinkedIn, Twitter, and Email

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Add your images** to the `assets/` folder:
   - `profile.jpg` - Your profile picture (recommended: 400x400px)
   - `project1.jpg` - First project screenshot (recommended: 800x600px)
   - `project2.jpg` - Second project screenshot (recommended: 800x600px)
   - `project3.jpg` - Third project screenshot (recommended: 800x600px)
   - `resume.pdf` - Your resume PDF file
3. **Customize the content** in `index.html`:
   - Update personal information
   - Add your projects
   - Update social media links
   - Modify skills and technologies
4. **Open** `index.html` in your browser

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
│
└── assets/             # Images and resources folder
    ├── profile.jpg
    ├── project1.jpg
    ├── project2.jpg
    ├── project3.jpg
    └── resume.pdf
```

## ✏️ Customization Guide

### Update Personal Information

In `index.html`, find and replace:

- **Name**: Search for "Sudip Soni" and replace with your name
- **Title**: Update the typing animation text in `script.js` (line 25)
- **Description**: Update the hero description and about section
- **Contact Info**: Update email, phone, location in the contact section

### Update Social Links

Replace the placeholder links in the social-links sections:

```html
<a href="https://github.com/YOUR_USERNAME" target="_blank">
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">
<a href="mailto:YOUR_EMAIL@example.com">
```

### Add Your Projects

Replace the project cards in the projects section with your own:

1. Update project image in the `assets/` folder
2. Change project title and description
3. Update technology tags
4. Add links to live demo and GitHub repository

### Modify Colors

In `styles.css`, update the CSS variables at the top:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary color */
    --accent-color: #22d3ee;       /* Accent color */
    /* ... other variables */
}
```

## 🎨 Technologies Used

- **HTML5**: Structure and content
- **CSS3**: Styling and animations
- **JavaScript**: Interactivity and dynamic features
- **Font Awesome**: Icons

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Advanced Features

### Typing Effect
Customize the typing animation by editing the `textArray` in `script.js`:

```javascript
const textArray = ['Full Stack Developer', 'Web Designer', 'Problem Solver'];
```

### Animation Speed
Adjust animation timings in `styles.css` by modifying the `--transition` variable:

```css
--transition: all 0.3s ease;
```

## 📝 Adding New Sections

To add a new section:

1. Add the section HTML in `index.html`
2. Add corresponding styles in `styles.css`
3. Add navigation link in the navbar
4. The smooth scroll will work automatically

## 🌐 Deployment

You can deploy this portfolio to:

- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Drag and drop deployment
- **Vercel**: Easy deployment with custom domains
- **Traditional Web Hosting**: Upload via FTP

### GitHub Pages Deployment:

1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings → Pages
4. Select branch and save
5. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`

## 📞 Support

If you have questions or need help customizing the portfolio:

- Open an issue in the repository
- Email: sudip@example.com

## 📄 License

This project is free to use for personal portfolios. Feel free to customize it to your needs!

## 🙏 Credits

Created by Sudip Soni - Feel free to use this template for your own portfolio!

---

**Note**: Remember to replace all placeholder images and information with your actual content before deploying!

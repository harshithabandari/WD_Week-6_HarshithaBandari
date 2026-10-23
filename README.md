# Bandari Harshitha | Personal Portfolio

A beginner-friendly, responsive portfolio website based on my resume. It introduces me, shares my education and skills, highlights my portfolio work, and makes it easy to contact me.

## Run the website

No dependencies or build tools are needed.

1. Download or clone this repository.
2. Open `index.html` in a web browser.
3. To edit the site, open `index.html`, `style.css`, and `script.js` in a code editor.

## Features

- Responsive navigation with a mobile menu.
- About, skills, education, activities, project, and contact sections.
- Skills and project cards rendered from JavaScript arrays and objects.
- Project search and category filters.
- Light/dark theme toggle.
- Contact form validation that prepares an email in the visitor's email app. The form does not send or store messages on a server.
- Accessible labels, keyboard-friendly controls, and reduced-motion support.

## Technologies

Semantic HTML, CSS (Flexbox, Grid, media queries, custom properties), and vanilla JavaScript (arrays, objects, functions, events, and DOM manipulation).

## Git and GitHub

From this project folder, these beginner Git commands let you create and track your own repository:

```bash
git init
git status
git add .
git commit -m "Build responsive personal portfolio"
git log --oneline
```

Create a **public** repository on GitHub, then connect and push it (replace the URL with your repository's URL):

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

After later changes, use `git status`, `git add .`, `git commit -m "Describe your changes"`, and `git push`.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then save.
5. Wait for GitHub Pages to publish. Copy the live URL shown on the Pages settings screen.
6. Open that URL on desktop and mobile; test the navigation, project search and filters, theme button, and contact form.

The GitHub repository and live website links are intentionally not listed yet: this local project has not been pushed or deployed. Add the real links here after publishing.

## Project report and reflection

**Project title:** My Personal Portfolio — Bandari Harshitha

**Objective:** I created this portfolio to introduce myself, present the information in my resume, and practice the web development skills covered during my internship. The site is designed to work on mobile, tablet, and desktop screens.

**Overview and features:** Visitors can read my career introduction, education, technical skills, training, student activities, and project details. A search box and category buttons filter project cards. A theme button switches between light and dark colors, and the mobile menu opens and closes with a button. The contact form checks required fields and prepares a message for the visitor's email app. It does not send data to a server. The page uses semantic sections, clear navigation, and responsive layouts.

**Technologies:** HTML provides the page structure; CSS handles colors, spacing, Flexbox, Grid, and media queries; JavaScript creates skill and project cards, responds to clicks and typing, and validates the contact form. Git and GitHub are used for version control and hosting.

**Challenges and solutions:** One challenge was fitting the same information onto small and large screens without making it difficult to read. I used flexible layouts and mobile breakpoints, then simplified the navigation on small screens. Another challenge was adding interaction without a JavaScript framework. I used arrays of objects to hold the project and skill information, then functions and event listeners to display and filter it. For the contact form, I chose a mail link instead of pretending a static site can deliver messages.

**Key learnings:** I practiced semantic HTML, CSS layout, responsive design, JavaScript functions, arrays, objects, events, and DOM manipulation. I also learned how meaningful Git commits help record progress and how GitHub Pages can host a static site.

**Future improvements:** I would add more completed projects, include a downloadable resume, and connect the contact form to a backend service if needed. I would also test with more devices and browsers.

**Screenshots:** Add desktop and mobile screenshots here after testing your published site.

**GitHub repository:** Add your public repository URL after you push this project.

**Live website:** Add your GitHub Pages URL after deployment.

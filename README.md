# My Portfolio

A responsive beginner portfolio made with plain HTML, CSS, and JavaScript. Open `index.html` in a browser to try it.

## Project report

**Project title:** My Portfolio — A Responsive Beginner Web Developer Website

**Project objective:** The objective of this project is to use the HTML, CSS, JavaScript, and Git concepts practiced during the six-week internship to build a complete, responsive, interactive website. The site introduces its creator, presents sample work, and gives visitors a simple way to try a validated contact form.

**Project overview:** The portfolio is a single-page website organized into home, about, projects, and contact sections. It uses semantic HTML elements such as `header`, `nav`, `main`, `section`, `article`, `form`, and `footer`. The CSS demonstrates the box model, colors, Flexbox, CSS Grid, hover states, focus styles, media queries, and reduced motion. The layout adapts from a three-column project grid on larger screens to two columns on tablets and one column on phones.

**Technologies used:** HTML5, CSS3, vanilla JavaScript, Git, GitHub, and GitHub Pages.

**Main features:** Visitors can navigate between page sections, switch between light and dark themes, and filter sample projects by category. The contact form checks required fields, name and message lengths, and email format using browser validation. After valid input, it displays a confirmation and clears the fields. This is a front-end demonstration only; it does not transmit or save messages. The current year is filled in automatically. Buttons and form messages include accessible labels and feedback.

**Website screenshots:** After opening the website, take screenshots of the desktop view, mobile view, and one interactive state such as the project filter or dark theme. Add the images to a `screenshots` folder and embed them here using Markdown, for example `![Desktop website](screenshots/desktop.png)`.

**GitHub repository link:** Replace this text with your public repository URL after creating the repository.

**Live website link:** Replace this text with your published GitHub Pages URL after deployment.

**Challenges faced:** A common challenge in a responsive portfolio is keeping text, cards, and navigation usable when the screen becomes small. Another challenge is making interactive controls understandable without relying only on color. A contact form also needs clear boundaries: a browser-only form should not imply that a message was actually delivered.

**Solutions implemented:** CSS Grid and media queries rearrange the layout for smaller screens, while flexible containers and wrapping button groups prevent horizontal overflow. Semantic elements, visible keyboard focus, descriptive labels, `aria-pressed`, and a live status message make the controls clearer. The form explicitly says that it is a demo and reports only that the input passed validation.

**Key learnings:** This project provided practice combining HTML structure, CSS presentation, and JavaScript behavior. It also demonstrated how arrays of DOM elements can be handled with `forEach`, how events update the page, and how small accessibility choices improve usability. The project can be opened locally without installing packages or a build tool.

**Future improvements:** Replace the sample projects with completed work, add real screenshots and working project links, personalize the introduction, and connect the form to a secure server-side service if message delivery is needed. Test the deployed version on multiple screen sizes and browsers, and continue improving keyboard and screen-reader support.

## Publish with GitHub Pages

1. Create a **public** GitHub repository and upload the files in this folder.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then select **Save**.
4. Wait for the deployment to finish. Copy the Pages URL into the report above and open it to test the links and interactive features.

## Beginner Git commands

Run these commands in this project folder. Replace the example URL with your own GitHub repository URL.

```bash
git init
git status
git add index.html style.css script.js README.md
git commit -m "Build responsive portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
git log --oneline
```

For later changes, run `git status`, `git add .`, `git commit -m "Describe your change"`, and `git push`.

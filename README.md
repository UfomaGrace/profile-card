# Frontend Wizards — Stage 1B: Testable Profile Card

A modern, accessible, and fully testable Profile Card built as part of the Frontend Wizards Stage 1B task for the HNG Internship.

## Features

- Beautiful overlapping avatar design with hero background image
- All required `data-testid` attributes for automated testing
- Fully responsive layout (mobile, tablet, and desktop)
- Live updating current time in milliseconds (`Date.now()`)
- Semantic HTML5 with proper accessibility features
- Clean social links that open in new tabs
- Hobbies and Dislikes lists with visual indicators
- Keyboard navigation with visible focus styles

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Live Demo
https://profile-card-omega-coral.vercel.app/

## Github
https://github.com/UfomaGrace/profile-card

## Project Structure
Profile-Card/
├── index.html
├── styles.css
├── script.js
└── README.md


## How to Run Locally

1. Clone or download the project folder
2. Open the folder in your code editor (VS Code recommended)
3. Right-click on `index.html` and select **"Open with Live Server"**  
   *(Recommended - Install Live Server extension if you haven't)*
   
   Or simply double-click `index.html` to open it in your default browser.

## Accessibility & Testing

- All required `data-testid` attributes are correctly implemented
- Semantic HTML tags (`<article>`, `<header>`, `<figure>`, `<nav>`, `<section>`)
- Meaningful `alt` text and `<figcaption>` for the avatar
- WCAG AA compliant color contrast
- Full keyboard navigation support with visible focus rings
- Screen reader friendly (`aria-live`, `aria-label`, `sr-only` class)
- Press **T** key to announce current time

## What I Learned

- Building fully testable components using exact `data-testid` attributes
- Creating modern overlapping card designs with CSS positioning
- Balancing beautiful UI with strong accessibility requirements
- Writing clean, maintainable code with proper file separation (HTML, CSS, JS)
- Implementing live time updates without causing layout shifts or accessibility issues
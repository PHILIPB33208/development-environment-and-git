# Jadex Electrical Services

A responsive, multi-page website prototype for Jadex Electrical Services, an electrical services business established on 21 March 2024.

## Purpose
The website introduces the business, explains its electrical services, and gives visitors a way to send an enquiry. This is a front-end coursework prototype; the contact form does not send or store messages yet.

## Pages
- `index.html` — Home
- `about.html` — About the business
- `services.html` — Services offered
- `contact.html` — Contact details and enquiry form

## Project structure
```text
jadex-electrical-services-responsive/
├── index.html
├── about.html
├── services.html
├── contact.html
├── README.md
├── .gitignore
├── css/
│   └── style.css
└── images/
    └── electrical-illustration.svg
```

## Run locally
Open `index.html` in a web browser. Use the navigation menu to visit the other pages.

## Responsive design
The stylesheet follows a mobile-first approach. It uses flexible layouts, responsive spacing and typography, a collapsible mobile navigation menu, and media queries for wider screens. Images are constrained to their containers, and keyboard focus styles are visible.

## Testing checklist
Check the site at 390px wide and 1366px wide. Visit all four pages, open and use the mobile navigation, tab through links and form fields, and confirm that no horizontal scrolling appears. The contact form is a visual prototype and needs a backend or form service to deliver messages.

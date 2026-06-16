# Laramie Barnstormers Website Prototype

This folder contains the first static website prototype for the Laramie Barnstormers RC Club.

## Preview the website

The easiest option is to open `index.html` in a web browser.

For a more accurate local preview, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` in a browser.

## Current status

- Responsive single-page layout
- Club logo and supplied photographs included
- Membership price set to $45 per year
- Address set to 32476 US-30, Laramie, WY 82072
- Club email set to LaramieBarnstormers@gmail.com
- Facebook page linked
- Rules section contains a temporary placeholder
- Contact form is in preview mode and does not submit messages yet

## Connect the contact form before launch

A form processing service will be configured before the public launch. After receiving the service endpoint:

1. Open `index.html`.
2. Find the form beginning with `<form class="contact-form"`.
3. Replace `action="#"` with the form endpoint.
4. Change `data-mode="demo"` to `data-mode="live"`.
5. Remove or update the note that says the form is in preview mode.

## Replace the rules placeholder

In `index.html`, search for `Club rules coming soon`. Replace that section with the approved rules or link to an approved PDF.

## Main files

- `index.html`: Website content and page structure
- `styles.css`: Design, layout, and mobile behavior
- `script.js`: Mobile menu, current year, and preview contact-form behavior
- `assets/images/`: Optimized website images

## Future launch steps

1. Obtain board approval for the domain.
2. Register `LaramieBarnstormers.com` under the club account.
3. Create a club-owned GitHub organization and repository.
4. Upload these files.
5. Connect the repository to Cloudflare Pages or another approved host.
6. Configure the contact-form endpoint.
7. Connect the custom domain.
8. Test the site on phones and desktop computers.
9. Add the approved club rules.

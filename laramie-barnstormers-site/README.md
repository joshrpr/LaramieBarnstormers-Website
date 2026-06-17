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
- Rules section includes the approved flying site safety and operational rules
- Contact form sends messages to LaramieBarnstormers@gmail.com through FormSubmit

## Contact form

The contact form uses FormSubmit. The first live submission will send a confirmation email to `LaramieBarnstormers@gmail.com`; approve that email to activate delivery.

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
9. Review the approved club rules before launch.

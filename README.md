## Setup instructions
1. Clone the repository:

```bash
   git clone https://github.com/AshutoshThings/Accredian_client.git
   cd accredian-client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Approach taken
- **Architecture:** Used Next.js (App Router) for a modern, modular, component-based structure. The landing page is divided into independent React components (`Navbar`, `Hero`, `Stats`, `Expertise`, `FAQ`, `Footer`) to keep the codebase clean and maintainable.
- **Styling:** Utilized Tailwind CSS to rapidly style the application. Deliberately designed a warm, human-centric aesthetic using soft creams (`#FDFBF7`), stone grays, serif typography for headlines, and organic pill-shaped elements to differentiate from standard "cold" tech layouts.
- **Interactivity:** Implemented client-side state using React hooks (`useState`) for the responsive mobile navigation menu and the interactive FAQ accordion.
- **SEO:** Used the Next.js Metadata API in `layout.tsx` to handle server-rendered page titles and descriptions.

## AI usage explanation
AI was utilized as an assistive tool during the development process to:
- Rapidly generate structural boilerplate code and layout scaffolding for the Next.js components.
- Assist in implementing the correct Next.js App Router patterns, such as the `layout.tsx` Metadata API and the `"use client"` directives for interactive components.

## Improvements you would make with more time
- **Real API Integration:** Replace the current local mock data arrays in the "Domain Expertise" and "FAQ" sections with dynamic data fetched from a live external API or Headless CMS.
- **Advanced Animations:** Integrate an animation library like Framer Motion to add scroll-triggered reveal animations, smoother component mounting, and advanced micro-interactions.
- **Functional Forms:** Build a dedicated contact modal or page and connect the "Enquire Now" buttons to a functional backend endpoint to capture leads.
- **Accessibility (a11y) Enhancements:** Deepen screen-reader compatibility by adding comprehensive ARIA labels, ensuring strict semantic HTML throughout, and refining keyboard-only navigation focus states.
"""


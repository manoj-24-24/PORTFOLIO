# Manoj K Cybersecurity Portfolio

A premium futuristic portfolio website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, glassmorphism cards, animated particles, matrix rain, scroll reveal animations, and a fully centralized content file.

## Run locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Edit your portfolio

All editable content lives in:

```text
src/data/portfolio.ts
```

Change only that file to update the website.

## Replace profile image

In `src/data/portfolio.ts`, replace:

```ts
profileImage: "https://your-image-url"
```

Use any public image URL. The hero profile image updates automatically everywhere.

## Replace GitHub and LinkedIn

In `src/data/portfolio.ts`, update:

```ts
githubUrl: "https://github.com/your-username",
linkedinUrl: "https://www.linkedin.com/in/your-profile",
```

## Replace resume

Put your resume PDF in the `public` folder as `resume.pdf`, then keep:

```ts
resumeUrl: "/resume.pdf"
```

Or use a public Google Drive or hosted PDF URL.

## Add or edit projects

In `src/data/portfolio.ts`, edit the `projects` array:

```ts
{
  title: "Project Name",
  description: "Short project description",
  image: "https://project-image-url",
  technologies: ["React", "Tailwind", "Node.js"],
  githubUrl: "https://github.com/your-username/project",
  liveUrl: "https://your-live-demo.com"
}
```

The Projects section uses the reusable `ProjectCard` component and updates automatically.

## Add achievement pictures

Place your certificate or achievement image inside:

```text
public/achievements
```

Example file:

```text
public/achievements/google-cybersecurity.png
```

Then edit `src/data/portfolio.ts`:

```ts
certifications: [
  {
    title: "Google Cybersecurity Professional Certificate",
    description: "Professional cybersecurity learning milestone.",
    image: "/achievements/google-cybersecurity.png"
  }
],
```

Use the same format inside `achievements`:

```ts
achievements: [
  {
    title: "Hackathon Participation",
    description: "Built a cybersecurity prototype with a team.",
    image: "/achievements/hackathon.png"
  }
],
```

## Contact form Gmail setup

The contact form now sends messages to:

```text
src/app/api/contact/route.ts
```

Every submitted message is stored locally in:

```text
data/contact-messages.json
```

To also receive the message in your email inbox, create a Gmail App Password at:

```text
https://myaccount.google.com/apppasswords
```

Then create a `.env.local` file in the project root:

```text
GMAIL_USER=moogle.2416@gmail.com
GMAIL_APP_PASSWORD=your_16_character_gmail_app_password
```

Restart the dev server after adding `.env.local`.

## Main structure

```text
src/app/page.tsx
src/app/layout.tsx
src/app/globals.css
src/data/portfolio.ts
src/components/AnimatedBackground.tsx
src/components/Hero.tsx
src/components/About.tsx
src/components/Skills.tsx
src/components/ProjectCard.tsx
src/components/Projects.tsx
src/components/Achievements.tsx
src/components/GitHubSection.tsx
src/components/Contact.tsx
src/components/Footer.tsx
src/components/SocialLinks.tsx
src/components/Typewriter.tsx
```

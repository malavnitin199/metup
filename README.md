This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Description
This project is a comprehensive web application for conducting meetings seamlessly. It leverages modern technologies like Next.js, TypeScript, Clerk, getstream, shadcn, and Tailwind CSS to provide a rich user experience. Users can authenticate securely, start or join meetings, manage meeting controls, schedule future meetings, access past meetings and recordings, and enjoy various other features. The project emphasizes code architecture, reusability, and responsive design for optimal performance across devices.

Features
Authentication: Utilizes Clerk for secure authentication and authorization, supporting social sign-on and traditional email/password methods.
New Meeting: Easily initiate new meetings, configure camera and microphone settings before joining.
Meeting Controls: Participants have full control over meeting aspects, including recording, reactions, screen sharing, muting/unmuting, sound adjustments, layout options, and participant management.
Exit Meeting: Participants can leave a meeting, or creators can end it for all attendees.
Schedule Future Meetings: Input meeting details to schedule future meetings, accessible on the 'Upcoming Meetings' page for sharing or immediate start.
Past Meetings List: Access a list of previously held meetings, including details and metadata.
View Recorded Meetings: Access recordings of past meetings for review or reference.
Personal Room: Users have a personal room with a unique meeting link for instant meetings, shareable with others.
Join Meetings via Link: Easily join meetings created by others by providing a link.
Secure Real-time Functionality: Ensures all interactions within the platform are secure and occur in real-time, maintaining user privacy and data integrity.
Responsive Design: Follows responsive design principles for optimal user experience across devices.
Tech Stack
Next.js
TypeScript
Clerk
getstream
shadcn
Tailwind CSS

First, run the development server:


Acknowledgements
Clerk: For providing authentication and authorization capabilities.
getstream: For enabling real-time functionality.
Tailwind CSS: For the responsive design framework.
Next.js: For the powerful React framework.
TypeScript: For type-safe JavaScript development.
shadcn: For [please specify the contribution or support they provided].
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

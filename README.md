## Disclaimer
This game is built with the support of ChatGPT which ChatGPT is the main worker.  
My responsibility is prompting to ChatGPT. ChatGPT responds to coding and research questions.  
Initially, ChatGPT also had designed the layout for the game but it's terrible. So, I decided to update the layout for the game.

All of the documentation below is also written by ChatGPT.  
Huge thanks to the [OpenAI](https://openai.com/) the author of ChatGPT.

## Introduction
This application is designed to provide an interactive and educational experience for users by presenting multiplication problems and allowing them to test their skills. The application features a countdown clock, a score tracker, and a series of multiplication problems with multiple-choice answers.

## Features

The Web Application offers the following features:

### Countdown Clock

At the top of the screen, you will see a countdown clock that starts from 10 seconds and counts down to zero. This clock indicates the time remaining to answer the current multiplication problem.

### Score Tracker

Next to the countdown clock, there is a label component that displays the user's score. The score increases by 1 point for each correct answer and decreases by 1 point for each incorrect answer.

### Multiplication Problems

Below the score tracker, a multiplication problem with two digits is displayed. The user needs to solve the problem and select the correct answer from the two options provided.

### Multiple Choice Answers

Below the multiplication problem, there are two buttons representing the possible answers. Only one of the answers is correct. Click on the button with the correct answer to proceed.

### Dynamic Problem Generation

After selecting an answer, the web application will generate a new multiplication problem automatically. This allows users to continuously practice their multiplication skills.

### Score Update

When the user selects an answer, the score will be updated based on the correctness of the answer. Two points will be added for a correct answer, and one point will be deducted for an incorrect answer.

### Automatic Problem Generation

If the countdown clock reaches zero, the web application will generate a new multiplication problem automatically. This ensures that users always have a new problem to solve.

### Responsive Design

The ChatDev Web Application is designed to be responsive and compatible with mobile devices. The multiplication problem and answer buttons are larger to be child-friendly, and the multiplication problem is highlighted with a different color for better visibility.


### How to run?

First, run the development server:

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

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

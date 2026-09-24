# Link Shorter

Web application for shortening links, built with Next.js, React, TypeScript and Tailwind CSS v4. Consumes a custom API in Go responsible for generating and redirecting shortened links.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## About the project

The user enters a link in the input field, the link is sent to the shortening API, and a new, shorter link is returned and displayed on screen with a copy option.

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS v4

## Prerequisites

- Node.js 18 or higher
- Shortening API (Go backend) running locally or in production

## Installation

```bash
git clone <repository-url>
cd link-shorter
pnpm install
```

## Configuration

Create a `.env.local` file in the project root with the API URL:

```
NEXT_PUBLIC_API_URL=http://localhost:8080
```

## Running locally

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Component structure

```
components/
  input-link/
    input-link.tsx      # Link input field and API submission
  output-link/
    output-link.tsx     # Displays the shortened link with a copy button
  explanation/
    explanation.tsx     # Main section with title, mascot, input and output
```

## Available scripts

| Command       | Description                     |
|---------------|----------------------------------|
| `pnpm dev`    | Starts the development server    |
| `pnpm build`  | Creates a production build       |
| `pnpm start`  | Starts the app in production mode|
| `pnpm lint`   | Runs the linter                  |

## License

This project is licensed under the MIT License.

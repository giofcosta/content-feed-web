# Content Feed - Built with Next.js 14+, Tailwind CSS and TypeScript.

<p align="center">
  <a href="https://creativedesignsguru.com/demo/Nextjs-Boilerplate/"><img  src="public/logo.jpeg" alt="Next js starter banner"></a>
</p>

🚀 Content Feed is a feed web application built using Next.js with App Router support, Tailwind CSS, and TypeScript ⚡️ 


### Features

Developer experience first, extremely flexible code structured:

- 🔥 Content feed list
- 💎 Comments section
- ✅ Like button
- 🦺 Read more description
- 🚀 Well documented api

Built-in technical feature:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Requirements

- Node.js 18+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone https://github.com/giofcosta/content-feed-web.git
cd content-feed-web
npm install
```

Then, you can run the project locally in development mode with live reload by executing:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.
Open http://localhost:3000/api-doc to see the api documentation.

### Project structure

```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .vscode                         # VSCode configuration
├── lib                             # libs folder
│   └── swagger                     # Swagger configuration
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── styles                      # Styles folder
│   ├── types                       # Type definitions
│   └── utils                       # Utilities folder
├── tests
│   ├── e2e                         # E2E tests, also includes Monitoring as Code
│   └── integration                 # Integration tests
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Testing

All unit tests are located with the source code inside the same directory. So, it makes it easier to find them. The project uses Jest and React Testing Library for unit testing. You can run the tests with:

```shell
npm run test
```

### Integration & E2E Testing

The project uses Playwright for Integration and E2E testing. You can run the tests with:

```shell
npx playwright install # Only for the first time in a new environment
npm run test:e2e
```

### License

Licensed under the MIT License, Copyright © 2024

See [LICENSE](LICENSE) for more information.

---

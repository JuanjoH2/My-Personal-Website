## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Setup

```bash
nvm install && nvm use
npm install

# Agent Instructions for Updates

When executing dependency updates or major framework migrations:

1. Clone the repository and install all dependencies (`npm install`).
2. Make the necessary code modifications to support the new framework version.
3. Build the application (`npm run build`).
4. Run the Playwright visual regression tests (`npx playwright test`).
5. **Guardrail:** If the Playwright tests fail (including visual snapshot failures), attempt to fix the code up to 3 times.
6. If the tests still fail after 3 attempts, you MUST abort the task and do not open a pull request.
```

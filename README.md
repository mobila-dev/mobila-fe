# MobilaFe

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Development server

To start a local development server, run `ng serve` or `npm run start`:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Prerendering

Always test prerendering after finishing your code changes. To test a prerendering build, run `npm run prerender:test`:

```bash
npm run prerender:test

...
Prerendered X static routes.
Application bundle generation complete. [XXX seconds]

Output location: ...\dist\mobila-fe
```

This will start a local server at `http://localhost:4200` which will serve the prerendered HTML files from dist/mobila-fe/browser/\*. Hot reloading for prerendering is not possible.

## SSR

Because Netlify could not compile src/server.ts and then the build crashed everytime, we deleted src/server.ts. This effectively means SSR is disabled.

We want to enable SSR again when we move from Netlify hosting to a VPS hosting.

See official documentation about [SSR here](https://angular.dev/guide/ssr).

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

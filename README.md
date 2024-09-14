<div align="left">

# Retroloop

<img src="./public/logo-transparent.png" width="150px" alt="Retroloop logo" align="right" />

[![Pipeline](https://github.com/luisstd/retroloop/actions/workflows/pipeline.yml/badge.svg)](https://github.com/luisstd/retroloop/actions/workflows/pipeline.yml) ![CodeQL](https://github.com/luisstd/retroloop/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main) [![CodeFactor](https://www.codefactor.io/repository/github/luisstd/retroloop/badge)](https://www.codefactor.io/repository/github/luisstd/retroloop) ![GitHub tag (with filter)](https://img.shields.io/github/v/tag/luisstd/retroloop?label=release&link=https%3A%2F%2Fgithub.com%2Fluisstd%2Fretroloop%2Freleases)

**Retrospectives made easy**

## Local development

### Setup

After checking out the repository, install dependencies and setup pre-commit hooks

```
  pnpm setup
```

### Development

Start the Next.js server

```
  pnpm dev
```

Use `clean` to re-install dependencies, generate the Prisma client and run ESlint on the codebase

```
  pnpm clean
```

### Testing

To run the unit tests, use the following command

```
  pnpm test
```

To create coverage files manually, run the following command

```
  pnpm coverage
```

## Tech Stack

- [NextJS](https://nextjs.org/)
- [React](https://react.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [tRPC](https://trpc.io/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

## Feedback

If you have any feedback, please use the feedback widget, open an issue or reach out at <contact@noisia.co>

## Contributing

Everyone is welcome to improve this project. See [CONTRIBUTING](https://github.com/luisstd/retroloop/blob/dev/CONTRIBUTING.md)

## Sponsors

<a href="https://sentry.io"><img src="./public/sentry.svg" alt="Sentry logo"  /></a>

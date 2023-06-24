<!-- PROJECT LOGO -->
<div align="center">

[![Pipeline](https://github.com/luisstd/retroloop/actions/workflows/pipeline.yml/badge.svg)](https://github.com/luisstd/retroloop/actions/workflows/pipeline.yml) ![CodeQL](https://github.com/luisstd/retroloop/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main) [![CodeFactor](https://www.codefactor.io/repository/github/luisstd/retroloop/badge)](https://www.codefactor.io/repository/github/luisstd/retroloop) [![codecov](https://codecov.io/gh/luisstd/retroloop/branch/dev/graph/badge.svg?token=XXXG1MOCIC)](https://codecov.io/gh/luisstd/retroloop)

<h3 align="center">
  <a href="https://retroloop.io" rel="noopener">retroloop.io</a>
</h3>

![Retroloop Logo](./public/logo.webp) <br />

  <p align="center">
Retroloop is an easy to use tool for conducting agile retrospectives
</div>

## Local Development

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm dev
```

## Running Tests

To run tests, run the following command

```bash
  pnpm test
```

To create coverage files manually, run the following command

```bash
  pnpm coverage
```

## Deployment

To deploy this project, self-host the application using Docker or use this button to deploy the project to [Railway](https://railway.app).

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/Ya-cUm?referralCode=rB6tnt)

### Railway

The railway template will ask you for all necessary environment variables and spin up the necessary services for you.

### Docker

Create a Docker container using the provided `Dockerfile`. You will need these 3 environment variables at the minimum:

The PostgreSQL connection string

```
DATABASE_URL='postgresql://yourdbconnectionurl'
```

When deploying to production, set the `NEXTAUTH_URL` environment variable to the canonical URL of your site.

```
NEXTAUTH_URL="https://retroloop.io"
```

`NEXTAUTH_SECRET` is used to encrypt the NextAuth.js JWT, and to hash email verification tokens

```
NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET"
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

If you have any feedback, please use the feedback widget, open an issue or reach out at info@mail.retroloop.io

## License

Retroloop is open-source under the [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.en.html) Version 3 (GPLv3) or any later version. See [LICENSE](https://github.com/luisstd/retroloop/blob/dev/LICENSE.md) for more detail.

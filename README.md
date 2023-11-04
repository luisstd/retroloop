 <img src="https://raw.githubusercontent.com/luisstd/retroloop/dev/public/logo-transparent.png" width="150px" alt="Retroloop logo" align="right" />

<div align="left">

# Retroloop

[![Pipeline](https://github.com/luisstd/retroloop/actions/workflows/pipeline.yml/badge.svg)](https://github.com/luisstd/retroloop/actions/workflows/pipeline.yml) ![CodeQL](https://github.com/luisstd/retroloop/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main) [![CodeFactor](https://www.codefactor.io/repository/github/luisstd/retroloop/badge)](https://www.codefactor.io/repository/github/luisstd/retroloop) [![codecov](https://codecov.io/gh/luisstd/retroloop/branch/dev/graph/badge.svg?token=XXXG1MOCIC)](https://codecov.io/gh/luisstd/retroloop) ![GitHub tag (with filter)](https://img.shields.io/github/v/tag/luisstd/retroloop?label=release&link=https%3A%2F%2Fgithub.com%2Fluisstd%2Fretroloop%2Freleases) ![GitHub](https://img.shields.io/github/license/luisstd/retroloop)

</div>
<!-- --- -->

**Retrospectives made easy**

---

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

## Deployment

To deploy this project, self-host the application using Docker or use this button to deploy the project to [Railway](https://railway.app).

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/Ya-cUm?referralCode=rB6tnt)

### Railway

The railway template will ask you for all necessary environment variables and spin up the necessary services for you.

### Docker

Create a Docker container using the provided `Dockerfile`. You will need these 3 environment variables at the minimum:

The PostgreSQL connection string

```bash
DATABASE_URL='postgresql://yourdbconnectionurl'
```

When deploying to production, set the `NEXTAUTH_URL` environment variable to the canonical URL of your site.

```bash
NEXTAUTH_URL="https://retroloop.io"
```

`NEXTAUTH_SECRET` is used to encrypt the NextAuth.js JWT, and to hash email verification tokens

```bash
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

If you have any feedback, please use the feedback widget, open an issue or reach out at <contact@noisia.co>

## Contributing

Everyone is welcome to improve this project. See [CONTRIBUTING](https://github.com/luisstd/retroloop/blob/dev/CONTRIBUTING.md)

## License

Retroloop is open-source under the [GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0.en.html) Version 3 (AGPLv3) or any later version. See [LICENSE](https://github.com/luisstd/retroloop/blob/dev/LICENSE.md) for more detail.

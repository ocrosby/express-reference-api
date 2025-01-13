# Express.js Reference API

[![Lint](https://github.com/ocrosby/express-reference-api/actions/workflows/lint.yml/badge.svg)](https://github.com/ocrosby/express-reference-api/actions/workflows/lint.yml)
[![Commitlint](https://github.com/ocrosby/express-reference-api/actions/workflows/commitlint.yml/badge.svg)](https://github.com/ocrosby/express-reference-api/actions/workflows/commitlint.yml)
[![JSONLint](https://github.com/ocrosby/express-reference-api/actions/workflows/jsonlint.yml/badge.svg)](https://github.com/ocrosby/express-reference-api/actions/workflows/jsonlint.yml)

This repo contains an Express demo application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the dependencies, run:

```sh
npm install
```

If you don't have docker compose you can install it on MacOS using

```sh
brew install docker-compose
```

## Usage

To start the server, run:

```sh
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm start`: Start the server.
- `npm run lint`: Run ESLint to check for linting errors.
- `npm test`: Run tests (if any).

When you start the service the [Swagger documentation](http://localhost:3000/api-docs) can be accessed at http://localhost:3000/api-docs.

## Docker Stuff

Start the database and cache containers:

```sh
docker-compose -f docker-compose.db.yml up
```

Star the API along with the database and cache containers:

```sh
docker-compose -f docker-compose.yml up
```

Note: If you want to start in detached mode, add the `-d` flag.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Commit Message Convention

Must be one of the following:

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- test: Adding missing tests or correcting existing tests

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

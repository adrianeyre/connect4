# Connect 4 Game

#### Technologies: TypeScript, React 19, Vite, SCSS

To win Connect Four you must be the first player to get four of your colored checkers in a row
either horizontally, vertically or diagonally.

## Index

- [Installation and Run](#Install)
- [Scripts](#Scripts)
- [Screen Shots](#Shots)
- [Play Connect 4](#Play)

## <a name="Install">Installation and Run</a>

Node 26 or newer is required (see `.nvmrc`).

```shell
$ git clone https://github.com/adrianeyre/connect4
$ cd connect4
$ nvm use
$ npm install
$ npm start
```

## <a name="Scripts">Scripts</a>

| Script                      | What it does                                        |
| --------------------------- | --------------------------------------------------- |
| `npm start` / `npm run dev` | Vite dev server with hot reload                     |
| `npm run build`             | Typecheck, then build the production site to `dist` |
| `npm run preview`           | Serve the built site locally                        |
| `npm test`                  | Run the Vitest suite once                           |
| `npm run test:watch`        | Run the Vitest suite in watch mode                  |
| `npm run test:coverage`     | Run the suite with a V8 coverage report             |
| `npm run typecheck`         | `tsc --noEmit`                                      |
| `npm run lint`              | ESLint over the repository                          |
| `npm run format`            | Rewrite files with Prettier                         |
| `npm run format:check`      | Fail if anything is unformatted (what CI runs)      |

## <a name="Shots">Screen Shots</a>

[![Screenshot](https://raw.githubusercontent.com/adrianeyre/connect4/master/src/images/screenshot1.png)](https://raw.githubusercontent.com/adrianeyre/connect4/master/src/images/screenshot1.png 'Game View')

[![Screenshot](https://raw.githubusercontent.com/adrianeyre/connect4/master/src/images/screenshot2.png)](https://raw.githubusercontent.com/adrianeyre/connect4/master/src/images/screenshot2.png 'Game View')

## <a name="Play">Play Connect 4</a>

- [Connect 4](https://adrianeyre.github.io/connect4/)

## Releases

Merges to `master` run [semantic-release](https://semantic-release.gitbook.io/), which reads the
[conventional commit](https://www.conventionalcommits.org/) messages since the last tag, bumps the
version, writes `CHANGELOG.md`, tags the release, and then builds and deploys the site to GitHub
Pages.

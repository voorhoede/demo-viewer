# Contributing

The aim of this project is to allow users to *preview UI components in isolation with documentation, annotations and breakpoint controls*.
Contributions should be aimed towards this and / or improve the development workflow.

## Guidelines

### Pull Requests

For new additions or changes to the modules, create a branch and submit a Pull Request.
Only add/change 1 module per Pull Request.

### Structure

The demo viewer is composed out of small modules which each have a single purpose (e.g. "select what to preview").
For the module's presentation logic [RiotJS](http://riotjs.com/) tags are used  (in `*.tag.html` file). For modularised and parametrised styling we use [PostCSS](http://postcss.org/).

Each module must have the following structure:

```
src/
└── my-module/
    ├── my-module.tag.html
    ├── my-module.css
    └── README.md
```

### Tag file (`.tag.html`)

* Must be in [RiotJS Style Guide](https://github.com/voorhoede/riotjs-style-guide) format.
* Must be able to compile using [`npm run build:tags`](#scripts).
* Must pass [`npm test`](#scripts). See [`src/.eslintrc`](src/.eslintrc) for linting settings.

### CSS file (`.css`)

* Must only contain styles for module it belongs to.
* Must be scoped to module tag (`my-module { }`) or use module name as class prefix.
* Must define its dependencies using `@import` (e.g. `@import path/to/other/module.css`).
* May use [CSS variables](https://drafts.csswg.org/css-variables/#custom-property).
* Must not use vendor prefixes as these are added automatically.
* Must be able to compile using [`npm run build:css`](#scripts).

[PostCSS](https://github.com/postcss/postcss#readme) is used to compile our CSS. It's configured to support [`@import`](https://github.com/postcss/postcss-import#readme) and [`--css-variables`](https://github.com/MadLittleMods/postcss-css-variables#readme) ands [vendor prefixes for our browser scope automatically](https://github.com/postcss/autoprefixer#readme)).

### Readme file (`README.md`)

* Must have module name as title (`# My module`)
* Must have description of functionality in non-tech terms.
* Must have instructions for usage including [tag API documentation](https://github.com/voorhoede/riotjs-style-guide#document-your-tag-api) and possibly style / theme rules.

See existing modules for examples.

If the API of the demo-viewer itself (`window.demoViewer()`) changes, it should be reflected in the project's [README.md](/README.md).


### Commit message format

Each commit message must have a *header* and optionally a *body*. The header has a special format that includes a type, a scope and a summary:

```
<type>(<scope>): <summary>
<BLANK LINE>
<body>
```

Note: you can use `npm run commit`, prompting you to fill out the git commit message step-by-step.

#### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

#### Scope
The scope could be anything specifying place of the commit change. The scope is optional.

In case of a feature or fix to a demo it would typically be the name of the module, e.g. `fix(todo-app):`.

#### Summary
The summary contains succinct description of the change. Keep it clear, but short. Put the rest in the body.

#### Body
The body should include the motivation for the change and contrast this with previous behavior.

Note: the commit message format guidelines are based on [Angular's Git Commit Guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines).


## Scripts

Development requires [Node.js](http://nodejs.org/) and [npm](https://npmjs.org/).

After installing dependencies (run `npm install`) the following scripts are available:

`npm run ...` | Description
---|---
`build` | Compile css and js files, copy assets & examples and format index.
`build:css` | Compile and minify CSS to `dist/demo-viewer.css`, plus sourcemap.
`build:js` | Compile tags and combine with `riot.js` into `dist/demo-viewer.js`.
`build:tags` | Compile and bundle all tag files to `dist/tags.js`.
`build:docs` | Copy all documentation assets to `dist/docs/`.
`build:examples` | Copy all examples to `dist/examples/`.
`build:index` | Formats the readme as html page written to `dist/index.html`.
`changelog` | Generate the changelog based on commits
`commit` | Make a commit using the project configuration for contribution.
`version` | Bumps the version, tags and generates changelog
`start` | Starts a server on `http://localhost:3366` ("demo" in T9).
`test` | Run linter.
`test:eslint` | Check all tag files for format and syntax errors.
`watch` | Recompile (build) CSS and tag files on file changes.

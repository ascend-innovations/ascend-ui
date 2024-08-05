# Installation

```bash
npm install
```

# Development Server

```bash
npm run dev
```

Everything inside `src/lib` is part of the library, everything inside `src/routes` is part of the preview app.

# Building

To build the library:

```bash
npm run package
```

To create a production version:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

# Publishing

Go into the `package.json` file and increment the version then run the following:

```bash
npm publish
```

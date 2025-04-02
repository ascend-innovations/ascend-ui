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

# Changelog

2/10/2025 - Status Tag component now uses column key for mapping overrides and tooltip copy declarations.
3/31/2025 - Added chart-filter-header slot to charts for chart-level filter components (i.e. selectors). Separate from chart-header slot.
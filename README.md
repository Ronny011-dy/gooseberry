# Gooseberry

![](https://img.shields.io/badge/-vite-9499FF?logo=vite&logoColor=white) ![](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) ![](https://img.shields.io/badge/-TypeScript-235A97?logo=typescript&logoColor=white)

This project was created so that DY Customer Support would have their own fully SPA, multi-context platform to play around with, debug, and troubleshoot issues that are only reproducible in real single page applications.

Site URL - [Gooseberry](https://ronny011-dy.github.io/gooseberry/)

The idea of this project is to have a sandbox that is more flexible than standard Tumblr blogs, and can be used with XP client-side API.

- SSAPI will need some backend code, not impossible but it increases the complexity of the app.

This project can also help with learning some Javascript, React and git.
If you want to create your own SPA sandbox, check [Initial project build](#initial-project-build).

## Features

- Separate pages for each DY page context.
- Web campaign insertion slots for easy script troubleshooting.
- Fully SPA transitions without page reload.
- XP Client Side API.
- Context changers for quick and dirty recommendationsContext changes.
- Default global value settings for setting the following defaults:
  - Section id
  - Category context
  - PDP context
  - API key
  - api selector
  - context lng
- Cart page with DPX events
- User separation - no more worrying about other people fiddling with your sandbox
- Active consent
- Thorough documentation :P

---

### Initial project build

These are the initial steps taken to create this project, and host it on GitHub Pages:

> Make sure you have node first. You can install it [here](https://nodejs.org/en)
>
> ```console
>   node -v
> ```

1. Create a new repository on GitHub and get a URL for cloning

2. Create a new `Vite` project using the following commands:

- Install `create-vite` globally:

```console
   sudo npm install -g create-vite
```

- Run the app scaffolding:

```console
   npm create vite@latest
```

- Use any name for the project, it doesn't have to match the repo name
- Choose React/TypeScript/SWC for the ultimate combo 💥
- Go into the project:

```console
   cd projectName
```

- Install all dependencies that exist in `package.json`:

```console
   npm i
```

3. Initialize and link the repo, then build the app using the following commands:

```console
   git init
   git add .
   git commit -m "Init"
   git remote add origin https://github.com/userName/repoName.git
   git push -u origin main
   code .
   npm run build
   git add dist -f
   git commit -m "adding dist"
   git subtree push --prefix dist origin gh-pages
```

- Before building the app for production, go to `vite.config.ts` and replace the code with (replace with name of your repo):

```js
export default defineConfig({
  base: '/repoName/',
  plugins: [react()]
});
```

4. In GitHub go to the repo -> Settings -> Pages -> Under `Branch` pick `gh-pages` and save.

- After a few minutes you site should be up and running, and the URL will be displayed on the repo => Settings => Pages section

- Vite has blazing fast build times but also Hot Module Replacement, so you can see the dev project rendered live as you save any code changes. Just use the following to start developing:

```console
   npm run dev
```

- For deploying your changes easily, first install [gh-pages](https://www.npmjs.com/package/gh-pages):

```console
   npm install gh-pages --save-dev
```

Then add the following script in `package.json`:

```json
   "scripts": {
      "deploy": "gh-pages -d dist"
   }
```

Lastly, use `npm run deploy` after building.

- To add support for creating more pages (for a multi-context site), install [react-router-dom](https://reactrouter.com/en/main):

```console
   npm install react-router-dom
```

For an easier time building your own sandbox in React, it's recommended to install:

- A CSS framework like styled-components or [Tailwind](https://tailwindcss.com/).
- A UI library like [MUI](https://mui.com/) or radixUI.

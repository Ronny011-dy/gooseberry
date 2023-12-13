# Gooseberry

![](https://img.shields.io/badge/-vite-9499FF?logo=vite&logoColor=white) ![](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) ![](https://img.shields.io/badge/-TypeScript-235A97?logo=typescript&logoColor=white)

This project was created so that DY support would have their own fully SPA, multi-context platform to play around with, debug, and troubleshoot issues that are only reproducible in real single page applications.

This is the URL to get right to the site:

[Gooseberry](https://ronny011-dy.github.io/gooseberry/)

The idea of this project is to have a sandbox that is more flexible than our Tumblr blogs, and can be used with XP client-side API. SSAPI will need some backend code, not impossible but it increases the complexity of the app.

This project can also help with learning some Javascript, React and git.

Just like the DY front-end stack, this project is using [Vite](https://vitejs.dev/) instead of the simpler, more traditional `create-react-app`.

- If you want to create your own SPA site, check [Initial project build](###initial-project-build).

---

### Initial project build

These are the initial steps taken to create this project, and host it on GitHub Pages:

> Make sure you have node first. You can install it [here](https://nodejs.org/en)
>
> ```console
>   ~$ node -v
> ```

1. Create a new repository on GitHub and get a URL for cloning

2. Create a new `Vite` project using the following commands:

- Install `create-vite` globally:

```console
   ~$ sudo npm install -g create-vite
```

- Run the app scaffolding:

```console
   ~$ npm create vite@latest
```

- Use any name for the project, it doesn't have to match the repo name
- Choose React/TypeScript/SWC for the ultimate combo 💥
- Go into the project:

```console
   ~$ cd projectName
```

- Install all dependencies that exist in `package.json`:

```console
   ~$ projectName % npm i
```

1. Initialize and link the repo, then build the app using the following commands:

```console
   ~$ projectName % git init
   ~$ projectName % git add .
   ~$ projectName % git commit -m "Init"
   ~$ projectName % git remote add origin https://github.com/userName/repoName.git
   ~$ projectName % git push -u origin main
   ~$ projectName % code .
   ~$ projectName % npm run build
   ~$ projectName % git add dist -f
   ~$ projectName % git commit -m "adding dist"
   ~$ projectName % git subtree push --prefix dist origin gh-pages-static-build
```

- Before building the app for production, go to `vite.config.ts` and replace the code with (replace with name of your repo):

```js
export default defineConfig({
  base: '/repoName/',
  plugins: [react()],
});
```

4. In GitHub go to the repo -> Settings -> Pages -> Under `Branch` pick `gh-pages-static-build` and save.

- After a few minutes you site should be up and running, and the URL will be displayed on the repo => Settings => Pages section

- Vite has blazing fast build times but also Hot Module Replacement, so you can see the dev project rendered live as you save any code changes. Just use the following to start developing:

```console
   ~$ projectName % npm run dev
```

5. To add support for creating more pages (for a multi-context site), install [react-router-dom](https://reactrouter.com/en/main):

```console
   ~$ projectName % npm install react-router-dom
```

For an easier time building your site in React, it's recommended (but not necessary) to install:

- A CSS framework like [styled-components](https://styled-components.com/) (DY stack) or [Tailwind](https://tailwindcss.com/).
- A UI library like [MUI](https://mui.com/) (DY stack) or [radixUI](https://www.radix-ui.com/). Gooseberry is using styled-components and radixUI.
- For Gooseberry, I'm also using the following packages:
  - [react-hot-toast](https://react-hot-toast.com/)
  - [RadixUI Icons](https://www.radix-ui.com/icons)
  - [grommet-icons](https://icons.grommet.io/?)

### Stuff to add

- [x] Homepage
- [x] React Router
- [x] DY scripts
- [x] Category page
- [ ] Context provider for scripts
- [ ] PDP
- [ ] Cart
- [ ] Settings
- [ ] XP API client-side

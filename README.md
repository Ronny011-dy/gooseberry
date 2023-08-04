# Gooseberry

![](https://img.shields.io/badge/-vite-9499FF?logo=vite&logoColor=white) ![](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) ![](https://img.shields.io/badge/-TypeScript-235A97?logo=typescript&logoColor=white)

This project was created so that DY support would have their own fully SPA enabled, multi-context platform to play around with and to debug and troubleshoot issues that are only reproducible in real single page applications.

This is the URL to get right to the site:

[Gooseberry](https://ronny011-dy.github.io/gooseberry/)

The idea of this project is to have a sandbox that is more flexible than our tumblr blogs, and can be used with XP client-side API. SSAPI will need some node code, not impossible but it increases the complexity of the app.

Potentially, this project can also help with learning some Javascript, react and git.

This project is using [Vite](https://vitejs.dev/) instead of the simpler and traditional `create-react-app`.

### Initial project build

These are the initial steps taken to create this project, and host it on GitHub Pages:

> Make sure you have node first. You can install it [here](https://nodejs.org/en)
>
> ```console
>   ~$ node -v
> ```

1. Create a new repository on GitHub and got a URL for cloning

2. Create a new `Vite` project using the following commands:

- Install `npm install -g create-vite` globally:

```console
   ~$ sudo npm install -g create-vite
```

- Run the app creation:

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

3. Initialize and link the repo, then build the app using the following commands:

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

- Before building the app, go to `vite.config.ts` and replace the code with (replace with name of your repo):

```js
export default defineConfig({
  base: '/repoName/',
  plugins: [react()],
});
```

4. In GitHub gor to the repo -> Settings -> Pages -> Under `Branch` pick `gh-pages-static-build` and save

- After a few minutes you site should be up and running, and the URL will be displayed on the repo => Settings => Pages section

- Vite has blazing fast build times but also Hot Module Replacement, so you can see the project rendered live as you save any code changes. Just use the following to start developing:

```console
   ~$ projectName % npm run dev
```

5. To add support for bulding more pages, install [react-router-dom](https://reactrouter.com/en/main):

```console
   ~$ projectName % npm install react-router-dom
```

### Stuff to add

- [x] Homepage
- [ ] React Router
- [ ] Category page
- [ ] PDP
- [ ] Cart
- [ ] Settings
- [ ] XP API client-side

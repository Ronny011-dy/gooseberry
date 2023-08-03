# Gooseberry

This project was created so that DY support would have their own fully SPA enabled, multi-context platform to play around with and to debug and troubleshoot issues that are only reproducible in real single page applications.

This is the URL to get right to the site:

[Gooseberry](https://ronny011-dy.github.io/gooseberry/)

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
- Choose react/TypeScript/SWC for the ultimate combo 💥
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

4. In GitHub gor to the repo => Settings => Pages => Under Branch pick `gh-pages-static-build` and save

- After a few minutes you site should be up and running, and the URL will be displayed on the repo => Settings => Pages section

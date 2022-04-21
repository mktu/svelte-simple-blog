# Svelte-Simple-Blog

Svelte-Simple-Blog is a simple blog made with [SvelteKit](https://kit.svelte.dev/) and [Newt](https://www.newt.so/)

👉 https://mktu.github.io/svelte-simple-blog

## Developing

Once you've created a project and installed dependencies with `npm install`, create/edit `.env` file

```env
VITE_SPACE_UID=<newt space ui>
VITE_CDN_API_TOKEN=<newt cdn api token>
```

and start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deploy

To deploy your app, run

```bash
npm run deploy
```

## Related articles

👉 [SvelteKit + Newt + Github Pageでブログをデプロイするまで (Zenn)](https://zenn.dev/mktu/articles/29eab3ac780f13)
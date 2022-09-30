npm create svelte@latest sveltekit-dark-mode
cd sveltekit-dark-mode
npm install

git push -u origin main




npm install -D tailwindcss postcss autoprefixer svelte-preprocess
npx tailwindcss init tailwind.config.cjs -p

update svelte.config.js

import preprocess from "svelte-preprocess";

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

update tailwind.config.cjs with the paths to your template files

content: ['./src/**/*.{html,js,svelte,ts}'],

add app.css file in src folder

@tailwind base;
@tailwind components;
@tailwind utilities;

add +layout.svelte in routes folder

<script>
  import "../app.css";
</script>

<slot />


create header.svelte

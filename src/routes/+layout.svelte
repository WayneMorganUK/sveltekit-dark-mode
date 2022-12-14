<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Header/Navbar.svelte';
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/store';
	export let data;

	console.log('--+layout.svelte - data =', data);
	console.log(' = +Layout.svelte = start');
	console.log(' = +Layout.svelte = theme store', $theme);

	// $theme = data.theme;
	// console.log(' = +Layout.svelte = start = $theme', $theme);

	onMount(() => {
		console.log('doc list', document.documentElement.classList.value);
		// We load theme in the <script> tag in layout.ts load, but then also here onMount to setup stores
		if (!('theme' in localStorage)) {
			console.log('===IS THIS EVER HIT====');
			theme.useLocalStorage();
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				// localTheme = 'dark';
				theme.set({ ...$theme, mode: 'dark' });
				localStorage.setItem('theme', JSON.stringify({ mode: 'dark' }));

				console.log(' == +layout.svelte = , theme set to system theme dark');
			} else {
				// localTheme = 'light';
				theme.set({ ...$theme, mode: 'light' });
				localStorage.setItem('theme', JSON.stringify({ mode: 'light' }));

				console.log(' == +layout.svelte = , theme set to system theme light');
			}
		} else {
			console.log('===IS THIS ALWAYS HIT====');
			console.log('==onmount== theme == ', $theme);
			theme.useLocalStorage();
			console.log('==onmount== theme after "useLocalstorage" == ', $theme);

			theme.set({ ...$theme });
			console.log('==onmount== theme after "set "== ', $theme);

			console.log(' == +layout.svelte = , theme set to local storage', $theme);
		}
		console.log(' = +Layout.svelte = onMount = $theme', $theme);
	});
</script>

<svelte:head>
	<script lang="ts">
		if (!('theme' in localStorage)) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.remove('light');

				document.documentElement.classList.add('dark');
				document.cookie =
					'theme=dark;path=/;SameSite=strict;expires=Fri, 31 Dec 9999 23:59:59 GMT;';
			} else {
				document.cookie =
					'theme=light;path=/;SameSite=strict;expires=Thu, 30 Dec 9999 23:59:59 GMT;';
			}
		} else {
			if (localStorage.getItem('theme')) {
				let currentMode = JSON.parse(localStorage.getItem('theme'));
				document.documentElement.classList.remove('light');
				document.documentElement.classList.add(currentMode.mode);
			}
		}
	</script>
	<title>Sveltekit &amp; Tailwind Dark Mode</title>
</svelte:head>

<main>
	<div class="fixed top-0 w-full min-h-screen -z-10 bg-skin-bg" />

	<Navbar />
	<section class="mx-auto mt-12 md:mt-[56px] max-w-7xl">
		<slot />
	</section>
</main>

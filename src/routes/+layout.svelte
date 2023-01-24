<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Header/Navbar.svelte';
	import { page } from '$app/stores';
	// console.log('HITTING LAYOUT, page.data', $page.data);
	import { onMount } from 'svelte';
	// console.log('LAYOUT, importing $theme store');
	import { theme } from '$lib/stores/store';
	// console.log('+layout.svelte, $theme', $theme);
	// console.log('LAYOUT setting theme store to page.data.theme');
	// $:console.log('+layout.svelte, $theme{reactive)', $theme);

	if ($page.data.theme !== 'unset') {
		$theme.mode = $page.data.theme;
	}
	onMount(() => {
		// console.log('HITTING +LAYOUTE SVELTE, ONMOUNT');
		// We load theme in the <script> tag in layout.ts load, but then also here onMount to setup stores
		if (!('theme' in localStorage)) {
			theme.useLocalStorage();
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				// localTheme = 'dark';
				// console.log('setting theme store to dark');
				theme.set({ ...$theme, mode: 'dark' });
				localStorage.setItem('theme', JSON.stringify({ mode: 'dark' }));
			} else {
				// localTheme = 'light';
				theme.set({ ...$theme, mode: 'light' });
				// console.log('setting theme store to light');

				localStorage.setItem('theme', JSON.stringify({ mode: 'light' }));
			}
		} else {
			// console.log('setting theme store to use local storage');
			theme.useLocalStorage();
		}
	});
</script>

<svelte:head>
	<!-- <title>{$page.data.theme}</title> -->
	<script lang="ts">
		// console.log('page', $page);
		// console.log('theme', $theme);
		// console.log('HITTING HEAD');

		if (!('theme' in localStorage)) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.remove('light');
				document.documentElement.classList.add('dark');
				document.cookie =
					'theme=dark;path=/;SameSite=strict;expires=Wed, 29 Dec 9999 23:59:59 GMT;';
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

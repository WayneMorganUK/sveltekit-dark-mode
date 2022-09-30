<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/store';

	onMount(() => {
		// We load theme in the <script> tag in layout.ts load, but then also here onMount to setup stores
		if (!('theme' in localStorage)) {
			theme.useLocalStorage();
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				// localTheme = 'dark';
				theme.set({ ...$theme, mode: 'dark' });
			} else {
				// localTheme = 'light';
				theme.set({ ...$theme, mode: 'light' });
			}
		} else {
			theme.useLocalStorage();
		}
	});
</script>

<svelte:head>
	<script lang="ts">
		if (!('theme' in localStorage)) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
				document.cookie =
					'theme=dark;path=/;SameSite=strict;expires=Fri, 31 Dec 9999 23:59:59 GMT;';
			} else {
				document.documentElement.classList.add('light');
				document.cookie =
					'theme=light;path=/;SameSite=strict;expires=Thu, 30 Dec 9999 23:59:59 GMT;';
			}
		} else {
			if (localStorage.getItem('theme')) {
				let currentMode = JSON.parse(localStorage.getItem('theme'));
				document.documentElement.classList.add(currentMode.mode);
			}
		}
	</script>
	<title>Sveltekit & Tailwind Dark Mode</title>
</svelte:head>

<main>
	<div class="fixed top-0 w-full min-h-screen -z-50 bg-skin-bg" />

	<Navbar />
	<section class="mx-auto mt-12 md:mt-[56px] max-w-7xl">
		<slot />
	</section>
</main>

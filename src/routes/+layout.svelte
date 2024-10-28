<script lang="ts">
	import '../app.postcss';
	import Navbar from '$lib/Header/Navbar.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/store';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	if ($page.data.theme !== 'unset') {
		$theme.mode = $page.data.theme;
	}

	onMount(() => {
		if (!('theme' in localStorage)) {
			theme.useLocalStorage();
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				theme.set({ ...$theme, mode: 'dark' });
				localStorage.setItem('theme', JSON.stringify({ mode: 'dark' }));
			} else {
				theme.set({ ...$theme, mode: 'light' });
				localStorage.setItem('theme', JSON.stringify({ mode: 'light' }));
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
				document.documentElement.setAttribute('data-theme', 'dark');
				localStorage.setItem('theme', JSON.stringify({ mode: 'dark' }));
				document.cookie =
					'theme=dark;path=/;SameSite=strict;expires=Wed, 29 Dec 9999 23:59:59 GMT;';
			} else {
				document.cookie =
					'theme=light;path=/;SameSite=strict;expires=Thu, 30 Dec 9999 23:59:59 GMT;';
			}
		} else {
			if (localStorage.getItem('theme')) {
				let currentMode = JSON.parse(localStorage.getItem('theme'));
				document.documentElement.setAttribute('data-theme', currentMode.mode);
			}
		}
	</script>
	<title>Sveltekit &amp; Tailwind Dark Mode</title>
</svelte:head>

<main>
	<div class="fixed top-0 w-full min-h-screen -z-10 bg-skin-bg"></div>
	<Navbar />
	<section class="mx-auto mt-12 md:mt-[56px] max-w-7xl">
		{@render children?.()}
	</section>
</main>

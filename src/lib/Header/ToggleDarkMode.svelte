<script lang="ts">
	import { theme } from '$lib/stores/store';
	import { toggleTheme } from '$lib/Header/theme';
	import { icons } from '$lib/Icons/Icons';

	let current_theme: ThemeType = $state($theme.mode);

	function changeTheme() {
		toggleTheme(theme, $theme);
		current_theme = $theme.mode;
	}

	const SvelteComponent = $derived(icons[current_theme]);
</script>

<div class="flex bg-skin-secondary justify-center w-8 h-8 mr-2 items-center rounded-full">
	<button
		class="fill-base stroke-base hover:stroke-hover hover:fill-hover h-5 w-5 rounded-full"
		aria-label="Toggle Theme"
		onclick={changeTheme}
	>
		<SvelteComponent />
	</button>
</div>

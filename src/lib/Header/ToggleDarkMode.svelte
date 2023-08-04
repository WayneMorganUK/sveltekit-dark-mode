<script lang="ts">
	import { theme } from '$lib/stores/store';
	import { toggleTheme } from '$lib/Header/theme';
	import { icons } from '$lib/Icons/Icons';

	let current_theme: ThemeType = $theme.mode;

	function changeTheme() {
		toggleTheme(theme, $theme);
		current_theme = $theme.mode;
	}
</script>

<div class="flex bg-skin-secondary justify-center w-8 h-8 mr-2 items-center rounded-full">
	<button
		class="fill-base stroke-base hover:stroke-hover hover:fill-hover h-5 w-5 rounded-full"
		aria-label="Toggle Theme"
		on:click={changeTheme}
	>
		<svelte:component this={icons[current_theme]} />
	</button>
</div>

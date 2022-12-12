<script>
	import { theme } from '$lib/stores/store';
	import { toggleTheme } from '$lib/Header/theme';
	import { page } from '$app/stores';
	import Sun from '$lib/svgs/Sun.svelte';
	import Moon from '$lib/svgs//Moon.svelte';
	import BloodDrop from '../svgs/BloodDrop.svelte';
	let check = $page.data.theme;
	function changeTheme() {
		toggleTheme(theme, $theme);
		check = $theme.mode;
	}
</script>

<div class="flex bg-skin-secondary justify-center w-8 h-8 mr-2 items-center rounded-full">
	<button
		class="fill-base stroke-base hover:stroke-hover hover:fill-hover h-5 w-5 rounded-full"
		aria-label="Toggle Theme"
		on:click={changeTheme}
	>
		{#if check === 'light'}
			<Sun />
		{/if}
		{#if check === 'dark'}
			<Moon />
		{/if}
		{#if check === 'blood'}
			<BloodDrop />
		{/if}
	</button>
</div>

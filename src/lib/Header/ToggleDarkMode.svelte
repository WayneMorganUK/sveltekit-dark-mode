<script>
	// console.log('HITTING TOGGLE Mode');
	import { theme } from '$lib/stores/store';
	// $: console.log('TOGGLE, $theme', $theme);
	import { toggleTheme } from '$lib/Header/theme';
	import Sun from '$lib/svgs/Sun.svelte';
	import Moon from '$lib/svgs//Moon.svelte';
	import BloodDrop from '$lib/svgs/BloodDrop.svelte';
	// $: check = $theme.mode;

	function changeTheme() {
		toggleTheme(theme, $theme);
	}
</script>

<div class="flex bg-skin-secondary justify-center w-8 h-8 mr-2 items-center rounded-full">
	<button
		class="fill-base stroke-base hover:stroke-hover hover:fill-hover h-5 w-5 rounded-full"
		aria-label="Toggle Theme"
		on:click={changeTheme}
	>
		{#if $theme.mode === 'light'}
			<Sun />
		{/if}
		{#if $theme.mode === 'dark'}
			<Moon />
		{/if}
		{#if $theme.mode === 'blood'}
			<BloodDrop />
		{/if}
	</button>
</div>

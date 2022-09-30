<script>
	import { theme } from '$lib/stores/store';
	import { toggleTheme } from '$lib/stores/theme';
	import Sun from '$lib/svgs/Sun.svelte';
	import Moon from '$lib/svgs//Moon.svelte';
</script>

<div class="flex justify-center w-8 h-8 mr-2 align-middle">
	<button
		class="
		bg-[#e7e7f5] p-[2px] rounded-full p-[2px_4px]					
		neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
		aria-label="Toggle Light and Dark mode"
		on:click|preventDefault={() => {
			toggleTheme(theme, $theme);
		}}
	>
		<div
			class="hidden dark:block stroke-[goldenrod] fill-[goldenrod] hover:fill-[#09d3ac] hover:stroke-[#09d3ac]"
		>
			<Sun />
		</div>
		<div class="dark:hidden fill-inverted hover:fill-[goldenrod]">
			<Moon />
		</div>
	</button>
</div>

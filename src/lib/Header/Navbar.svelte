<script>
	// console.log('HITTING NAVBAR');

	import ToggleDarkMode from '$lib/Header/ToggleDarkMode.svelte';
</script>

<header class="w-full bg-skin-primary">
	<div class="flex h-12 justify-between mx-auto max-w-7xl pl-2 ">
		<div class="flex flex-row items-center text-lg text-skin-base">
			<a class="text-lg ml-2 hover:text-skin-selected" href="/">Home</a>
			<a class="text-lg ml-2 hover:text-skin-selected" href="/">About</a>
			<a class="text-lg ml-2 hover:text-skin-selected" href="/">Projects</a>
			<a class="text-lg ml-2 hover:text-skin-selected" href="/">Contact</a>
		</div>
		<div class="flex items-center">
			<ToggleDarkMode />
		</div>
	</div>
</header>

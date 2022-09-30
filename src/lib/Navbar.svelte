<script>
	import ToggleDarkMode from './ToggleDarkMode.svelte';
</script>

<header class="w-full bg-skin-base">
	<div class="flex h-12 justify-between mx-auto max-w-7xl pl-2 ">
		<div class="flex flex-row items-center">
			<p class="text-lg text-skin-base ml-2">Home</p>
			<p class="text-lg text-skin-base ml-2">About</p>
			<p class="text-lg text-skin-base ml-2">Projects</p>
			<p class="text-lg text-skin-base ml-2">Contacts</p>
		</div>
		<div class="flex items-center">
			<ToggleDarkMode />
		</div>
	</div>
</header>

<script>
	export let colorPrimary = '';
	export let colorSecondary = '';
	export let active = true;
</script>

<button
	on:click
	class={`grid w-16 h-16 grid-rows-2 overflow-hidden transition-all border border-gray-400 rounded-lg shadow-sm hover:ring ${
		active ? 'border-2 ring-4 ring-offset-2' : ''
	}`}
>
	<div class={`w-full h-full`} style={`background: ${colorPrimary}`} />
	<div class={`w-full h-full`} style={`background: ${colorSecondary}`} />
</button>

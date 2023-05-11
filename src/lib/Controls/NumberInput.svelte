<script>
	export let value = 2;
	export let name;
	export let label;
	export let max = 10;
	export let min = 1;
</script>

<div>
	<label for={name} class="block text-sm font-medium leading-6 text-gray-900">{label}</label>
	<div class="mt-2">
		<input
			on:change
			type="number"
			{name}
			{max}
			{min}
			bind:value
			id={name}
			class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
		/>
	</div>
</div>

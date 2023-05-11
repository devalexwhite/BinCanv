<script>
	export let label = '';
	export let description = '';
	export let checked = false;
</script>

<div class="flex items-center justify-between">
	<span class="flex flex-col flex-grow pr-2">
		<span class="text-sm font-medium leading-6 text-gray-900" id="availability-label">{label}</span>
		<span class="text-sm text-gray-500" id="availability-description">{description}</span>
	</span>
	<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
	<button
		type="button"
		on:click
		class={`relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out  border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
			checked ? ' bg-indigo-600' : ' bg-gray-200'
		}`}
		role="switch"
		aria-checked={checked}
		aria-labelledby="availability-label"
		aria-describedby="availability-description"
	>
		<!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
		<span
			aria-hidden="true"
			class={`inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow pointer-events-none ring-0 ${
				checked ? ' translate-x-5' : ' translate-x-0'
			}`}
		/>
	</button>
</div>

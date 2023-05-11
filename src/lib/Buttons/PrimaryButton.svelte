<script>
	export let click = () => {};
	export let label = '';
	export let isSubmit = false;
</script>

<button
	type={isSubmit ? 'submit' : 'button'}
	class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
	on:click={click}
>
	{label}
</button>

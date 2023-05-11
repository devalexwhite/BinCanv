<script>
	import { createEventDispatcher } from 'svelte';
	import ColorPalette from './ColorPalette.svelte';

	export let palettes = [
		{
			primary: '#8e8a81',
			secondary: '#c7c3c0'
		},
		{
			primary: '#537188',
			secondary: '#E1D4BB'
		},
		{
			primary: '#E08E6D',
			secondary: '#FFFAF4'
		},
		{
			primary: '#222831',
			secondary: '#EEEEEE'
		},
		{
			primary: '#F38181',
			secondary: '#EAFFD0'
		},
		{
			primary: '#112D4E',
			secondary: '#F9F7F7'
		},
		{
			primary: '#C3BEF0',
			secondary: '#DEFCF9'
		},
		{
			primary: '#E84545',
			secondary: '#2B2E4A'
		}
	];

	const dispatch = createEventDispatcher();

	export let value = palettes[0];

	const change = (palette) => {
		value = palette;
		dispatch('change');
	};
</script>

<div>
	<div class="block text-sm font-medium leading-6 text-gray-900">pick a color scheme.</div>
	<div class="flex flex-row p-2 pb-3 space-x-4 overflow-x-scroll overflow-y-visible">
		{#each palettes as palette}
			<div class="flex-1">
				<ColorPalette
					colorPrimary={palette.primary}
					colorSecondary={palette.secondary}
					on:click={(e) => {
						e.preventDefault();
						change(palette);
					}}
					active={value && value == palette}
				/>
			</div>
		{/each}
	</div>
</div>

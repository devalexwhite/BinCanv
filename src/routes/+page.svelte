<script>
	import BinModel from '../lib/BinModel.svelte';
	import PrimaryButton from '../lib/Buttons/PrimaryButton.svelte';
	import NumberInput from '../lib/Controls/NumberInput.svelte';
	import TextArea from '../lib/Controls/TextArea.svelte';
	import Toggle from '../lib/Controls/Toggle.svelte';

	import { GenerateCanvas } from '../lib/ArtAlgos/binaryCanvas';
	import ColorPalettePicker from '../lib/Component/ColorPalettePicker.svelte';

	let message = "This was a triumph. I'm making a note here, huge success.";
	let fillCanvas = true;
	let canvasTextureURL = '';
	let diameter = 12;
	let palette;

	const generatePreview = () => {
		canvasTextureURL = GenerateCanvas({
			width: 1800,
			height: 2400,
			message,
			fill: fillCanvas,
			diameter,
			oneFill: palette.primary,
			zeroColor: palette.secondary,
			bgColor: palette.secondary
		});
	};
</script>

<div class="flex flex-col">
	<BinModel imageURL={canvasTextureURL} />
	<div class="max-w-md mx-auto -mt-12">
		<div class="mb-8 space-y-1">
			<h3 class="z-10 font-serif font-black text-gray-600 text-8xl">1010</h3>
			<p class="text-sm italic font-light text-gray-600 lowercase">{new Date().toDateString()}</p>
			<p class="text-sm italic font-light text-gray-600">
				created by <a href="#" class="underline">`binaryCanvas.js`</a>
			</p>
			<p class="text-base font-light text-gray-600">
				a message encoded in binary, printed on high quality canvas.
			</p>
		</div>

		<div class="flex flex-col mb-8">
			<h6 class="mb-4 text-2xl font-extrabold text-gray-800">customize.</h6>
			<form class="flex flex-col space-y-8">
				<TextArea
					bind:value={message}
					label="your message."
					name="message"
					on:change={generatePreview}
				/>
				<ColorPalettePicker bind:value={palette} on:change={generatePreview} />
				<Toggle
					label="fill canvas?"
					bind:checked={fillCanvas}
					description="If enabled, dots fill the canvas. Otherwise, dots are a fixed size and centered in the canvas"
					on:click={() => {
						fillCanvas = !fillCanvas;
						generatePreview();
					}}
				/>

				{#if !fillCanvas}
					<NumberInput
						on:change={() => {
							generatePreview();
						}}
						label="circle diameter."
						name="diameter"
						bind:value={diameter}
						min={1}
						max={80}
					/>
				{/if}
			</form>
		</div>

		<div class="flex flex-col">
			<h6 class="mb-4 text-2xl font-extrabold text-gray-800">order.</h6>
			<PrimaryButton label="pay $60.00" click={generatePreview} />
			<p class="mt-1 text-sm font-light text-center text-gray-700">Excludes tax + shipping</p>
		</div>
	</div>
</div>

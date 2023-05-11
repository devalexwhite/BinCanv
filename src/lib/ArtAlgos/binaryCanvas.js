export const GenerateCanvas = ({
	width = 400,
	height = 800,
	spacing = 6,
	frameMargin = 0,
	message = '',
	fill = true,
	diameter = 1,
	oneFill = '#8e8a81',
	zeroColor = '#c7c3c0',
	bgColor = '#c7c3c0'
}) => {
	message = StringToBytes(message);
	spacing = diameter;

	width -= frameMargin;
	height -= frameMargin;

	let rows = 1;
	let cols = 1;

	if (fill) {
		spacing = (spacing / diameter) * 1;
		diameter = 1;
		while (true) {
			const ratio = spacing / diameter;
			const new_diameter = diameter + 1;
			const new_spacing = new_diameter * ratio;
			if (
				Math.floor(width / (new_diameter + new_spacing)) *
					Math.floor(height / (new_diameter + new_spacing)) >
				message.length
			) {
				spacing = new_spacing;
				diameter = new_diameter;
			} else {
				break;
			}
		}
		cols = Math.floor(width / (diameter + spacing));
		rows = Math.ceil(message.length / cols);

		console.log(cols, rows, message.length);
	} else {
		while (cols * rows < message.length) {
			if ((cols + 1) * (diameter + spacing) < width) cols += width / height;
			if ((rows + 1) * (diameter + spacing) < height) rows += height / width;
			// Deal with error if canvas is too small
		}
		cols = Math.ceil(cols);
		rows = Math.ceil(message.length / cols);
	}

	let x_padding = (width - cols * (diameter + spacing)) / 2;
	let y_padding = (height - rows * (diameter + spacing)) / 2;

	const canvas = document.createElement('canvas');
	canvas.width = width + frameMargin;
	canvas.height = height + frameMargin;

	const ctx = canvas.getContext('2d');

	let i_y = 0;
	let i_x = 0;
	let index = 0;

	ctx.fillStyle = bgColor;
	ctx.rect(0, 0, width + frameMargin, height + frameMargin);
	ctx.fill();

	while (index < message.length) {
		const char = message[index];

		const px =
			x_padding + i_x * (diameter + spacing) + spacing / 2 + diameter / 2 + frameMargin / 2;
		const py =
			y_padding + i_y * (diameter + spacing) + spacing / 2 + diameter / 2 + frameMargin / 2;
		if (char == '1') {
			ctx.fillStyle = oneFill;
			ctx.beginPath();
			ctx.ellipse(px, py, diameter / 2, diameter / 2, 0, 0, 360);
			ctx.fill();
		} else {
			ctx.fillStyle = zeroColor;
			ctx.beginPath();
			ctx.ellipse(px, py, diameter / 2, diameter / 2, 0, 0, 360);
			ctx.fill();
		}

		if (++i_x >= cols) {
			i_x = 0;
			i_y++;
		}
		index++;
	}

	return canvas.toDataURL();
};

const StringToBytes = (inString = '') => {
	let outputValue = '';
	outputValue = '';
	for (var i = 0; i < inString.length; i++) {
		outputValue += inString[i].charCodeAt(0).toString(2);
	}
	return outputValue;
};

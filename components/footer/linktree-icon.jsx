import React from 'react';

function LinktreeIcon({ color = '#a967ff', height = 24, width = 24 }) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 56 69"
			fill={color}
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="23" width="10" height="33" fill={color} />
			<rect x="23" y="46" width="10" height="23" fill={color} />
			<rect
				x="56"
				y="23"
				width="10"
				height="56"
				transform="rotate(90 56 23)"
				fill={color}
			/>
			<rect
				x="51.334"
				y="44.2637"
				width="10"
				height="56"
				transform="rotate(135 51.334 44.2637)"
				fill={color}
			/>
			<rect
				x="12.0723"
				y="51.6694"
				width="10"
				height="56"
				transform="rotate(-135 12.0723 51.6694)"
				fill={color}
			/>
		</svg>
	);
}

export default LinktreeIcon;

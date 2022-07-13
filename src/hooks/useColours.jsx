import React from 'react';

export default function useColours(index) {
	const possibleColours = [
		'bg-lime-300/80',
		'bg-orange-300/80',
		'bg-red-400/70',
		'bg-yellow-300/70',
		'bg-cyan-300/60',
	];
	const colour = possibleColours[index % possibleColours.length];

	return colour;
}

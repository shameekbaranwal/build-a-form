import React from 'react';

export default function useColours(index) {
	const possibleColours = [
		'bg-lime-300/80',
		'bg-orange-300/80',
		'bg-red-400/70',
		'bg-yellow-300/70',
		'bg-indigo-400/80',
	];
	const colour = possibleColours[index % possibleColours.length];

	return colour;
}

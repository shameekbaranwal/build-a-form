import { useState } from 'react';

export default function useOptions(startingOptions = ['New Option']) {
	const [options, setOptions] = useState(startingOptions);

	const updateOption = (index, option) => {
		const newOptions = [...options];
		newOptions[index] = option;
		setOptions(newOptions);
	};

	const addOption = () => {
		const newOptions = [...options];
		newOptions.push('New Option');
		setOptions(newOptions);
	};

	const removeOption = index => {
		const newOptions = [...options];
		newOptions.splice(index, 1);
		setOptions(newOptions);
	};

	return {
		options,
		setOptions,
		updateOption,
		addOption,
		removeOption,
	};
}

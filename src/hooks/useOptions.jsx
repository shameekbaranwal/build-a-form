import { useState } from 'react';

export default function useOptions(question, updateQuestion) {
	const options = question.options;

	const setOptions = newOptions => {
		question.options = newOptions;
		updateQuestion(question);
	};

	const updateOption = (index, option) => {
		const newOptions = [...options];
		newOptions[index] = option;
		setOptions(newOptions);
	};

	const addOption = () => {
		const newOptions = [...options];
		newOptions.push('new option');
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

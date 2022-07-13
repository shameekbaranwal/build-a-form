import { useState } from 'react';

export default function useOptions(question, updateQuestion) {
	// const [options, setOptions] = useState(question.options || ['new option']);
	const options = question.options;
	const setOptions = newOptions => {
		question.options = newOptions;
		updateQuestion(question);
	};

	const updateOption = (index, option) => {
		// console.log('updateOption', index, option);
		const newOptions = [...options];
		newOptions[index] = option;
		setOptions(newOptions);

		// question.options = newOptions;
		// updateQuestion(question);
	};

	const addOption = () => {
		const newOptions = [...options];
		newOptions.push('new option');
		setOptions(newOptions);

		// question.options = newOptions;
		// updateQuestion(question);
	};

	const removeOption = index => {
		const newOptions = [...options];
		newOptions.splice(index, 1);
		setOptions(newOptions);

		// question.options = newOptions;
		// updateQuestion(question);
	};

	return {
		options,
		setOptions,
		updateOption,
		addOption,
		removeOption,
	};
}

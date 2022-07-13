import React from 'react';
import { TrashIcon } from '@heroicons/react/outline';

import InputField from './InputField.jsx';

export default function OptionEditable({
	index,
	options,
	updateOption,
	removeOption,
}) {
	const option = options[index];

	return (
		<div className='flex items-center justify-center flex-grow w-full my-2'>
			<p className='text-sm font-semibold'>{index + 1})</p>
			<InputField
				// name='option'
				id={index}
				value={option}
				setValue={updateOption}
				className='flex-1'
			/>
			<button onClick={removeOption}>
				<TrashIcon width={15} className='text-red-700' />
			</button>
		</div>
	);
}

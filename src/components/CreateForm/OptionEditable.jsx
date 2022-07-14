import React from 'react';
import { XIcon } from '@heroicons/react/outline';

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
			<button
				onClick={removeOption}
				className=' focus:outline-none group'
			>
				<XIcon
					width={15}
					className='text-red-700 transition-all duration-200 hover:scale-125 group-focus:scale-125'
				/>
			</button>
		</div>
	);
}

import React from 'react';

import Toggle from '../General/Toggle.jsx';

export default function CheckBoxOptions({
	options,
	answer,
	updateAnswer,
	colour,
}) {
	return (
		<div className='flex flex-col font-mono'>
			{options.map((option, index) => (
				<div key={index} className='flex my-1 gap-x-4'>
					<Toggle
						value={answer[option]}
						setValue={val => {
							answer[option] = val;
							updateAnswer(answer);
						}}
					/>
					<label htmlFor={option}>{option}</label>
				</div>
			))}
		</div>
	);
}

import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

import useColours from '../../hooks/useColours.jsx';
import CheckBoxOptions from './CheckBoxOptions.jsx';
import DropdownOptions from './DropdownOptions.jsx';

export default function Question({ question, answer, updateAnswer, index }) {
	const bgColour = useColours(index);

	return (
		<div
			className={`${bgColour} flex justify-center flex-col px-2 pt-1 pb-2 relative`}
		>
			{question.mandatory && (
				<StarIcon
					className='absolute text-red-500 top-1 right-2'
					width={20}
				/>
			)}
			<div className='flex items-center justify-center mt-1 mb-4 font-mono font-bold text-center'>
				<p className=''>{index + 1})</p>
				<p className='w-full'>{question.label}</p>
			</div>
			{question.type === 'checkbox' && (
				<CheckBoxOptions
					options={question.options}
					answer={answer}
					updateAnswer={updateAnswer}
					colour={bgColour}
				/>
			)}
			{question.type === 'dropdown' && (
				<DropdownOptions
					options={question.options}
					answer={answer}
					updateAnswer={updateAnswer}
					colour={bgColour}
				/>
			)}
		</div>
	);
}

import React from 'react';

import InputField from './InputField.jsx';
import useOptions from '../../hooks/useOptions.jsx';
import useColours from '../../hooks/useColours.jsx';
import OptionEditable from './OptionEditable.jsx';
import Dropdown from '../General/Dropdown.jsx';
import Toggle from '../General/Toggle.jsx';
import { TrashIcon } from '@heroicons/react/outline';
import AddOptionButton from './AddOptionButton.jsx';

export default function QuestionEditable({
	questions,
	index,
	updateQuestion,
	removeQuestion,
}) {
	const question = questions[index];
	const colour = useColours(index);

	const { options, addOption, updateOption, removeOption } = useOptions(
		question,
		updateQuestion,
	);

	return (
		<div
			className={`w-full h-full py-4 font-mono flex flex-col justify-center items-center ${colour}`}
		>
			<div className='flex items-center justify-between w-full'>
				<p className='mx-4 text-lg font-bold'>#{index + 1}</p>
				<div className='flex items-center justify-center mx-4 gap-x-4'>
					<p className='font-semibold text-center'>required:</p>
					<Toggle
						value={question.mandatory}
						setValue={newValue => {
							question.mandatory = newValue;
							updateQuestion(question);
						}}
					/>
				</div>
				<button className='pr-2' onClick={removeQuestion}>
					<TrashIcon className='text-red-700' width={24} />
				</button>
			</div>
			<div className='flex items-center w-full px-2 my-4 gap-x-4'>
				<p className='font-semibold text-center'>type:</p>
				<Dropdown
					value={question.type}
					setValue={newValue => {
						question.type = newValue;
						updateQuestion(question);
					}}
					options={['checkbox', 'dropdown']}
				/>
			</div>
			<InputField
				className='w-full font-semibold text-center'
				name='question'
				id={index}
				value={question.label}
				setValue={value => {
					question.label = value;
					updateQuestion(question);
				}}
				centered
			/>
			<div className='flex flex-col w-full px-2'>
				{options.map((option, idx) => (
					<OptionEditable
						key={idx}
						index={idx}
						options={options}
						updateOption={o => updateOption(idx, o)}
						removeOption={() => removeOption(idx)}
					/>
				))}
			</div>
			<AddOptionButton onClick={addOption} />
		</div>
	);
}

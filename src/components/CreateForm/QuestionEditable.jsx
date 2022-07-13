import React from 'react';

import InputField from './InputField.jsx';
import useOptions from '../../hooks/useOptions.jsx';
import useColours from '../../hooks/useColours.jsx';
import OptionEditable from './OptionEditable.jsx';
import Dropdown from '../General/Dropdown.jsx';
import Toggle from '../General/Toggle.jsx';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { TrashIcon } from '@heroicons/react/outline';

export default function QuestionEditable({
	questions,
	index,
	updateQuestion,
	removeQuestion,
}) {
	const question = questions[index];
	const colour = useColours(index);

	const { options, addOption, updateOption, removeOption } = useOptions(
		question.options,
	);

	return (
		<div
			className={`w-full h-full py-4 font-mono flex flex-col justify-center items-center ${colour}`}
		>
			<div className='flex items-center justify-between w-full'>
				<p className='mx-4 text-lg font-bold'>#{index}</p>
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
				value={question.label}
				setValue={value => {
					question.label = value;
					updateQuestion(question);
				}}
				centered
			/>
			<div className='flex flex-col w-full px-2'>
				{options.map((option, index) => (
					<OptionEditable
						key={index}
						index={index}
						options={options}
						updateOption={o => updateOption(index, o)}
						removeOption={() => removeOption(index)}
					/>
				))}
			</div>
			<button
				className='flex items-center justify-center px-8 py-2 mt-4 transition-all duration-200 rounded bg-teal-400/40 group gap-x-2 hover:bg-teal-400/60'
				onClick={addOption}
			>
				<PlusCircleIcon
					className='text-teal-700 group-hover:text-teal-900 group-hover:animate-spin'
					width={20}
				/>
				<p className='text-sm'>new option</p>
			</button>
		</div>
	);
}

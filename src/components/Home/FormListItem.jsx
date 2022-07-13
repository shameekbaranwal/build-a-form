import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/solid';

import useColours from '../../hooks/useColours.jsx';
import { FormsContext } from '../../contexts/FormsContext.jsx';

export default function FormListItem({ index, form }) {
	const colour = useColours(index);
	const { deleteForm } = useContext(FormsContext);

	return (
		<li
			className={`flex flex-col items-center justify-center w-full py-2 ${colour}`}
		>
			<div
				className={`relative flex flex-row items-center justify-center w-full h-full mx-4 text-center transition duration-200 rounded mb-4`}
			>
				{/* increment the index because the user uses 1-indexing but it is stored with zero-indexing */}
				<p className='absolute text-sm text-gray-700 left-2'>
					{index + 1}
				</p>
				<p className='font-mono font-bold'>{form.title}</p>
			</div>
			<div className='flex gap-x-5'>
				<Link to={`/edit/${index + 1}`}>
					<PencilIcon
						className='transition duration-200 text-cyan-600 hover:text-cyan-900'
						width={20}
					/>
				</Link>
				<Link to={`/preview/${index + 1}`}>
					<EyeIcon
						className='text-green-700 transition duration-200 hover:text-green-900'
						width={20}
					/>
				</Link>
				<button className='' onClick={() => deleteForm(index)}>
					<TrashIcon
						className='text-red-500 transition duration-200 hover:text-red-900'
						width={20}
					/>
				</button>
			</div>
		</li>
	);
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function FormListItem({ index, form }) {
	return (
		<li className='flex flex-row items-center justify-center w-full'>
			<Link
				to={'/preview/' + index}
				className='relative flex flex-row items-center justify-center w-full h-full py-2 mx-4 text-center transition duration-200 rounded shadow-sm bg-cyan-600/25 hover:shadow-md hover:bg-cyan-600/50'
			>
				{/* make the index appear at the start of the box */}
				<p className='absolute text-sm text-gray-700 left-2'>{index}</p>
				<p className='font-mono text-lg font-medium'>{form.title}</p>
			</Link>
		</li>
	);
}

import React from 'react';
import FormListItem from './FormListItem.jsx';
import NoForms from './NoForms';

export default function FormsList({ forms }) {
	return (
		<div className='mt-4'>
			{forms.length != 0 ? (
				<ul
					className='flex flex-col gap-y-2 
				sdivide-y-[1px] sdivide-pink-700
				'
				>
					{forms.map((form, index) => (
						<FormListItem form={form} index={index} key={index} />
					))}
				</ul>
			) : (
				<NoForms />
			)}
		</div>
	);
}

import React from 'react';
import FormListItem from './FormListItem.jsx';

export default function FormsList({ forms }) {
	return (
		<div>
			{forms ? (
				<ul className='flex flex-col gap-y-2 divide-y-2'>
					{forms.map((form, index) => (
						<FormListItem form={form} index={index} key={index} />
					))}
				</ul>
			) : (
				<p>No forms yet</p>
			)}
		</div>
	);
}

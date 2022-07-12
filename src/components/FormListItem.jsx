import React from 'react';
import { Link } from 'react-router-dom';

export default function FormListItem({ index, form }) {
	return (
		<li>
			<Link to={'/preview/' + index}>{form.title}</Link>
		</li>
	);
}

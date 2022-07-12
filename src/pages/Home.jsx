import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormsList from '../components/FormsList.jsx';
// welcome to form builder

export default function Home() {
	const forms = JSON.parse(localStorage.getItem('forms'));

	return (
		<div>
			<FormsList forms={forms} />
			<button>
				<Link to='/create/0'>Create a New Form</Link>
			</button>
		</div>
	);
}

import React from 'react';
import { useParams } from 'react-router-dom';

export default function PreviewForm() {
	const { id } = useParams();
	const forms = JSON.parse(localStorage.getItem('forms'));
	const form = forms[id];

	return <div>PreviewForm # {form.title}</div>;
}

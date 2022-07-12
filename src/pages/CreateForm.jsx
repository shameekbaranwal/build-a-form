import React from 'react';
import { useParams } from 'react-router-dom';

export default function CreateForm() {
	const { id } = useParams();
	return <div>CreateForm # {id}</div>;
}

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CreateForm() {
	const { id } = useParams();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [questions, setQuestions] = useState([]);

	return <div>CreateForm # {id}</div>;
}

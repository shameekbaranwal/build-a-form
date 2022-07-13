import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import CreateForm from './pages/CreateForm.jsx';
import PreviewForm from './pages/PreviewForm.jsx';

function App() {
	localStorage.setItem(
		'forms',
		JSON.stringify([
			{
				title: 'accessibility survey',
				questions: [],
			},
			{
				title: 'attendance form',
				questions: [],
			},
			{
				title: 'event registration',
				questions: [],
			},
		]),
	);

	return (
		<div className='flex items-center justify-center w-full h-full min-h-screen bg-blue-200'>
			<div className='w-full mx-2 bg-white rounded-md sm:max-w-sm md:max-w-xl'>
				<h1 className='my-2 text-2xl font-semibold text-center font-Montserrat'>
					form builder
				</h1>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/create/:id' element={<CreateForm />} />
					<Route path='/preview/:id' element={<PreviewForm />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;

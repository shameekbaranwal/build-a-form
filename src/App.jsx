import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import CreateForm from './pages/CreateForm.jsx';
import PreviewForm from './pages/PreviewForm.jsx';

function App() {
	localStorage.setItem(
		'forms',
		JSON.stringify([
			{
				title: 'Accessibility Survey',
				questions: [],
			},
			{
				title: 'Attendance Form',
				questions: [],
			},
			{
				title: 'Event Registration',
				questions: [],
			},
		]),
	);

	return (
		<div className='bg-blue-200 w-full h-full min-h-screen flex justify-center items-center'>
			<div className='bg-white w-full mx-2 rounded-md sm:max-w-sm md:max-w-xl'>
				<h1 className='text-center text-2xl font-semibold my-2 font-Montserrat'>
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

import React, { useEffect, useState } from 'react'
import './App.css'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'

function App() {
	const [todos, setTodos] = useState(['abc', 'def'])
	const [input, setInput] = useState('')

	useEffect(() => {
		db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
			setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
		})
	}, [])
	
	const addTodo = (event) => {
		event.preventDefault()

		db.collection('todos').add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		})
		
		setTodos([...todos, input])
		setInput('')
	}
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Todo App</h1>
				<form>
					<FormControl>
						<InputLabel>Write a Todo <span role='img' aria-label='rocket-emoji'>🚀</span></InputLabel>
						<Input
							value={input}
							onChange={(event) => setInput(event.target.value)}
							type='text'
						></Input>
					</FormControl>

					<Button
						disabled={!input}
						onClick={addTodo}
						type='submit'
						variant='contained'
						color='primary'
					>
						Add Todo
					</Button>
				</form>
				<ul>
					{todos.map((todo, index) => (
						<Todo todo={todo} key={index} />
					))}
				</ul>
			</header>
		</div>
	)
}

export default App

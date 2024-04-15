import { useDispatch } from 'react-redux'
import { addTodo } from '../store/slices/todoSlice';
import { useState } from 'react';

const AddTodo = () => {

    const [ input, setInput ] = useState('');
    const dispatch = useDispatch();

    function addTodoHandler(event) {
        event.preventDefault();
        dispatch(addTodo(input))
        setInput('');
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-8">
            <input
                type="text"
                className="w-2/5 md:w-80 bg-gray-800 rounded border border-gray-700 text-base outline-none focus:outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo;
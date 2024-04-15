import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <h1 className='font-bold text-2xl text-black mt-12'>Todo List using Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App

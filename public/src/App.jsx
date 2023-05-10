import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {

  const [todos, setTodos] = useState([])

  const [temp, setTemp] = useState()

  const [addTodo, setAddTodo] = useState("")
  const [editTodo, setEditTodo] = useState("")


  const getTodos = async () => {
    try {
      const res = await axios.get("http://localhost:8080/todos")


      setTodos(res.data);
    }
    catch (err) {
      console.log(err)
    }
  }



  const handleCompleteToggle = async (event) => {
    try {
      await axios.patch(`http://localhost:8080/todos/${event.target.id}`, { complete: event.target.checked })

      await getTodos();
    } catch (error) {
      console.log(error)
    }
  }


  const addTask = async () => {
    try {
      const data = await axios.post('http://localhost:8080/todos', { title: addTodo })
      setAddTodo("")
      setTodos([...todos, data.data])
      alert("todo Added");
    }
    catch (error) {
      console.log(error)
    }
  }


  const toggleEditTask = async (event, todo) => {
    console.log(event.target)
    try {
      setTemp(true);
      let currentEditState = todo.editToggle;
      await axios.patch(`http://localhost:8080/todos/${event.target.id}`, { editToggle: !currentEditState, title: event.target.value })
      await getTodos();
    } catch (error) {
      console.log("cheld")
    }
  }

  const editTask = async (event, todo) => {
    try {

      setEditTodo("")

      console.log(event.target)

      let currentEditState = todo.editToggle;

      await axios.patch(`http://localhost:8080/todos/${event.target.id}`, { title: editTodo, editToggle: !currentEditState })


      await getTodos();
    } catch (err) {
      console.log(err)
      console.log(event.target, "error")

    }




  }

  const deleteTask = async (event, todo) => {
  
    try {
      await axios.delete(`http://localhost:8080/todos/${event.target.id}` )
      
      const index = todos.indexOf(todo)

      let newTodo = [...todos]

      newTodo.splice(index,1)

      setTodos(newTodo);
      
    }
    catch (error) {
      console.log(error)
      console.log(event.target.id,"asfhfah")
    }


  }




  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div className='container my-5 todolist-wrapper'>
      <Navbar />



      <section className='my-3 '>
        <div className='add-task-wrapper '>

          <input type="text" className='  add-task-input ' placeholder='add text here ' onChange={(event) => {
            setAddTodo(event.target.value)

          }} />

          <button className=' add-task-btn' onClick={addTask}>Add </button>

        </div>
        <hr />
      </section>





      <section className='my-3'>
        {todos.map(todo => {
          return <div className='' key={todo._id}>
            <div className='tasks-wrapper d-flex'>

              <input type="checkbox" className='tasks-checkbox' name="" id={todo._id} onClick={() => handleCompleteToggle(event, todo)} />



              {

                !todo.editToggle ?
                  <div id={todo._id} type="text" className={`
              
              ${!todo.complete ? "task" : "task-checked"}
               d-flex justify-content-start align-items-center`}
                    onClick={() => toggleEditTask(event, todo)}
                  >{todo.title} </div> :


                  <input type="text" className='  edit-task-input ' placeholder={todo.title} value={editTodo} onChange={(event) => {


                    setEditTodo(event.target.value)

                  }} />






              }




              {todo.editToggle ?
                <button id={todo._id} className=' tasks-edit-btn'
                  onClick={() => editTask(event, todo)}
                >Edit </button> : ""
              }

              
              <button  className=' tasks-delete-btn d-flex justify-content-center align-items-center'onClick={()=>deleteTask(event,todo)} >
                <i id={todo._id} className="fa-sharp fa-solid fa-xmark fa-x" ></i>
              </button>
            </div>
          </div>

        }
        )




        }








      </section>



    </div>
  )
}


export default App
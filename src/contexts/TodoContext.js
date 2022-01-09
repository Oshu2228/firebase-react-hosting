import React, { createContext, useState } from 'react'

export const TodoContext = createContext()

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newTodo = [...todos, {text, complete: false}]
    setTodos(newTodo)
    console.log(newTodo);
  }

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
    console.log(newTodos);
  }
  return (
      <TodoContext.Provider value={{todos,addTodo,removeTodo,completeTodo}} >
        {props.children}
      </TodoContext.Provider>
    )
  }
  
  
  export default TodoContextProvider
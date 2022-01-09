import React from 'react'
import { useContext } from 'react/cjs/react.development';
import { Button,Table } from 'reactstrap';
import { TodoContext } from '../contexts/TodoContext';

const TodoList = () => {
  const {todos,completeTodo,removeTodo} = useContext(TodoContext)
  return (
   
    
<Table>
    <tbody>
      {todos && todos.map((todo, index)=>(
      <tr key={index}>
        <th className='text-left' style=
        {{textDecoration: todo.complete ? "line-through":""}}>
          {todo.text}
        </th>
        <td className="text-end">
          <Button 
          color={todo.complete ? "secondary":"success"} 
          className='mx-2' 
          onClick={()=>completeTodo(index)}>
            {todo.complete ? "完了":"未完了"}
            </Button>
          <Button  color="danger" onClick={()=> removeTodo(index)}>削除</Button>
        </td>
      </tr>
      ))}
    </tbody>
</Table>  
   
  )
}

export default TodoList


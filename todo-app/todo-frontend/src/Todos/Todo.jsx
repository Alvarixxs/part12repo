import React from "react";

function Todo({todo, onClickComplete, onClickDelete}) {

  const doneInfo = (

    <>
      <span>This todo is done</span>
      <span>
              <button onClick={onClickDelete(todo)}> Delete </button>
            </span>
    </>
  )

  const notDoneInfo = (
    <>
            <span>
              This todo is not done
            </span>
      <span>
              <button onClick={onClickDelete(todo)}> Delete </button>
              <button onClick={onClickComplete(todo)}> Set as done </button>
            </span>
    </>
  )

  return (
    <div key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
            <span>
              {todo.text}
            </span>
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  )
}

export default Todo
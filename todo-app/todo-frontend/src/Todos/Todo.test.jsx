import { render, screen } from '@testing-library/react'
import Todo from "./Todo.jsx";

test('renders correctly', () => {
  const todo = {
    text: "hello",
    done: false,
  }
  render(<Todo todo={todo} onClickDelete={()=>null} onClickComplete={()=>null}/>)

  const element = screen.getByText('hello')
  expect(element).toBeDefined()
})
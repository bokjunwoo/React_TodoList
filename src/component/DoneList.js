import React from 'react'
import { useSelector } from 'react-redux'
import { ListGroup } from 'react-bootstrap'

export default function DoneList() {
  const list = useSelector((state) => state.Todo.list).filter((todo) => todo.done === true);

  return (
    <>
      <section className='container'>
        <h1 className='text-center p-3'>완료 목록</h1>
        <ListGroup className='mb-4'>
          {
            list.map((todo) => {
              return (
                <ListGroup.Item key={todo.id}>{todo.text}</ListGroup.Item>
              )
            })
          }
        </ListGroup>
      </section>
    </>
  )
}

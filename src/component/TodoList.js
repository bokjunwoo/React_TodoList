import React from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ListGroup, Button } from 'react-bootstrap'
import { create, done } from '../store/modules/Todo'

export default function TodoList() {
  const list = useSelector((state) => state.Todo.list).filter((todo) => todo.done === false);
  const nextID = useSelector((state) => state.Todo.nextID);
  const inputRef = useRef();
  const dispatch = useDispatch();

  return (
    <>
      <section className='container'>
        <h1 className='text-center pt-3'>할일 목록</h1>
        <div className='mb-3 d-flex justify-content-center'>
          <input type="text" ref={inputRef} />
          <Button className='ms-1' variant="primary" onClick={() => {
            dispatch(create({id : nextID, text : inputRef.current.value}))
            inputRef.current.value = ''}}>추가
          </Button>
        </div>
        <ListGroup>
          {
            list.map((todo) => {
              return (
                <ListGroup.Item className='list-group-item-action' onClick={() => {dispatch(done(todo.id))}} 
                key={todo.id}>{todo.text}</ListGroup.Item>
              )
            })
          }
        </ListGroup>
      </section>
    </>
  )
}

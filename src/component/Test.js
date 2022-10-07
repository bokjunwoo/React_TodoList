import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Test() {
  const weight = useSelector((state) => state);
  const dispatch = useDispatch();
  
  return (
    <>
      <h1>당신의 몸무게는 {weight}</h1>
      <button onClick={() => {dispatch({type : '증가'})}}>증가</button>
      <button onClick={() => {dispatch({type : '감소'})}}>감소</button>
    </>
  )
}

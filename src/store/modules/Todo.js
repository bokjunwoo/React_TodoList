// 초기 상태 설정
const TodoState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '밥 먹기',
      done: false,
    },
    {
      id: 2,
      text: '취업 하기',
      done: false,
    },
  ],
};

let counts = TodoState.list.length; 
TodoState['nextID'] = counts;

// 액션 타입 정의하기
const CREATE = 'Todo/CREATE';
const DONE = 'Todo/DONE';

// 액션 함수 생성
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
};

export function done(id) {
  return {
    type: DONE,
    id,
  };
};

// 리듀서 선언
export default function Todo(state = TodoState, action) {
  switch(action.type) {
    case CREATE:
      return {
        ...state,
        // concat() 객체 추가
        list : state.list.concat({
          id : action.payload.id,
          text : action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list : state.list.map((todo) => {
          if(todo.id === action.id) {
            return {
              ...todo,
              done : true,
            };
          } else {
            return todo
          };
        }),
      };
    default:
      return state;  
  }; 
};

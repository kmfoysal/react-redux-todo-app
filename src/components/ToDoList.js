import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const ToDoList = () => {

    const toDoItem = useSelector((state) => state.toDos);
    return (
      <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {toDoItem.map((toDo) => (
          <Todo toDo={toDo}  key={toDo.id}/>
        ))}
      </div>
    );
};

export default ToDoList;
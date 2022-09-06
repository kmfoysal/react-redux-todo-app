import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const ToDoList = () => {

    const toDoItem = useSelector((state) => state.toDos);

    const filters = useSelector(state => state.filters)

    const filterByStatus = (toDo) => {
      const { status } = filters;

      switch (status) {
        case "Complete":
          return toDo.completed;

        case "Incomplete":
          return !toDo.completed;

        default:
          return true;
      }
    };


    const filterByColors = (toDo) => {
      const { colors } = filters;

      if (colors.length > 0) {
        return colors.includes(toDo.color);
      }
      return true;
    };
    

    return (
      <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {toDoItem
          .filter(filterByStatus)
          .filter(filterByColors)
          .map((toDo) => (
            <Todo toDo={toDo} key={toDo.id} />
          ))}
      </div>
    );
};

export default ToDoList;
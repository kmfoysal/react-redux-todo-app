import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorChanged, statusChanged } from '../redux/filters/actions';

// Todo remaining Formatter 
const numberOfToDos = (no_of_todo) =>{

    switch (no_of_todo) {
      case 0:
        return "No Task";

      case 1:
        return "1 Task";

      default:
        return `${no_of_todo} Tasks`;
    }

}

const Footer = () => {

    const dispatch = useDispatch();

    const allToDoItem = useSelector(state => state.toDos);

    const filters = useSelector(state => state.filters)

    const remainingToDo = allToDoItem.filter(item => !item.completed).length

    const {status, colors} = filters;

    const handleStatusChanged = (status) => {
      dispatch(statusChanged(status));
    };

    const handleColorChanged = (color) => {

      if(colors.includes(color)){

          dispatch(colorChanged(color, 'removed'));
      }
      else{

          dispatch(colorChanged(color, "added"));
      }
  
    };


    return (
      <div class="mt-4 flex justify-between text-xs text-gray-500">
        <p>{numberOfToDos(remainingToDo)} left</p>
        <ul class="flex space-x-1 items-center text-xs">
          <li
            class={`cursor-pointer ${status === "All" && "font-bold"}`}
            onClick={() => handleStatusChanged("All")}
          >
            All
          </li>
          <li>|</li>
          <li
            class={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
            onClick={() => handleStatusChanged("Incomplete")}
          >
            Incomplete
          </li>
          <li>|</li>
          <li
            class={`cursor-pointer ${status === "Complete" && "font-bold"}`}
            onClick={() => handleStatusChanged("Complete")}
          >
            Complete
          </li>
          <li></li>
          <li></li>
          <li
            class={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
              colors.includes("green") && "bg-green-500"
            }`}
            onClick={() => handleColorChanged("green")}
          ></li>
          <li
            class={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
              colors.includes("red") && "bg-red-500"
            }`}
            onClick={() => handleColorChanged("red")}
          ></li>
          <li
            class={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
              colors.includes("yellow") && "bg-yellow-500"}`}
            onClick={() => handleColorChanged("yellow")}
          ></li>
        </ul>
      </div>
    );
};

export default Footer;
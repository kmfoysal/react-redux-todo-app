import React, { useState } from 'react';
import Add_Icon from '../assets/images/plus.png';
import Double_Tick_Icon from '../assets/images/double-tick.png';
import Notes_Icon from '../assets/images/notes.png'
import { useDispatch } from 'react-redux';
import { addItem, clearCompletedItem, completedItem } from '../redux/todos/actions';

const Header = () => {

    const [input, setInput] = useState('');

    const dispatch = useDispatch();


    const inputHandeler = (e) => {
        setInput(e.target.value);
    }

    const submitHandeler = (e) => {
        e.preventDefault()
        dispatch(addItem(input));
        setInput('');
    }

    const completeHandeler = () => {

        dispatch(completedItem())
    }

    const clearHandeler = () => {
        dispatch(clearCompletedItem())
    };

    
    return (
      <div>
        <form
          class="flex items-center bg-gray-100 px-4 py-4 rounded-md"
          onSubmit={submitHandeler}
        >
          <img src={Notes_Icon} class="w-6 h-6" alt="Add todo" />
          <input
            type="text"
            placeholder="Type your todo"
            class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            value={input}
            onChange={inputHandeler}
            required
          />
          <button
            type="submit"
            class={`appearance-none w-8 h-8 bg-[url('${Add_Icon}')] bg-no-repeat bg-contain`}
          ></button>
        </form>

        <ul class="flex justify-between my-4 text-xs text-gray-500">
          <li class="flex space-x-1 cursor-pointer" onClick={completeHandeler}>
            <img class="w-4 h-4" src={Double_Tick_Icon} alt="Complete" />
            <span>Complete All Tasks</span>
          </li>
          <li class="cursor-pointer" onClick={clearHandeler}>
            Clear completed
          </li>
        </ul>
      </div>
    );
};

export default Header;
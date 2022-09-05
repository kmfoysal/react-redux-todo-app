import React from 'react';
import Todo from './Todo';

const ToDoList = () => {
    return (
              <div
                    class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
                >
                    {/* <!-- todo --> */}
                    <Todo />
                    
                </div>
    );
};

export default ToDoList;
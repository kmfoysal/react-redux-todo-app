import { AddItem, ClearCompletedItem, CompletedItem, DeletedItem, SetColor, ToggledItem } from "./actionTypes";
import { initialState } from "./initialState";


const reducer = (state=initialState, action) => {

    const nextToDoId = (todos) => {
        
        const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
        return maxId + 1 ;
    }


    switch (action.type) {
        case AddItem:
            return [
                ...state,
                {
                    id: nextToDoId(state)
                }
            ]

        case ToggledItem:
            return state.map( toDo => {
                if(toDo.id !== action.payload){
                    return toDo;
                }
                return {
                    ...toDo,
                    completed: !toDo.completed
                }
            }) 
            
            
            case SetColor:

                const {toDoId, color} = action.payload;

                return state.map( toDo => {
                    if(toDo.id !== toDoId){
                        return toDo;
                    }
                    return {
                        ...toDo,
                        color: color
                    }
                }) 

            case DeletedItem:
                return state.filter(toDo => toDo.id !== action.payload);

            case CompletedItem:
                return state.map(toDo => {
                    return {
                        ...toDo,
                        completed: true,
                    }
                }); 
                
            case ClearCompletedItem:
                return state.filter(toDo => !toDo.completed);
        
    
            default:
                break;
    }
}

export default reducer;
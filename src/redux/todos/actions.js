import { AddItem, ClearCompletedItem, CompletedItem, DeletedItem, SetColor, ToggledItem,  } from "./actionTypes"


export const addItem = (toDoText) => {

    return{
        type: AddItem,
        payload: toDoText
    }
}


export const toggledItem = (toDoId) => {

    return{
        type: ToggledItem,
        payload: toDoId
    }
}


export const setColor = (toDoId, color) => {

    return{
        type: SetColor,
        payload: {
            toDoId: toDoId,
            color: color
        }
    }
}


export const deleteItem = (toDoId) => {

    return{
        type: DeletedItem,
        payload: toDoId
    }
}


export const completedItem = () => {

    return{
        type: CompletedItem,
    }
}


export const clearCompletedItem = () => {

    return{
        type: ClearCompletedItem,
    }
}
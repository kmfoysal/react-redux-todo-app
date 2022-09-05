import { ColorChanged } from "./actionTypes"

export const colorChanged = (color, changeType) => {
    return {
        type: ColorChanged,
        payload: {
            color, changeType
        }

    }
}


export const statusChanged = (color, changeType) => {
    return {
        type: ColorChanged,
        payload: {
            color, changeType
        }

    }
}
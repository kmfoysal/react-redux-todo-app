import { ColorChanged, StatusChanged } from "./actionTypes"

export const colorChanged = (color, changeType) => {
    return {
        type: ColorChanged,
        payload: {
            color, changeType
        }

    }
}


export const statusChanged = (status) => {
    return {
        type: StatusChanged,
        payload: status

    }
}
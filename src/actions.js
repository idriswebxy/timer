

export const handleSetMinutesUp = (dispatch) => (
    dispatch({ type: "MINUTES_UP" })
)

export const handleSetMinutesDown = (dispatch) => (
    dispatch({ type: 'MINUTES_DOWN' })
)

export const tick = (dispatch) => (
    dispatch({ type: "TICK" })
)

export const handleStart = (dispatch) => (
    dispatch({ type: "START" })
)

export const reset = (dispatch) => {
    dispatch({ type: "RESET" })
}

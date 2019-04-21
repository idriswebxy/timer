
const initialState = {
    minutes: 0,
    seconds: 0,
    start: false,
    doneMessage: "",

};



export const reducer = (state = initialState, action) => {


    switch (action.type) {
        case "TICK":
            if (state.minutes >= 0 && state.seconds > 0 && state.start === true) {
                return { ...state, seconds: state.seconds - 1 }
            }
            else if (state.minutes === 0 && state.seconds === 0 && state.start === true) {
                return { ...state, doneMessage: "All Done!!!", start: false }
            }
            else if (state.minutes > 0 && state.seconds === 0 && state.start === true) {
                return { ...state, minutes: state.minutes - 1, seconds: 5 };

            } else {
                return state;
            }

        case "MINUTES_UP":
            return { ...state, minutes: state.minutes + 1 }
        case "MINUTES_DOWN":
            return { ...state, minutes: state.minutes - 1 }
        case "START":

            if (state.minutes > 0) {
                return {
                    ...state,
                    doneMessage: "",
                    seconds: 5,
                    start: true
                }

            } else {
                return state;
            }

        case "RESET":
            return { ...state, minutes: 0, seconds: 0, start: false }
        default:
            return state
    }
}

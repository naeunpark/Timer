//Import

//Actions
const START_TIMER = 'START_TIMER';
const RESET_TIMER = 'RESET_TIMER';
const PAUSE_TIMER = 'PAUSE_TIMER';
const ADD_SECOND = 'ADD_SECOND';

//Action creators
function startTimer() {
    return{
        type: "START_TIMER"
    };
}

function resetTimer() {
    return{
        type: "RESET_TIMER"
    };
}

function pauseTimer() {
    return{
        type: "PAUSE_TIMER"
    };
}

function addSecond() {
    return{
        type: "ADD_SECOND"
    };
}

//Reducer
const initialState = {
    isPlaying: false,
    elapsedTime:0
}

function reducer(state = initialState, action){
    switch(action.type){
        case START_TIMER:
          return applyStartTimer(state);
        case PAUSE_TIMER:
          return applyPauseTimer(state);
        case RESET_TIMER:
          return applyResetTimer(state);
        case ADD_SECOND:
          return applyAddSecond(state);
        default:
          return state;
    }
}

//Reducer functions
function applyStartTimer(state) {
    return{
        ...state,
        isPlaying: true
    };
}

function applyPauseTimer(state) {
    if( state.elapsedTime > 0 ){
        return{
            isPlaying: false,
            elapsedTime: state.elapsedTime + 1
        };
    }
}

function applyResetTimer(state) {
    return{
        ...state,
        isPlaying: false,
        elapsedTime: 0
    };
}

function applyAddSecond(state) {
    return{
        ...state,
        elapsedTime: state.elapsedTime + 1
    };
}
//Export Action creators
const actionCreators = {
    startTimer,
    resetTimer,
    pauseTimer,
    addSecond
}
export { actionCreators }; 

//Export Reducer
export default reducer;
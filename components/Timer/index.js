import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../reducer";
import Timer from "./presenter";

function mapStateToProps(state) {
    const { isPlaying, elapsedTime } = state;
    return {
        isPlaying,
        elapsedTime
    };
} 

function mapDispatchToProps(dispatch) {
    return {
        startTimer: bindActionCreators(actionCreators.startTimer, dispatch),
        pauseTimer: bindActionCreators(actionCreators.pauseTimer, dispatch),
        resetTimer: bindActionCreators(actionCreators.resetTimer, dispatch),
        addSecond: bindActionCreators(actionCreators.addSecond, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

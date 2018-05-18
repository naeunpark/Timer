import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

function formatTime(time) {
    let minutes = Math.floor(time /60);
    time -= minutes * 60;
    let seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

class Timer extends Component{
    componentWillReceiveProps(nextProps) {
        const currentProps = this.props;
        if (!currentProps.isPlaying && nextProps.isPlaying) {
            const timeInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);
            this.setState({
                timeInterval
            });
        } else if (currentProps.isPlaying && !nextProps.isPlaying) {
            clearInterval(this.state.timeInterval);
        }
    }

    render() {
        console.log(this.props);
        const { 
            isPlaying, 
            elapsedTime,
            startTimer,
            resetTimer,
            pauseTimer,
            addSecond } = this.props;
        return(
            <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />
                <View style={styles.upper}>
                  <Text style={styles.time}>{formatTime(elapsedTime)}</Text>
                </View>
                <View style={styles.lower}>
                  { !isPlaying && 
                  <Button iconName="play-circle" onPress ={startTimer} />}
                  { isPlaying && 
                  <Button iconName="pause-circle" onPress ={pauseTimer} />}
                 <Button iconName="stop-circle" onPress ={resetTimer} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange"
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-start"
    },
    time: {
        color: "white",
        fontWeight: "200",
        fontSize: 115
    }
})

export default Timer;

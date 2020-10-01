import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons";
import TrackPlayer, { usePlaybackState } from 'react-native-track-player';

export default function Controller({ onNext, onPrv }) {
  const playbackState = usePlaybackState();
  const [isPlaying,setIsPlaying ] = useState('paused')

  useEffect(() => { 
    if (playbackState === "playing" || playbackState === 3) {
      setIsPlaying('playing');
    }
    else if (playbackState === "paused" || playbackState === 2) {
      setIsPlaying('paused');
    }
    else{
      setIsPlaying('loading');
    }
  }, [playbackState]);
  const renderPlayPauseBtn = () => {
    switch (isPlaying) {
      case "playing":
        return <Icons name="pause" size={45} color='#fff' />;
  
        case "paused":
          return <Icons name="play-arrow" size={45} color='#fff' />;
  
        default:
          return <ActivityIndicator size={45} color='#fff' />;
    }

  };
  const onPlayPause = () => {
    console.log(playbackState);
    if (playbackState === "playing" || playbackState === 3) {
      TrackPlayer.pause()
    }
    else if (playbackState === "paused" || playbackState === 2) {
      TrackPlayer.play()
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPrv}>
        <Icons name="skip-previous" size={45} color='#fff'/>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPlayPause}>
      {renderPlayPauseBtn()}
      </TouchableOpacity>
      <TouchableOpacity onPress={onNext}>
        <Icons name="skip-next" size={45} color='#fff'/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width:250,

  },
});
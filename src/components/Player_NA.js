import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import Controls from './Controls';
import Video from 'react-native-video';

function Player({ tracks, navigation }) {
  const [paused, setPause] = useState(true);
  const [totalLength, setTotalLength] = useState(1);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const audioElement = React.useRef()

  const setDuration = (data) => {
    // console.log(totalLength);
    setTotalLength(Math.floor(data.duration));
  }

  const setTime = (data) => {
    //console.log(data);
    setCurrentPosition(Math.floor(data.currentTime));
  }

  const seek = (time) => {
    time = Math.round(time);
    console.log('Audio element: ', audioElement);
    audioElement && audioElement.seek(time);
    setCurrentPosition(time);
    setPause(false);
  }

  const track = tracks[selectedTrack];
  const video = isChanging ? null : (
    <Video source={{uri: track.audioUrl}} // Can be a URL or a local file.
      ref={audioElement}
      paused={paused}               // Pauses playback entirely.
      resizeMode="cover"           // Fill the whole screen at aspect ratio.
      repeat={false}                // Repeat forever.
      onProgress={setTime}    // Callback every ~250ms with currentTime
      onLoad={setDuration}    // Callback when video loads
      style={styles.audioElement}
      audioOnly={true} />
  );

  return (
    <View style={styles.container}>
      <TrackDetails title={track.title} artist={track.artist} />
      <SeekBar
        onSeek={seek()}
        trackLength={totalLength}
        onSlidingStart={() => setPause(true)}
        currentPosition={currentPosition} />
      <Controls
        forwardDisabled={selectedTrack === tracks.length - 1}
        onPressPlay={() => setPause(false)}
        onPressPause={() => setPause(true)}
        paused={paused}/>
      {video}
    </View>
  );

}
/*        onBack={this.onBack.bind(this)}
        onForward={this.onForward.bind(this)}*/
export default Player;


const styles = {
  container: {
    backgroundColor: '#2a5477',
    height:210,
    marginBottom:100
  },
  audioElement: {
    height: 0,
    width: 0,
  }
};

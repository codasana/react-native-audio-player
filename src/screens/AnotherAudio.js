import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Player from '../components/Player';

const TRACKS = [{
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
    audioUrl: 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3',
} ];

//import { AudioPlayer } from './src/components/AudioPlayer';

function AnotherAudioScreen({ navigation }) {
  const [audiostatus, setAudioStatus] = useState(true);


  React.useEffect(() => {
    const unsubscribe1 = navigation.addListener('blur', () => {
      console.log('Leaving another Screen');
      setAudioStatus(true);
      //console.log('audio status from another audio: ', audiostatus);
      // do something
      // we will change the pause stattus and set local state with it.
    });

    return unsubscribe1;
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center',backgroundColor: '#fff' }}>
      <Player tracks={TRACKS} paused={audiostatus}/>
      <Button
        title="Go to Screen Without Audio"
        onPress={() => navigation.navigate('No Audio Screen')}
      />
      <Button
        title="Go to Screen with First Audio (Stressed Out)"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default AnotherAudioScreen;

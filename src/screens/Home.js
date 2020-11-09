import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Player from '../components/Player';

const TRACKS = [{
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    audioUrl: "http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3",
} ];


function HomeScreen({ navigation }) {
  const [audiostatus, setAudioStatus] = useState(true);


  React.useEffect(() => {
    const unsubscribe1 = navigation.addListener('blur', () => {
      console.log('Leaving Home Screen');
      setAudioStatus(true);
    });

    return unsubscribe1;
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center',backgroundColor: '#fff' }}>
      <Player tracks={TRACKS} paused={audiostatus}/>
      <Text style={{margin:20,}}>Pressing any of the following buttons should pause the audio, but it doesn't. The primary issue.</Text>
      <Button
        title="Go to Screen Without Audio"
        onPress={() => navigation.navigate('No Audio Screen')}
      />
      <Button
        title="Go to Screen With Another Audio (Love Yourself)"
        onPress={() => navigation.navigate('Another Audio Screen')}
      />
      <Button
        title="Pause Audio"
        onPress={() => setAudioStatus(true)}
      />
    </View>
  );
}

export default HomeScreen;

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Player from '../components/Player';


function NoAudioScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',backgroundColor: '#fff', padding:30 }}>
      <Text>This is a normal screen with no audio. No audio should be playing.</Text>
      <Button
        title="Back to Home Screen Audio (Stressed Out)"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Back to Screen With Another Audio (Love Yourself)"
        onPress={() => navigation.navigate('Another Audio Screen')}
      />
    </View>
  );
}

export default NoAudioScreen;

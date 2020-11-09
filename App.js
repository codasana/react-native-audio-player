import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home';
import NoAudioScreen from './src/screens/NoAudioScreen';
import AnotherAudioScreen from './src/screens/AnotherAudio';

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="No Audio Screen" component={NoAudioScreen} />
        <Stack.Screen name="Another Audio Screen" component={AnotherAudioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = {
    container: {
        flex: 1,
        backgroundColor: 'rgb(4,4,4)',
    },
}

import * as React from 'react';
import {ScrollView, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <ScrollView>
      <Text style={{fontSize: 48, padding: 48}}>Home Screen</Text>
      <Button title="Settings" onPress={() => navigation.push('Settings')} />
      <Text style={{fontSize: 48, padding: 48}}>Home Screen</Text>
      <Button title="Settings" onPress={() => navigation.push('Settings')} />
      <Text style={{fontSize: 48, padding: 48}}>Home Screen</Text>
      <Button title="Settings" onPress={() => navigation.push('Settings')} />
      <Text style={{fontSize: 48, padding: 48}}>Home Screen</Text>
      <Button title="Settings" onPress={() => navigation.push('Settings')} />
    </ScrollView>
  );
}

function SettingsScreen({navigation}) {
  return (
    <ScrollView>
      <Text style={{fontSize: 48, padding: 48}}>Settings Screen</Text>
      <Button title="Back" onPress={() => navigation.pop()} />
      <Text style={{fontSize: 48, padding: 48}}>Settings Screen</Text>
      <Button title="Back" onPress={() => navigation.pop()} />
      <Text style={{fontSize: 48, padding: 48}}>Settings Screen</Text>
      <Button title="Back" onPress={() => navigation.pop()} />
      <Text style={{fontSize: 48, padding: 48}}>Settings Screen</Text>
      <Button title="Back" onPress={() => navigation.pop()} />
    </ScrollView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

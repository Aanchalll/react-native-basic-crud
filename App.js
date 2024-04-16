import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ToDoPage from './src/pages/todo-list';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalculatorPage from './src/pages/calculator';
import AboutPage from './src/pages/about';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome!' }}
          
        />
        <Stack.Screen
          name="To Do List"
          component={ToDoPage}
          options={{ title: 'To Do List Maker' }}
        />
        <Stack.Screen
          name="Calculator"
          component={CalculatorPage}
          options={{ title: 'Calculator' }}
        />
        <Stack.Screen
          name="About"
          component={AboutPage}
          options={{ title: 'About' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="About"
        onPress={() =>
          navigation.navigate('About', { name: 'Jane' })
        }
      />
      <Button
        title="To Do List"
        onPress={() =>
          navigation.navigate('To Do List', { name: 'Jane' })
        }
      />
      <Button
        title="Calculator"
        onPress={() =>
          navigation.navigate('Calculator', { name: 'Jane' })
        }
      />
    </View>
  );
};

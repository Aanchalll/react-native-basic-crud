import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ToDoPage from './src/pages/todo-list';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalculatorPage from './src/pages/calculator';
import AboutPage from './src/pages/about';
import ButtonBase from './src/components/base/button';

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

      <ButtonBase onPress={() =>
        navigation.navigate('About', { name: 'Jane' })
      }
        text='About'
      />

      <ButtonBase
        onPress={() =>
          navigation.navigate('To Do List', { name: 'Jane' })
        }
        text='To Do List'
      />

      <ButtonBase
        onPress={() =>
          navigation.navigate('Calculator', { name: 'Jane' })
        }
        text='Calculator'
      />

    </View>
  );
};







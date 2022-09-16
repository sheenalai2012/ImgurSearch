import { StyleSheet } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ItemPage from './components/ItemPage'
import ResultsPage from './components/ResultsPage';


const Stack = createNativeStackNavigator();

export default function App(){
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} nitialRouteName="Search">
      <Stack.Screen name="Search" component={ResultsPage} />
      <Stack.Screen name="Item" component={ItemPage} />
    </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
});

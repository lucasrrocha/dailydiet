import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditMeal } from '@screens/EditiMeal';
import { Home } from '@screens/Home';
import { Meals } from '@screens/Meals';
import { NewMeal } from '@screens/NewMeal';
import { Register } from '@screens/Register';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='statistics'
        component={Statistics}
      />
      <Screen
        name='newMeal'
        component={NewMeal}
      />
      <Screen
        name='register'
        component={Register}
      />
      <Screen
        name='meals'
        component={Meals}
      />
      <Screen
        name='editMeal'
        component={EditMeal}
      />
    </Navigator>
  )
}
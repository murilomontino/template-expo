import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { FontAwesome } from '@expo/vector-icons'

import HomeScreen from '@/screens/home-screen'
import OptionsScreen from '@/screens/options-screen'

const Tab = createMaterialBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#0f2f2f" // cinza
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome adjustsFontSizeToFit name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Options"
        component={OptionsScreen}
        options={{
          tabBarLabel: 'Options',
          tabBarIcon: ({ color }) => (
            <FontAwesome adjustsFontSizeToFit name="gear" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs

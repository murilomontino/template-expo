/* eslint-disable @typescript-eslint/no-namespace */
import { NavigationContainer } from '@react-navigation/native'

import Tabs from './routes/tabs'

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      HomeScreen: undefined
      SettingsScreen: undefined
    }
  }
}

const Navigations = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default Navigations

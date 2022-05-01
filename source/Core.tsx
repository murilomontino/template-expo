import { Provider as ProviderRedux } from 'react-redux'

import { StatusBar } from 'expo-status-bar'

import { PersistGate } from 'redux-persist/integration/react'

import styled from 'styled-components/native'

import Navigations from './navigations'
import { store, persistor } from './reducers'

const Container = styled.View`
  flex: 1;
`
export default function App() {
  return (
    <ProviderRedux store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Container>
          <Navigations />
          <StatusBar style="auto" />
        </Container>
      </PersistGate>
    </ProviderRedux>
  )
}

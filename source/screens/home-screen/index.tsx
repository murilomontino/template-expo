import { Button, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import { Container, Card } from './styles'

/* 
    View -> div
    Text -> span
    Image -> img
    ScrollView -> div
    FlatList -> div   
*/

const arrayexample = [ 1,2,3,4,5,6,7]

const HomeScreen = () => {
  const [contador, setContador] = useState([1,2,3,4,5,6,7,8,9,10])
    const [medicamentos, setMedicamentos] = useState([
        {
            name: 'Dipirona',
            price: 'R$ 10,00',
        },
        {
            name: 'Amoxicilina',
            price: 'R$ 20,00',
        },
        {
            name: 'Amoxicilina',
            price: 'R$ 35,00',
        },
    ])
  useEffect(() => {
    
  }, [contador])

  return (
    <Container>
        <View style={{
            flex: 3,
            backgroundColor: 'red',
            width: 10,

        }}></View>
        <View style={{
            flex: 2,
            backgroundColor: 'green',
            width: '100%',

        }}>
            <FlatList 
                data={medicamentos}
                keyExtractor={medicamento => String(medicamento.name)}
                renderItem={({ item: medicamento }) => (
                    <Card>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{medicamento.name}</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{medicamento.price}</Text>
                    </Card>
                )}
            />
        </View>
      {/* <Text>{contador.join('-')}</Text>
      <Button onPress={() => setContador(state => {
        return [...state, state.length + 1]
      })} title='+'/>
      <Button onPress={() => setContador((state) => {
        return state.filter((item, index) => index !== state.length - 1) 
      })} title='-'/> */}
  </Container>
  )
}

export default HomeScreen
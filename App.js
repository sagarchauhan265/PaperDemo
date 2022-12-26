import { View, Text,Button } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View>
       <Text>google Baba</Text>
      <Button
      title='Google Button'
      onPress={()=>alert("ji")}
      />
     
    </View>
  )
}
import { View, Text,Button } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View>
       <Text>google Baba</Text>
      <Button
      title='You touch here'
      onPress={()=>alert("ji")}
      />
     
    </View>
  )
}
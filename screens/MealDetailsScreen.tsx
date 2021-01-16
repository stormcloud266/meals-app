import React, { ReactElement } from 'react'
import { Text, View, StyleSheet } from 'react-native'

interface Props {}

const MealDetailsScreen = (props: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>MealDetails</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default MealDetailsScreen

import React, { ReactElement } from 'react'
import { Text, View, StyleSheet } from 'react-native'

interface Props {}

const CategoryMealsScreen = (props: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>CategoryMeals</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default CategoryMealsScreen

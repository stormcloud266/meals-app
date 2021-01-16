import React, { ReactElement } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

interface Props {}

const CategoryMealsScreen = (props: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>CategoryMeals</Text>
      <Button
        title="go to details"
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default CategoryMealsScreen

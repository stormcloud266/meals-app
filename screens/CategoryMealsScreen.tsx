import React, { ReactElement, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Platform } from 'react-native'
import { CATEGORIES } from '../data/test-data'

interface Props {}

const CategoryMealsScreen = (props: Props): ReactElement => {
  const catId = props.route.params.categoryId
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)

  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: selectedCategory.title,
      headerStyle: {
        backgroundColor:
          Platform.OS === 'ios' ? 'transparent' : selectedCategory.color,
      },
      headerTintColor: Platform.OS === 'ios' ? selectedCategory.color : '#fff',
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text>CategoryMeals</Text>
      <Text>{selectedCategory.title}</Text>
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

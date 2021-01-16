import React, { ReactElement } from 'react'
import { Text, View, StyleSheet } from 'react-native'

interface Props {}

const CategoryScreen = (props: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default CategoryScreen

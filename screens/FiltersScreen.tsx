import React, { ReactElement } from 'react'
import { Text, View, StyleSheet } from 'react-native'

interface Props {}

const FiltersScreen = (props: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Filters</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default FiltersScreen

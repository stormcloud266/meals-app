import React, { ReactElement } from 'react'
import { Text, View, StyleSheet, Button, FlatList } from 'react-native'
import { CATEGORIES } from '../data/test-data'

interface Props {}

const renderGridItem = (itemData) => {
  return (
    <View
      style={{
        ...styles.gridItem,
        backgroundColor: itemData.item.color,
      }}
    >
      <Text>{itemData.item.title}</Text>
    </View>
  )
}

const CategoryScreen = (props: Props): ReactElement => {
  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  )
}

const styles = StyleSheet.create({
  container: {},
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
})

export default CategoryScreen

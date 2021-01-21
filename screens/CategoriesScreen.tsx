import React, { ReactElement, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native'
import Colors from '../constants/colors'
import { CATEGORIES } from '../data/test-data'

interface Props {}

const CategoriesScreen = (props: Props): ReactElement => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: 'hello',
      headerStyle: {
        backgroundColor:
          Platform.OS === 'ios' ? 'transparent' : Colors.primaryColor,
      },
      headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : '#fff',
    })
  })

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('CategoryMeals')}
        style={{
          ...styles.gridItem,
          backgroundColor: itemData.item.color,
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

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

export default CategoriesScreen

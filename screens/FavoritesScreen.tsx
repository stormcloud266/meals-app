import React, { ReactElement } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

type NavProps = StackNavigationProp<RootStackParamList, ''>

interface Props {
  navigation: NavProps
}

const FavoritesScreen = (props: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
      <Button
        title="details"
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default FavoritesScreen

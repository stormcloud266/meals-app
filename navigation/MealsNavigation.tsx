import React, { ReactElement } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

import CategoriesScreen from '../screens/CategoriesScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FiltersScreen from '../screens/FiltersScreen'

const MainTabs = createBottomTabNavigator()
const FavoritesStack = createStackNavigator()
const CategoriesStack = createStackNavigator()
const DrawerStack = createDrawerNavigator()

const FavoritesScreenStack = (): ReactElement => (
  <FavoritesStack.Navigator>
    <FavoritesStack.Screen
      name="Favorites2"
      component={FavoritesScreen}
      options={{ title: 'Favorites' }}
    />
    <FavoritesStack.Screen name="Details" component={MealDetailsScreen} />
  </FavoritesStack.Navigator>
)

const CategoriesScreenStack = (): ReactElement => (
  <CategoriesStack.Navigator>
    <CategoriesStack.Screen
      name="Home"
      component={CategoriesScreen}
      options={{ title: 'Categories' }}
    />
  </CategoriesStack.Navigator>
)

const Tabs = (): ReactElement => (
  <MainTabs.Navigator>
    <MainTabs.Screen name="Categories" component={CategoriesScreenStack} />
    <MainTabs.Screen name="Favorites" component={FavoritesScreenStack} />
  </MainTabs.Navigator>
)

const MainTabsStack = (): ReactElement => (
  <NavigationContainer>
    <DrawerStack.Navigator>
      <DrawerStack.Screen name="Main" component={Tabs} />
      <DrawerStack.Screen name="Filters" component={FiltersScreen} />
    </DrawerStack.Navigator>
  </NavigationContainer>
)

export default MainTabsStack

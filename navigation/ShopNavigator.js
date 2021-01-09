import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen"
import Colors from "../settings/Colors"

const Stack = createStackNavigator()

const ProductStackNavigator = ()=>(
    <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:Colors.primaryColor
        },
        headerTintColor:"white"
    }}>
        <Stack.Screen name="Products" component={ProductOverviewScreen} options={{
            title:"All Products"
        }}/>
    
    </Stack.Navigator>
)

export default ShopNavigator = ()=> (
    <NavigationContainer>
        <ProductStackNavigator />
    </NavigationContainer>
)

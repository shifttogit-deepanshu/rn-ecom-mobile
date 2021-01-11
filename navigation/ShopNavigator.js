import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen"
import ProductDetailScreen from "../screens/shop/ProductDetailScreen"
import Colors from "../settings/Colors"
import CartScreen from "../screens/shop/CartScreen"

const Stack = createStackNavigator()

const ProductStackNavigator = ()=>(
    <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:Colors.primaryColor
        },
        headerTintColor:"white"
    }}>
        <Stack.Screen name="ProductOverviewScreen" component={ProductOverviewScreen} options={{
            title:"All Products"
        }}/>
        <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={({route})=>(
            {title:route.params.productTitle}
        )}/>
        <Stack.Screen name="Cart" component={CartScreen} options={({route})=>(
            {title:"Your Cart"}
        )}/>
    
    </Stack.Navigator>
)

export default ShopNavigator = ()=> (
    <NavigationContainer>
        <ProductStackNavigator />
    </NavigationContainer>
)

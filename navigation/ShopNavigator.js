import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen"
import ProductDetailScreen from "../screens/shop/ProductDetailScreen"
import Colors from "../settings/Colors"
import CartScreen from "../screens/shop/CartScreen"
import OrderScreen from "../screens/shop/OrderScreen";

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

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

const orderStackNavigator = ()=>(
    <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:Colors.primaryColor
        },
        headerTintColor:"white"}}>
        <Stack.Screen name="your orders" component={OrderScreen}/> 
    </Stack.Navigator>
)

const DrawerNavigator = ()=>(
    <Drawer.Navigator>
        <Drawer.Screen name="Products" component={ProductStackNavigator} />
        <Drawer.Screen name="orders" component={orderStackNavigator} />
    </Drawer.Navigator>
)

export default ShopNavigator = ()=> (
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
)

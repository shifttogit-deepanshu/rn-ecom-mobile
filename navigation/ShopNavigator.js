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
import {Ionicons} from "@expo/vector-icons"
import UserProductScreen from "../screens/user/UserProductsScreen"
import EditProductScreen from "../screens/user/EditProductScreen"

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const ProductStackNavigator = ()=>(
    <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:Colors.primaryColor
        },
        headerTintColor:"white",
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

const adminStackNavigaor = ()=>(
    <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:Colors.primaryColor
        },
        headerTintColor:"white"}}>
    <Stack.Screen name="Admin" component={UserProductScreen} options={{
        title:"Your Products"
    }}/>
    <Stack.Screen name="Edit Item" component={EditProductScreen} options={{
        title:"Add/Edit Product"
    }}/>
    </Stack.Navigator>
)

const DrawerNavigator = ()=>(
    <Drawer.Navigator drawerContentOptions={{
        activeTintColor:Colors.primaryColor
    }}>
        <Drawer.Screen name="Products" component={ProductStackNavigator} options={
            {
                drawerIcon: ({focused, size}) => (
                    <Ionicons
                      name="md-list"
                      size={20}
                      color={focused ? Colors.primaryColor : 'black'}
                    />),
            }
        }/>
        <Drawer.Screen name="orders" component={orderStackNavigator} options={
            {
                drawerIcon: ({focused, size}) => (
                    <Ionicons
                      name="md-cart"
                      size={20}
                      color={focused ? Colors.primaryColor : 'black'}
                    />)
            }
        }/>
        <Drawer.Screen name="Admin" component={adminStackNavigaor}  options={
            {
                drawerIcon: ({focused, size}) => (
                    <Ionicons
                      name="md-create"
                      size={20}
                      color={focused ? Colors.primaryColor : 'black'}
                    />)
            }
        }/>
    </Drawer.Navigator>
)

export default ShopNavigator = ()=> (
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
)

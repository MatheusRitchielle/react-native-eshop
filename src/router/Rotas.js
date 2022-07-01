import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Carrinho from "../screens/Carrinho/index";
import Favorito from "../screens/Favorito/index";
import Principal from "../screens/Home/index";
import Opcoes from "../screens/Opcoes/index";
import { Entypo } from "@expo/vector-icons"

const Tab = createBottomTabNavigator();


const Rotas = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopColor: 'transparent'
        },
        tabBarActiveTintColor: '#61882E',

      }} >
      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="shopping-cart" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Favorito"
        component={Favorito}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="star" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Opcoes"
        component={Opcoes}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="menu" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator >
  );
}

export default Rotas;
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Principal from "../screens/Home/index";
import Opcoes from "../screens/Opcoes/index";
import ListaUsuario from "../screens/Usuarios/ListaUsuario";
import ListaProduto from "../screens/Produtos/ListaProduto";
import Categoria from "../screens/Categoria/Categoria";

const Tab = createBottomTabNavigator();

const Rotas = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopColor: "transparent",
        },
        tabBarActiveTintColor: "#3c6255",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Pagina de Produtos"
        component={ListaProduto}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="rocket" size={size} color={color} />
          ),
          title: "Produtos",
        }}
      />
      <Tab.Screen
        name="Categoria"
        component={Categoria}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="boxes" size={size} color={color} />
          ),
          title: "Categorias",
        }}
      />
      <Tab.Screen
        name="ListaUsuario"
        component={ListaUsuario}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="users" size={size} color={color} />
          ),
          title: "Usuários",
        }}
      />
      <Tab.Screen
        name="Opcoes"
        component={Opcoes}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="menu" size={size} color={color} />
          ),
          title: "Opções",
        }}
      />
    </Tab.Navigator>
  );
};

export default Rotas;

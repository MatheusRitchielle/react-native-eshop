import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Carrinho from "../screens/Carrinho/index";
import Favorito from "../screens/Favorito/index";
import Principal from "../screens/Home/index";
import Opcoes from "../screens/Opcoes/index";

const Tab = createBottomTabNavigator();

export default function Rotas({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Principal" component={Principal} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
      <Tab.Screen name="Favorito" component={Favorito} />
      <Tab.Screen name="Opcoes" component={Opcoes} />
    </Tab.Navigator>
  );
}

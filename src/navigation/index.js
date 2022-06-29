import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "../screens/Cadastro/index";
import Categoria from "../screens/Categoria/index";
import Produto from "../screens/Produto/index";
import RecuperarSenha from "../screens/RecuperarSenha/index";
import Home from "../screens/Home/index";
import Login from "../screens/Login/index";
import Rotas from "../router/Rotas";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: { backgroundColor: "#61882E" },
            headerTintColor: "#fff",
          }}
        />

        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Recuperar Senha" component={RecuperarSenha} />
        <Stack.Screen name="Principal" component={Home} />
        <Stack.Screen name="Menu Principal" component={Rotas} />
        <Stack.Screen name="Pagina de Produtos" component={Produto} />
        <Stack.Screen name="Pagina de Categorias" component={Categoria} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "../screens/Cadastro/index";
import Categoria from "../screens/Categoria/index";
import Produto from "../screens/ListaProduto/index";
import RecuperarSenha from "../screens/RecuperarSenha/index";
import Home from "../screens/Home/index";
import Rotas from "../router/Rotas";
import Opcoes from "../screens/Opcoes";
import CadastroSucesso from "../screens/CadastroSucesso/index";
import colors from "../theme/index";
import Login from "../screens/Login";
import Usuarios from "../screens/Usuarios"

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTintColor: "#fff",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerStyle: { backgroundColor: "#d9d9d9" },
            headerTintColor: "#121212",
          }}
        />
        <Stack.Screen
          name=" "
          component={CadastroSucesso}
          options={{
            headerStyle: { backgroundColor: "#d9d9d9" },
            headerTintColor: "#121212",
          }}
        />
        <Stack.Screen
          name="Recuperar Senha"
          component={RecuperarSenha}
          options={{
            headerStyle: { backgroundColor: "#d9d9d9" },
            headerTintColor: "#121212",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Principal"
          component={Home}
          options={{
            headerStyle: { backgroundColor: "#333" },
            headerTintColor: "#C8C5C5",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Rotas"
          component={Rotas}
          options={{
            headerStyle: { backgroundColor: "#333" },
            headerTintColor: "#C8C5C5",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Pagina de Produtos"
          component={Produto}
          options={{
            headerStyle: { backgroundColor: "#333" },
            headerTintColor: "#C8C5C5",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Pagina de Categirias"
          component={Categoria}
          options={{
            headerStyle: { backgroundColor: "#333" },
            headerTintColor: "#C8C5C5",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Opcao"
          component={Opcoes}
          options={{
            headerShadowVisible: false,
            headerStyle: { backgroundColor: "#333" },
            headerTintColor: "#C8C5C5",
            headerShown: false,
          }}
        />
              <Stack.Screen
          name="Usuarios"
          component={Usuarios}
          options={{
            headerShadowVisible: false,
            headerStyle: { backgroundColor: "#333" },
            headerTintColor: "#61882E",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

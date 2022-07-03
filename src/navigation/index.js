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
import Login from "../screens/Login";
import Usuarios from "../screens/Usuarios"
import SenhaAlterada from "../screens/SenhaAlterda"
import CriarSenha from './../screens/CriarSenha/index';
import EditarUsuario from "../screens/EditarUsuario/index";

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
            headerTintColor: "#474747",
            headerTransparent: true,
            title: false
          }}
        />
        <Stack.Screen
          name="CadastroSucesso"
          component={CadastroSucesso}
          options={{
            headerStyle: { backgroundColor: "#d9d9d9" },
            headerTintColor: "#121212",
            headerTransparent: true,
            title: false
          }}
        />
        <Stack.Screen
          name="Recuperar Senha"
          component={RecuperarSenha}
          options={{
            headerStyle: { backgroundColor: "#d9d9d9" },
            headerTransparent: true,
            title: false
          }}
        />
        <Stack.Screen
          name="SenhaAlterada"
          component={SenhaAlterada}
          options={{
            headerStyle: { backgroundColor: "#d9d9d9" },
            headerTransparent: true,
            title: false
          }}
        />
        <Stack.Screen
          name="CriarSenha"
          component={CriarSenha}
          options={{
            headerStyle: { backgroundColor: "#d9d9d9" },
            headerTransparent: true,
            title: false
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
            headerStyle: { backgroundColor: "#333" },
            headerTintColor: "#C8C5C5",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Usuarios"
          component={Usuarios}
          options={{
            headerStyle: { backgroundColor: "#333" },
            headerTintColor: "#61882E",
            title: "Usuários"
          }}
        />
        <Stack.Screen
          name="EditarUsuario"
          component={EditarUsuario}
          options={{
            headerStyle: { backgroundColor: "#333" },
            headerTintColor: "#61882E",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

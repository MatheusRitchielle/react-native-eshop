import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastrarUsuario from "../screens/Cadastros/CadastrarUsuario";
import ListaProduto from "../screens/Produtos/ListaProduto";
import RecuperarSenha from "../screens/Senha/RecuperarSenha";
import Home from "../screens/Home/index";
import Rotas from "../router/Rotas";
import Opcoes from "../screens/Opcoes";
import CadastroSucesso from "../screens/Cadastros/CadastroSucesso";
import Login from "../screens/Login/index";
import SenhaAlterada from "../screens/Senha/SenhaAlterada";
import CriarNovaSenha from "./../screens/Senha/CriarNovaSenha";
import ListaUsuario from "../screens/Usuarios/ListaUsuario";
import Categoria from "../screens/Categoria/Categoria";

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
          component={CadastrarUsuario}
          options={{
            headerTintColor: "#474747",
            headerTransparent: true,
            title: false,
          }}
        />
        <Stack.Screen
          name="CadastroSucesso"
          component={CadastroSucesso}
          options={{
            headerStyle: { backgroundColor: "#d9d9d9" },
            headerTintColor: "#121212",
            headerTransparent: true,
            title: false,
          }}
        />
        <Stack.Screen
          name="Recuperar Senha"
          component={RecuperarSenha}
          options={{
            headerStyle: { backgroundColor: "#d9d9d9" },
            headerTransparent: true,
            title: false,
          }}
        />
        <Stack.Screen
          name="SenhaAlterada"
          component={SenhaAlterada}
          options={{
            headerStyle: { backgroundColor: "#d9d9d9" },
            headerTransparent: true,
            title: false,
          }}
        />
        <Stack.Screen
          name="CriarSenha"
          component={CriarNovaSenha}
          options={{
            headerStyle: { backgroundColor: "#d9d9d9" },
            headerTransparent: true,
            title: false,
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
          component={ListaProduto}
          options={{
            headerStyle: { backgroundColor: "#333" },
            headerTintColor: "#C8C5C5",
            title: "Produtos",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Categorias"
          component={Categoria}
          options={{
            headerStyle: { backgroundColor: "#333" },
            headerShown: false,
            title: "Categorias",
            headerTintColor: "#C8C5C5",
            headerTitleAlign: "center",
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
          name="ListaUsuario"
          component={ListaUsuario}
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

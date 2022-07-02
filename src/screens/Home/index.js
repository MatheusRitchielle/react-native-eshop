import React from "react";
import { Flex } from "@react-native-material/core";
import TextoDinamico from "../../components/CustomText";
import {
  ImagePagination,
  ImagesContainer,
  PaginationContainer,
  ButtonsContainer,
} from "./styles";
import { ScrollView, View } from "react-native-web";
import colors from "../../theme/index";
import PrincipalButton from "../../components/CustomButton/PrimaryButton";

const Principal = ({ navigation }) => {
  return (
    <ScrollView>
      <Flex style={{ alignSelf: "center", textAlign: "center" }}>
        <TextoDinamico mTop="5rem" fSize="35px">
          Produtos
        </TextoDinamico>
        <PaginationContainer>
          <ImagesContainer>
            <ImagePagination
              source={{
                uri: "https://images.lojanike.com.br/320x320/produto/tenis-w-air-max-97-DH8016-100-1-11638986395.jpg",
              }}
            />

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <PrincipalButton
                height="40px"
                width="90px"
                border="5px"
                bColor={`${colors.fourth}`}
              >
                <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
                  Adicionar Carrinho
                </TextoDinamico>
              </PrincipalButton>

              <PrincipalButton height="40px" width="90px" border="5px">
                <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
                  COMPRAR
                </TextoDinamico>
              </PrincipalButton>
            </View>
          </ImagesContainer>

          <ImagesContainer>
            <ImagePagination
              source={{
                uri: "https://images.lojanike.com.br/320x320/produto/tenis-w-air-max-97-DH8016-100-1-11638986395.jpg",
              }}
            />

            <ButtonsContainer>
              <PrincipalButton
                height="40px"
                width="90px"
                border="5px"
                bColor={`${colors.fourth}`}
              >
                <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
                  Adicionar Carrinho
                </TextoDinamico>
              </PrincipalButton>

              <PrincipalButton height="40px" width="90px" border="5px">
                <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
                  COMPRAR
                </TextoDinamico>
              </PrincipalButton>
            </ButtonsContainer>
          </ImagesContainer>

          <ImagesContainer>
            <ImagePagination
              source={{
                uri: "https://images.lojanike.com.br/320x320/produto/tenis-w-air-max-97-DH8016-100-1-11638986395.jpg",
              }}
            />

            <ButtonsContainer>
              <PrincipalButton
                height="40px"
                width="90px"
                border="5px"
                bColor={`${colors.fourth}`}
              >
                <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
                  Adicionar Carrinho
                </TextoDinamico>
              </PrincipalButton>

              <PrincipalButton height="40px" width="90px" border="5px">
                <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
                  COMPRAR
                </TextoDinamico>
              </PrincipalButton>
            </ButtonsContainer>
          </ImagesContainer>
          <ImagesContainer>
            <ImagePagination
              source={{
                uri: "https://images.lojanike.com.br/320x320/produto/tenis-w-air-max-97-DH8016-100-1-11638986395.jpg",
              }}
            />

            <ButtonsContainer>
              <PrincipalButton
                height="40px"
                width="90px"
                border="5px"
                bColor={`${colors.fourth}`}
              >
                <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
                  Adicionar Carrinho
                </TextoDinamico>
              </PrincipalButton>

              <PrincipalButton height="40px" width="90px" border="5px">
                <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
                  COMPRAR
                </TextoDinamico>
              </PrincipalButton>
            </ButtonsContainer>
          </ImagesContainer>
        </PaginationContainer>

        <TextoDinamico mTop="5rem" fSize="35px">
          Categorias
        </TextoDinamico>
        <PaginationContainer>
          <ImagePagination
            source={{
              uri: "https://images.lojanike.com.br/320x320/produto/tenis-w-air-max-97-DH8016-100-1-11638986395.jpg",
            }}
          />

          <ImagePagination
            source={{
              uri: "https://images.lojanike.com.br/320x320/produto/tenis-w-air-max-97-DH8016-100-1-11638986395.jpg",
            }}
          />

          <ImagePagination
            source={{
              uri: "https://images.lojanike.com.br/320x320/produto/tenis-w-air-max-97-DH8016-100-1-11638986395.jpg",
            }}
          />
        </PaginationContainer>
      </Flex>
    </ScrollView>
  );
};

export default Principal;

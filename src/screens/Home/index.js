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
            <TextoDinamico
              fColor={`${colors.fourth}`}
              fSize="28px"
              mTop="-15px"
            >
              Tenis
            </TextoDinamico>

            <ButtonsContainer>
              <PrincipalButton
                height="30px"
                width="70px"
                border="5px"
                bColor={`${colors.fourth}`}
              >
                <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
                  Adicionar Carrinho
                </TextoDinamico>
              </PrincipalButton>

              <PrincipalButton height="30px" width="70px" border="5px">
                <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
                  COMPRAR
                </TextoDinamico>
              </PrincipalButton>
            </ButtonsContainer>
          </ImagesContainer>

          <ImagesContainer>
            <ImagePagination
              source={{
                uri: "https://magicfeet.vteximg.com.br/arquivos/ids/182217-1000-1000/Agasalho-adidas-Shiny-Infantil-Multicolor.jpg?v=637540235761030000",
              }}
            />
            <TextoDinamico
              fColor={`${colors.fourth}`}
              fSize="28px"
              mTop="-15px"
            >
              Conjunto Adidas
            </TextoDinamico>

            <ButtonsContainer>
              <PrincipalButton
                height="30px"
                width="70px"
                border="5px"
                bColor={`${colors.fourth}`}
              >
                <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
                  Adicionar Carrinho
                </TextoDinamico>
              </PrincipalButton>

              <PrincipalButton height="30px" width="70px" border="5px">
                <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
                  COMPRAR
                </TextoDinamico>
              </PrincipalButton>
            </ButtonsContainer>
          </ImagesContainer>

          <ImagesContainer>
            <ImagePagination
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm5M8r6eKDDiuk527H7xNYABewUYODNPOPC-R5kbKJmasxkMKo3ruHULj1Cfy-fA7bFWc&usqp=CAU",
              }}
            />
            <TextoDinamico
              fColor={`${colors.fourth}`}
              fSize="28px"
              mTop="-15px"
            >
              Corta Vento
            </TextoDinamico>

            <ButtonsContainer>
              <PrincipalButton
                height="30px"
                width="70px"
                border="5px"
                bColor={`${colors.fourth}`}
              >
                <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
                  Adicionar Carrinho
                </TextoDinamico>
              </PrincipalButton>

              <PrincipalButton height="30px" width="70px" border="5px">
                <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
                  COMPRAR
                </TextoDinamico>
              </PrincipalButton>
            </ButtonsContainer>
          </ImagesContainer>
          <ImagesContainer>
            <ImagePagination
              source={{
                uri: "https://wantedind.com/wp-content/uploads/2020/10/detalhesite_0000_DETALHES-23-600x600.jpg",
              }}
            />
            <TextoDinamico
              fColor={`${colors.fourth}`}
              fSize="28px"
              mTop="-15px"
            >
              Exclusivo
            </TextoDinamico>

            <ButtonsContainer>
              <PrincipalButton
                height="30px"
                width="70px"
                border="5px"
                bColor={`${colors.fourth}`}
              >
                <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
                  Adicionar Carrinho
                </TextoDinamico>
              </PrincipalButton>

              <PrincipalButton height="30px" width="70px" border="5px">
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
              uri: "https://images.lojanike.com.br/hotsitevitrine/ni/0/1656698524/assets/img/pegasus-feminino-mobile.jpg",
            }}
          />

          <ImagePagination
            source={{
              uri: "https://images.lojanike.com.br/hotsitevitrine/ni/0/1656698524/assets/img/1-carrossel-tops.jpg",
            }}
          />

          <ImagePagination
            source={{
              uri: "https://images.lojanike.com.br/hotsitevitrine/ni/0/1656698524/assets/img/carrossel-02-08-03.jpg",
            }}
          />
        </PaginationContainer>
      </Flex>
    </ScrollView>
  );
};

export default Principal;

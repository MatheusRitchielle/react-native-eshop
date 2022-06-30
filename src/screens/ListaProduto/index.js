import React from "react";
import { CustomContainer } from "../../components/CustomContainer/styles";

const Lista = [
    {
      id:1,
      produto: "produto a",
      estoque: "7 un",
      preco: "R$ 50",
    },
    {
      id:1,
      produto: "produto b",
      estoque: "10 un",
      preco: "R$ 30",
    },
    {
      id: 3,
      produto: "produto c",
      estoque: "10 un",
      preco: "R$ 70",
    }
  ];
  
  const Item = ({produto,estoque, preco}) => (
    <View>
      <Text>
        {produto}
      </Text>
      <Text>
        {estoque}
      <Text>
      </Text>
        {preco}
      </Text>
    </View>
  );
  
  const ListaProduto = () => {
    const itemRenderizado = ({item}) => (
      <Item  produto={item.produto}
      estoque={item.estoque}
      preco={item.preco} />
    );
  
    return (
        <CustomContainer>
      <FlatList 
      data={Lista}
      renderItem={itemRenderizado} 
      keyExtractor={(item) => item.id} />
        </CustomContainer>
    )
  };

  export default ListaProduto;
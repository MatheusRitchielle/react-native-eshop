import { useState } from "react";

export const getAll = () => {
  const [category, setCategory] = useStateate(null);
  const [resposta, setResposta] = useState(null);
  const [nome, setNome] = useState("");

  axios
    .get("https://reactnative.herokuapp.com/reactnative/")
    .then((response) => {
      setCategory(response.data);
    });
};

export const postCategory = (e) => {
  e.preventDefault();
  const postBodyRequest = {
    nome,
    categoria,
  };
  axios
    .post("https://reactnative.herokuapp.com/reactnative/", postBodyRequest)
    .then((response) => {
      setResposta(response);
    });
};

export const deleteCategory = async (id) => {
  const delBodyRequest = {
    id,
    categoria,
  };
  await axios
    .delete("https://reactnative.herokuapp.com/reactnative/", {
      data: delBodyRequest,
    })
    .then((response) => {
      setResposta(response);
      setCategory((oldList) => oldList.filter((item) => item.id));
    });
};

export const updateCategory = async (item) => {
  const putBodyRequest = {
    id: displayForm.id,
    categoria: item.nome,
  };
  await axios
    .put("https://reactnative.herokuapp.com/reactnative/", putBodyRequest)
    .then((response) => {
      setResposta(response);
      console.log(response);
      setCategory((oldList) =>
        oldList.map((item) => (item.id === displayForm.id ? response : item))
      );
    });
};

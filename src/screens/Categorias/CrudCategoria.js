const postProducts = (e) => {
  e.preventDefault();
  const postBodyRequest = {
    id,
    nome,
    categoriaId,
    descricao,
    qtdEstoque,
    foto,
    preco,
  };
  axios
    .post("https://reactnative.herokuapp.com/reactnative/", postBodyRequest)
    .then((response) => {
      setResposta(response);
    });
};

export const postCategory = (e) => {
  e.preventDefault();
  const postBodyRequest = {
    nome,
    foto,
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


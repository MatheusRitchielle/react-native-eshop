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

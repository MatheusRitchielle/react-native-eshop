export const postProduto = (e) => {
    e.preventDefault();
    const postBodyRequest = {
        categoriaId,
        descricao,
        foto,
        nome,
        preco,
        qtdEstoque

    };
    axios
        .post("https://reactnative.herokuapp.com/reactnative/", postBodyRequest)
        .then((response) => {
            setResposta(response);
        });
};

export const deleteProduto = async (id) => {
    const delBodyRequest = {
        id,
        categoria,
    };
    await axios
        .delete("https://reactnative.herokuapp.com/reactnative/usuario/{id}", {
            data: delBodyRequest,
        })
        .then((response) => {
            setResposta(response);
            setUser((oldList) => oldList.filter((item) => item.id));
        });
};

export const updateProduto = async (item) => {
    const putBodyRequest = {
        id: displayForm.id,
        categoria: item.nome,
    };
    await axios
        .put("https://reactnative.herokuapp.com/reactnative/", putBodyRequest)
        .then((response) => {
            setResposta(response);
            console.log(response);
            setUser((oldList) =>
                oldList.map((item) => (item.id === displayForm.id ? response : item))
            );
        });
};

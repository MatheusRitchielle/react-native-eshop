export const postUser = (e) => {
    e.preventDefault();
    const postBodyRequest = {
        ativo,
        cpf,
        dtNascimento,
        foto,
        login,
        nome,
        senha
    };
    axios
        .post("https://reactnative.herokuapp.com/reactnative/", postBodyRequest)
        .then((response) => {
            setResposta(response);
        });
};

export const deleteUser = async (id) => {
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
            setUser((oldList) => oldList.filter((item) => item.id));
        });
};

export const updateUser = async (item) => {
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

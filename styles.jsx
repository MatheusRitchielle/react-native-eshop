import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #D9D9D9;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    padding: 10px;
`;

export const InnerText = styled.TextInput`
    margin-top: 10px;
    height: 50px;
    width: 270px;
    font-size: 16px;
    padding-left: 15px;
    background-color: #ABA7A7;
    align-self: center;
    border-radius: 20px;
`;

export const Text = styled.Text`
    color: #ff0000;
    font-size: 20px;
    padding-bottom: 8px;
`;

export const PressableLogin = styled.Pressable`
    height: 50px;
    width: 120px;
    background-color: #61882E;
    align-self: center;
    margin-top: 22px;
    border-radius: 50;
    font-weight: bold;
    align-items: center;
    justify-content: center;
`;
import { Ionicons } from "@expo/vector-icons";
import { InputContainer, WrapperInputEye } from "./styled";
import colors from "../../theme/index";

const InputEye = ({ placeholder }) => {
  return (
    <WrapperInputEye>
      <InputContainer placeholder={placeholder} />
      <Ionicons
        name="eye"
        size={24}
        color={`${colors.verde}`}
        style={{
          position: "absolute",
          marginStart: 240,
          alignSelf: "center",
          marginTop: "18px",
        }}
      />
    </WrapperInputEye>
  );
};

export default InputEye;

import React from "react";
import { Button, Text, View } from "react-native";

import useDispatch from "../../redux/hooks/useDispatch";
import useSelector from "../../redux/hooks/useSelector";

import { AuthState } from "../../redux/store/modules/auth";
import { login, logout } from "../../redux/store/modules/auth/actions";

const Account: React.FC = () => {
  const dispatch = useDispatch();
  const auth: AuthState = useSelector((state) => state.auth);

  const handleAuth = () => {
    if (!auth.isLoggedIn) {
      dispatch(
        login({
          name: "Jean",
          email: "jean@gmail.com",
        })
      );
    } else {
      dispatch(logout());
    }
  };

  return (
    <View>
      <Text>Usuário: {auth.name}</Text>
      <Button
        onPress={handleAuth}
        title={auth.isLoggedIn ? "Logout" : "Login"}
      />
    </View>
  );
};

export default Account;

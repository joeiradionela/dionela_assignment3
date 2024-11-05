import { View, StyleSheet } from "react-native";
import { Avatar, Text, TextInput, Button } from "react-native-paper";
import styles from "../styles/styles";
import { useState } from "react";

const Login = ({ setCurrentPage }) => {
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ ...styles.section, ...styles.logoBox }}>
        <Avatar.Image style={{ backgroundColor: 'transparent', bandWidth: 3 }} source={require("../assets/avatar.png")} size={180} />
        <Text variant="headlineMedium" style={{ marginTop: 10, color: 'indigo' }}>Pet Care Shop</Text>
      </View>
      <View style={{ ...styles.section, marginTop: 20 }}>
        <TextInput
          textContentType="emailAddress"
          label="Email"
          mode="outlined"
          placeholder="Email"
          style={styles.input}
          left={<TextInput.Icon icon="email" size={18} />}
        />
        <TextInput
          label="Password"
          mode="outlined"
          placeholder="Password"
          style={styles.input}
          left={<TextInput.Icon icon="key" size={18} />}
          right={<TextInput.Icon 
            onPress={() => setTogglePassword(!togglePassword)}
            icon={togglePassword ? "eye" : "eye-off"} 
            size={18} 
          />}
          secureTextEntry={!togglePassword}
        />
      </View>
      <View style={{ ...styles.section, marginTop: 20 }}>
        <Button onPress={() => console.log("login")} mode="contained" style={styles.button}>
          Login
        </Button>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
          <Text>Don't have an account yet?</Text>
        </View>
        <Button onPress={() => setCurrentPage('registration')} mode="contained-tonal" textColor="indigo" style={styles.button}>
          Register Here
        </Button>
        <Button onPress={() => setCurrentPage('passwordRecovery')} style={styles.button}>
          Forgot Password?
        </Button>
      </View>
    </View>
  );
};

export default Login;

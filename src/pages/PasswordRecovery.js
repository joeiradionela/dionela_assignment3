import { View, StyleSheet, Image } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import styles from "../styles/styles";
import { useState } from "react";

const PasswordRecovery = ({ setCurrentPage }) => {
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Image style={{ backgroundColor: 'transparent', width: 350, height: 200 }} source={require("../assets/password.png")} />
        <View style={{ alignItems: 'center' }}>
          <Text variant="headlineMedium" style={{ marginTop: 20, color: 'indigo' }}>Forgot Password</Text>
          <Text>Create a strong password</Text>
        </View>
      </View>
      <View style={{ ...styles.section, marginTop: 20 }}>
      
        <TextInput
          label="New Password"
          mode="flat"
          placeholder="New Password"
          style={{ ...styles.input, backgroundColor: 'transparent', marginHorizontal: 30 }}
          left={<TextInput.Icon icon="lock" size={18} />}
          right={<TextInput.Icon 
            onPress={() => setTogglePassword(!togglePassword)}
            icon={togglePassword ? "eye" : "eye-off"} 
            size={18} 
          />}
          secureTextEntry={!togglePassword}
        />
        <TextInput
          label="Confirm Password"
          mode="flat"
          placeholder="Confirm Password"
          style={{ ...styles.input, backgroundColor: 'transparent', marginHorizontal: 30 }}
          left={<TextInput.Icon icon="lock-check" size={18} />}
          right={<TextInput.Icon 
            onPress={() => setTogglePassword(!togglePassword)}
            icon={togglePassword ? "eye" : "eye-off"} 
            size={18} 
          />}
          secureTextEntry={!togglePassword}
        />
      </View>
      <View style={{ ...styles.section, marginTop: 20 }}>
        <Button onPress={() => console.log("Password reset")} mode="contained" style={{ ...styles.button, marginHorizontal: 25 }}>
          Reset Password
        </Button>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
          <Text>Remember your password? </Text>
          <Button onPress={() => setCurrentPage('login')} mode="text" textColor="indigo">
            Login here
          </Button>
        </View>
      </View>
    </View>
  );
};

export default PasswordRecovery;

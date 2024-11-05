import { View, StyleSheet, Image } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import styles from "../styles/styles";
import { useState } from "react";

const Registration = ({ setCurrentPage }) => {
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Image style={{ backgroundColor: 'transparent', width: 330, height: 200 }} source={require("../assets/reg.png")} />
        <View style={{ alignItems: 'center' }}>
          <Text variant="headlineMedium" style={{ marginTop: 20, color: 'indigo' }}>Let's Get Started</Text>
          <Text>Create an account to get all features</Text>
        </View>
      </View>
      <View style={{ ...styles.section, marginTop: 20 }}>
        <TextInput
          textContentType="name"
          label="Enter Name"
          mode="flat"
          placeholder="Enter Name"
          style={{ ...styles.input, backgroundColor: 'transparent', marginHorizontal: 30 }}
          left={<TextInput.Icon icon="account" size={18} />}
        />
        <TextInput
          textContentType="emailAddress"
          label="Create Email"
          mode="flat"
          placeholder="Enter Email"
          style={{ ...styles.input, backgroundColor: 'transparent', marginHorizontal: 30 }}
          left={<TextInput.Icon icon="email" size={18} />}
        />
        <TextInput
          label="Create Password"
          mode="flat"
          placeholder="Enter Password"
          style={{ ...styles.input, backgroundColor: 'transparent', marginHorizontal: 30 }}
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
        <Button onPress={() => console.log("continue")} mode="contained" style={{ ...styles.button, marginHorizontal: 25 }}>
          Continue
        </Button>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            By clicking 'Continue', you agree to our 
            <Text style={styles.link}> Terms & Conditions. </Text>
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
          <Text>Already have an account? </Text>
          <Button onPress={() => setCurrentPage('login')} mode="text" textColor="indigo">
            Login here
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Registration;

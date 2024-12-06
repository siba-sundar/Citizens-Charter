import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Login = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isAdmin, setIsAdmin] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.language}>
          <Picker selectedValue={selectedLanguage} onValueChange={setSelectedLanguage} style={styles.picker} dropdownIconColor="#000">
            <Picker.Item label="English" value="English" />
            <Picker.Item label="Hindi" value="Hindi" />
            <Picker.Item label="Spanish" value="Spanish" />
            <Picker.Item label="French" value="French" />
          </Picker>
        </View>

        <View style={styles.topImgContainer}>
          <Image source={require('../../assets/opening_top.png')} style={styles.topImg} />
          <Image source={require('../../assets/login-image.png')} style={styles.mainImg} />
          <View style={styles.textContainer}>
            <Text style={styles.heading}>LogIn Now</Text>
            <Text style={styles.subHeading}>Please enter your details</Text>
          </View>

          <View style={styles.toggleContainer}>
            <View style={styles.toggleWrapper}>
              <TouchableOpacity style={[styles.toggleOption, isAdmin && styles.selected]} onPress={() => setIsAdmin(prev => !prev)}>
                <Text style={[styles.toggleText, isAdmin && styles.selectedText]}>User</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.toggleOption, !isAdmin && styles.selected]} onPress={() => setIsAdmin(prev => !prev)}>
                <Text style={[styles.toggleText, !isAdmin && styles.selectedText]}>Admin</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.slider, isAdmin && { left: '50%' }]} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Phone number" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="phone-pad" />
            <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <TouchableOpacity style={styles.loginButton}  onPress={() => navigation.navigate('DrawerNavigator')}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grayLine}></View>

          <View style={styles.loginContainer}>
            <Text style={styles.normalText}>Don't have an account?</Text>
            <Pressable onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.linkText}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1 },
  language: { position: 'absolute', top: 35, right: 20, borderWidth: 1, borderColor: '#000', borderRadius: 20, backgroundColor: 'transparent', overflow: 'hidden' },
  picker: { height: 55, width: 150 },
  topImgContainer: { flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 70 },
  topImg: { width: 40, height: 60, resizeMode: 'contain' },
  mainImg: { width: 500, height: 250, resizeMode: 'contain', marginTop: 30 },
  textContainer: { alignItems: 'center', marginTop: 20, paddingHorizontal: 20 },
  heading: { fontSize: 28, fontWeight: '800', textAlign: 'center' },
  subHeading: { fontSize: 16, textAlign: 'center', marginTop: 10, lineHeight: 26 },
  toggleContainer: { flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'center', position: 'relative', width: '50%', height: 50 },
  toggleWrapper: { flexDirection: 'row', backgroundColor: '#f0f0f0', borderRadius: 50, overflow: 'hidden', width: '100%', borderWidth: 1 },
  toggleOption: { flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#ddd', paddingVertical: 5 },
  toggleText: { fontSize: 16, color: '#000' },
  selected: { backgroundColor: '#d32f2f' },
  selectedText: { color: '#fff' },
  slider: { position: 'absolute', bottom: 0, width: '50%', height: '100%', backgroundColor: 'transparent', borderRadius: 20, transition: 'left 0.3s ease' },
  inputContainer: { width: '80%', marginTop: 10, paddingHorizontal: 10, alignItems: 'center' },
  input: { height: 50, width: "100%", borderWidth: 1, borderRadius: 50, marginBottom: 20, paddingHorizontal: 10, borderColor: "#000000" },
  loginButton: { backgroundColor: '#d32f2f', height: 50, width: "50%", justifyContent: 'center', alignItems: 'center', borderRadius: 50 },
  loginButtonText: { color: '#fff', fontSize: 16 },
  grayLine: { height: 1, backgroundColor: '#E7E7E7', width: '85%', alignSelf: 'center', marginVertical: 20 },
  loginContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: 0 },
  normalText: { fontSize: 16, color: '#000', fontWeight: 500 },
  linkText: { fontSize: 16, color: '#CD0201', marginLeft: 5, fontWeight: 600 },
});

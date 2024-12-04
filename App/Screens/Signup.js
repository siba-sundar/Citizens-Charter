import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Signup({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.language}>
          <Picker selectedValue={selectedLanguage} onValueChange={setSelectedLanguage} style={styles.picker}>
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

          <View style={styles.options}>
            <Pressable style={({ pressed }) => [styles.userButton, pressed && styles.pressed]} onPress={() => navigation.navigate('UserSignup1')}>
              <Text style={styles.userButtonText}>SignUp as User</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [styles.adminButton, pressed && styles.pressed]} onPress={() => alert('Admin signup clicked..')}>
              <Text style={styles.adminButtonText}>SignUp as Admin</Text>
            </Pressable>
          </View>

          <View style={styles.grayLine} />
          
          <View style={styles.loginContainer}>
            <Text style={styles.normalText}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.linkText}>LogIn</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  language: { position: 'absolute', top: 35, right: 20, borderWidth: 1, borderRadius: 20, overflow: 'hidden' },
  picker: { height: 55, width: 150 },
  topImgContainer: { flex: 1, alignItems: 'center', paddingTop: 70 },
  topImg: { width: 40, height: 60, resizeMode: 'contain' },
  mainImg: { width: 500, height: 280, resizeMode: 'contain', marginTop: 30 },
  textContainer: { alignItems: 'center', marginTop: 20, paddingHorizontal: 20 },
  heading: { fontSize: 28, fontWeight: '800', textAlign: 'center' },
  subHeading: { fontSize: 16, textAlign: 'center', marginTop: 10, lineHeight: 26 },
  options: { flexDirection: 'column', gap: 10, marginVertical: 20 },
  userButton: { backgroundColor: '#CD0201', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 50, borderWidth: 4, borderColor: '#CD0201', elevation: 3 },
  userButtonText: { color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 },
  adminButton: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#000', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 50, elevation: 3 },
  adminButtonText: { fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
  pressed: { backgroundColor: '#fff', borderWidth: 1, borderColor: "#000" },
  grayLine: { height: 1, backgroundColor: '#E7E7E7', width: '85%', alignSelf: 'center', marginVertical: 20 },
  loginContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: 20 },
  normalText: { fontSize: 16, color: '#000', fontWeight: 500 },
  linkText: { fontSize: 16, color: '#CD0201', marginLeft: 5, fontWeight: 600 },
});

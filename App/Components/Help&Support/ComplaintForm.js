import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from '@react-native-picker/picker';

export default function ComplaintForm({ onCancel }) {
  const [step, setStep] = useState(1); // Step 1: Complaint Details, Step 2: Applicant Details
  const [formData, setFormData] = useState({
    category: "",
    transactionNumber: "",
    type: "",
    transactionDate: "",
    bookingDetails: "",
    description: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    country: "",
    pinCode: "",
    city: "",
    state: "",
    mobile: "",
    document: null,
  });

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);
  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    onCancel(); // Navigate back to the complaint list
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const renderComplaintDetails = () => (
    <ScrollView style={styles.formContainer}>
      <Text style={styles.heading}>Complaint Details</Text>
      <Text style={styles.label}>Category</Text>
      <Picker
        selectedValue={formData.category}
        onValueChange={(value) => handleInputChange("category", value)}
        style={styles.picker}
      >
        <Picker.Item label="--Select--" value="" />
        <Picker.Item label="Services" value="Services" />
      </Picker>

      <Text style={styles.label}>Transaction Number</Text>
      <TextInput
        style={styles.input}
        value={formData.transactionNumber}
        onChangeText={(value) => handleInputChange("transactionNumber", value)}
        placeholder="Enter transaction number"
      />

      <Text style={styles.label}>Type</Text>
      <Picker
        selectedValue={formData.type}
        onValueChange={(value) => handleInputChange("type", value)}
        style={styles.picker}
      >
        <Picker.Item label="--Select--" value="" />
      </Picker>

      <Text style={styles.label}>Transaction Date</Text>
      <TextInput
        style={styles.input}
        value={formData.transactionDate}
        onChangeText={(value) => handleInputChange("transactionDate", value)}
        placeholder="Enter transaction date"
      />

      <Text style={styles.label}>Booking Details</Text>
      <TextInput
        style={styles.input}
        value={formData.bookingDetails}
        onChangeText={(value) => handleInputChange("bookingDetails", value)}
        placeholder="Enter booking details"
      />

      <Text style={styles.label}>Description (Maximum 500 characters)</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={formData.description}
        onChangeText={(value) => handleInputChange("description", value)}
        multiline
        placeholder="Enter description"
      />

      <Text style={styles.note}>
        Note: In case of International Articles, kindly provide postage,
        weight, contents, value of contents, and mode of service (Air/SAL/Surface).
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  const renderApplicantDetails = () => (
    <ScrollView style={styles.formContainer}>
      <Text style={styles.heading}>Sender/Applicant Details</Text>

      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={formData.firstName}
        onChangeText={(value) => handleInputChange("firstName", value)}
        placeholder="Enter first name"
      />

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={formData.lastName}
        onChangeText={(value) => handleInputChange("lastName", value)}
        placeholder="Enter last name"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
        placeholder="Enter email"
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={formData.address}
        onChangeText={(value) => handleInputChange("address", value)}
        placeholder="Enter address"
      />

      <Text style={styles.label}>Country</Text>
      <Picker
        selectedValue={formData.country}
        onValueChange={(value) => handleInputChange("country", value)}
        style={styles.picker}
      >
        <Picker.Item label="--Select--" value="" />
      </Picker>

      <Text style={styles.label}>PIN Code</Text>
      <TextInput
        style={styles.input}
        value={formData.pinCode}
        onChangeText={(value) => handleInputChange("pinCode", value)}
        placeholder="Enter PIN code"
      />

      <Text style={styles.label}>City/District</Text>
      <TextInput
        style={styles.input}
        value={formData.city}
        onChangeText={(value) => handleInputChange("city", value)}
        placeholder="Enter city/district"
      />

      <Text style={styles.label}>State/Union Territory</Text>
      <TextInput
        style={styles.input}
        value={formData.state}
        onChangeText={(value) => handleInputChange("state", value)}
        placeholder="Enter state/union territory"
      />

      <Text style={styles.label}>Mobile</Text>
      <TextInput
        style={styles.input}
        value={formData.mobile}
        onChangeText={(value) => handleInputChange("mobile", value)}
        placeholder="Enter mobile number"
      />

      <Text style={styles.label}>Upload Supporting Document</Text>
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadText}>Choose File</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.backButton]} onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  return step === 1 ? renderComplaintDetails() : renderApplicantDetails();
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingBottom: 0,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderWidth: 1,
    backgroundColor:"#fff",
    borderColor: "#000",
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  textArea: {
    height: 100,
    borderRadius:10,
  },
  picker: {
    height: 60,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  note: {
    fontSize: 12,
    color: "#555",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingBottom: 40,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#ccc",
  },
  nextButton: {
    backgroundColor: "#007bff",
  },
  backButton: {
    backgroundColor: "#007bff",
  },
  submitButton: {
    backgroundColor: "#28a745",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  uploadButton: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    marginBottom: 15,
    alignItems: "center",
  },
  uploadText: {
    color: "#555",
  },
});

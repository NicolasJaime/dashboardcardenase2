import "@/global.css"
import React from 'react'
import { Image, Text, View } from 'react-native'
import IconButton from "./IconButton"
import CustomText from "./ui/CustomText"
import { Linking } from "react-native" 

const ProfileDetails = () => {
  return (
    <View className="flex justify-center items-center h-1/2 w-screen bg-[#f5f5dc]">
      <Image
        source={require('../assets/images/dinosaurio.png.jpg')}
        className="max-h-36 max-w-36 rounded-full"
      />
    <CustomText value="Estudiante" variant="title"></CustomText>
    <CustomText value="Jaime Cárdenas" variant="subtitle2"></CustomText>
      <View className="flex-row justify-center mt-6 gap-6">
        <IconButton icon="logo-instagram" pulsar={() => Linking.openURL("https://www.instagram.com/_jaime.cardenas_/")} color="#FF69B480"></IconButton>
        <IconButton icon="logo-whatsapp" pulsar={() => Linking.openURL("https://web.whatsapp.com/")} color="lightgreen"></IconButton>
        <IconButton icon="logo-facebook" pulsar={() => Linking.openURL("https://www.facebook.com/")} color="blue"></IconButton>
        <IconButton icon="logo-linkedin" pulsar={() => Linking.openURL("https://www.linkedin.com/")} color="lightblue"></IconButton>
      </View>

    </View>
  )
}

export default ProfileDetails
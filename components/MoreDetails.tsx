import React from 'react'
import { View } from 'react-native'
import CustomText from './ui/CustomText'
import IconButton from './ui/IconButton'

const MoreDetails = () => {
  return (
    <View className='h-1/2 w-screen bg-[#AEC6CF] rounded-t-3xl p-6 flex flex-col justify-start gap-4'>
      <CustomText value="skill" variant="subtitle" ></CustomText>
      <View className="flex-row justify-center items-center gap-4">
        <IconButton icon="airplane" pulsar={() => console.log("Instagram")} color="black"></IconButton>
        <IconButton icon="accessibility" pulsar={() => console.log("Whatsapp")} color="orange"></IconButton>
        <IconButton icon="american-football" pulsar={() => console.log("Facebook")} color="red"></IconButton>
        <IconButton icon="apps" pulsar={() => console.log("Linkedin")} color="green"></IconButton>
      </View>
      <CustomText value="Profesión" variant="subtitle"></CustomText>
    </View>
  )
}

export default MoreDetails
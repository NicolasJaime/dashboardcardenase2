import React from 'react'
import { View } from 'react-native'
import CustomText from './ui/CustomText'
import IconButton from './ui/IconButton'

const MoreDetails = () => {
  return (
    <View className='h-1/2 w-screen bg-[#AEC6CF] rounded-t-3xl p-6 flex flex-col justify-start gap-4'>
      <CustomText value="skill" variant="subtitle" ></CustomText>
      <View className="flex-row justify-center items-center gap-4">
        <IconButton icon="music" pulsar={() => console.log("Musica")} color="purple"></IconButton>
        <IconButton icon="volleyball-ball" pulsar={() => console.log("Voleibol")} color="blue"></IconButton>
        <IconButton icon="basketball-ball" pulsar={() => console.log("Basquet")} color="orange"></IconButton>
        <IconButton icon="compass" pulsar={() => console.log("Direccion")} color="black"></IconButton>
      </View>
      <View className='flex flex-col gap-1'>
        <CustomText value="Profesión" variant="subtitle" />
        <CustomText value="Estudiante" variant="text" />
      </View>
      <View className='flex flex-col gap-1'>
        <CustomText value="Experiencia" variant="subtitle"></CustomText>
        <View className='h-10 w-full bg-[#0f546d] rounded-full p-1 flex flex-col justify-start gap-4 '>
          <CustomText value="Ninguna" variant="text"></CustomText>
        </View>
      </View>
    </View>
    
  )
}

export default MoreDetails
import { Image, Text, View } from "react-native";
import "../global.css";
import "@/global.css"
export default function Index() {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <View className="flex justify-center">
        <Image className="max-h-24 max-w-24 rounded-full" source={require('../assets/images/icon.png')} />
      </View>
      <Text className="text-2xl font-bold">
        Urgiles
      </Text>
      <Text className="font-bold text-stone-600">
        Emilia 
      </Text>
      
    </View>
  );
}

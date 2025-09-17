import { Text, View } from "react-native";
import "../global.css"
import "ProfileDetails"
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
        <View className="flex justify-center items-center white w-screen h-screen">
        <ProfileDetails></ProfileDetails>
        </View>
    </View>
  );
}

import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

export function Meals() {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("home")
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <Text>Meals</Text>

      <TouchableOpacity onPress={handlePress}>
        <Text>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  )
}
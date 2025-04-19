import { Text, View } from "react-native";

function MealDetailScreen({ route }) {
  const { mealId } = route.params;

  return (
    <View>
      <Text>Meal Detail Screen</Text>
      <Text>Meal ID: {mealId}</Text>
    </View>
  );
}

export default MealDetailScreen;
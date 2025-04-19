import { Image, Text, View } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealDetailScreen({ route }) {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  console.log(selectedMeal.imageUrl)

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

export default MealDetailScreen;

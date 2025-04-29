import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoriteScreen() {
  // const FavoritesMealsCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state) => state.favoritesMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
      </View>
    )
  }

  return (
    <MealsList items={favoriteMeals}/>
  );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'white',
  },
});
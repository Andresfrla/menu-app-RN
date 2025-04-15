import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data'; 

function renderCategoryItem (item){

}

function CategoryScreen() {
    

  return (
    <div>
      <h1>Category Screen</h1>
      <p>This is the category screen.</p>
      <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={<></>}/>
    </div>
  );
}

export default CategoryScreen;
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feed, Article } from "../screens";

const Drawer = createDrawerNavigator();

function ArticleWithDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default ArticleWithDrawer;
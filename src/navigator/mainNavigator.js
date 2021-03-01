import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator } from "react-navigation-drawer"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen4210055Navigator from "../features/BlankScreen4210055/navigator"
import BlankScreen2210053Navigator from "../features/BlankScreen2210053/navigator"

/**
 * new navigators can be imported here
 */ import BizsourceItem46210057 from "../features/BizsourceItem46210057/navigator"

const AppNavigator = {
  BizsourceItem46210057: { screen: BizsourceItem46210057 },

  //@BlueprintNavigationInsertion
  BlankScreen4210055: { screen: BlankScreen4210055Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator
  },

  {
    contentComponent: SideMenu
  }
)

const AppContainer = createAppContainer(DrawerAppNavigator)

export default AppContainer

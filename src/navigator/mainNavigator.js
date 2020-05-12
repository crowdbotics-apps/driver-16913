import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile43743Navigator from '../features/UserProfile43743/navigator';
import Maps43724Navigator from '../features/Maps43724/navigator';
import Settings43702Navigator from '../features/Settings43702/navigator';
import Settings43687Navigator from '../features/Settings43687/navigator';
import NotificationList43686Navigator from '../features/NotificationList43686/navigator';
import Maps43685Navigator from '../features/Maps43685/navigator';
import UserProfile43635Navigator from '../features/UserProfile43635/navigator';
import Maps43616Navigator from '../features/Maps43616/navigator';
import Settings43594Navigator from '../features/Settings43594/navigator';
import Settings43579Navigator from '../features/Settings43579/navigator';
import NotificationList43578Navigator from '../features/NotificationList43578/navigator';
import Maps43577Navigator from '../features/Maps43577/navigator';
import UserProfile43576Navigator from '../features/UserProfile43576/navigator';
import Maps43557Navigator from '../features/Maps43557/navigator';
import Settings43535Navigator from '../features/Settings43535/navigator';
import Settings43520Navigator from '../features/Settings43520/navigator';
import NotificationList43519Navigator from '../features/NotificationList43519/navigator';
import Maps43518Navigator from '../features/Maps43518/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile43743: { screen: UserProfile43743Navigator },
Maps43724: { screen: Maps43724Navigator },
Settings43702: { screen: Settings43702Navigator },
Settings43687: { screen: Settings43687Navigator },
NotificationList43686: { screen: NotificationList43686Navigator },
Maps43685: { screen: Maps43685Navigator },
UserProfile43635: { screen: UserProfile43635Navigator },
Maps43616: { screen: Maps43616Navigator },
Settings43594: { screen: Settings43594Navigator },
Settings43579: { screen: Settings43579Navigator },
NotificationList43578: { screen: NotificationList43578Navigator },
Maps43577: { screen: Maps43577Navigator },
UserProfile43576: { screen: UserProfile43576Navigator },
Maps43557: { screen: Maps43557Navigator },
Settings43535: { screen: Settings43535Navigator },
Settings43520: { screen: Settings43520Navigator },
NotificationList43519: { screen: NotificationList43519Navigator },
Maps43518: { screen: Maps43518Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

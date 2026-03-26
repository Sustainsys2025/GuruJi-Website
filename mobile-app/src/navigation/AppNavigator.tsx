import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { colors } from '../theme/colors';
import { fontFamilies } from '../theme/typography';
import type {
  RootTabParamList,
  HomeStackParamList,
  AboutStackParamList,
  ScheduleStackParamList,
  GalleryStackParamList,
  ContactStackParamList,
} from './types';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import GalleryListScreen from '../screens/GalleryListScreen';
import GalleryDetailScreen from '../screens/GalleryDetailScreen';
import BooksScreen from '../screens/BooksScreen';
import ContactScreen from '../screens/ContactScreen';

const Tab = createBottomTabNavigator<RootTabParamList>();

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const AboutStack = createNativeStackNavigator<AboutStackParamList>();
const ScheduleStack = createNativeStackNavigator<ScheduleStackParamList>();
const GalleryStack = createNativeStackNavigator<GalleryStackParamList>();
const ContactStack = createNativeStackNavigator<ContactStackParamList>();

const screenOptions = {
  headerStyle: {
    backgroundColor: colors.cream[50],
  },
  headerTintColor: colors.brown[600],
  headerTitleStyle: {
    fontFamily: fontFamilies.heading,
    fontSize: 16,
    letterSpacing: 0.5,
  },
  headerShadowVisible: false,
};

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

function AboutStackScreen() {
  return (
    <AboutStack.Navigator screenOptions={{ headerShown: false }}>
      <AboutStack.Screen name="About" component={AboutScreen} />
    </AboutStack.Navigator>
  );
}

function ScheduleStackScreen() {
  return (
    <ScheduleStack.Navigator screenOptions={{ headerShown: false }}>
      <ScheduleStack.Screen name="Schedule" component={ScheduleScreen} />
    </ScheduleStack.Navigator>
  );
}

function GalleryStackScreen() {
  return (
    <GalleryStack.Navigator screenOptions={screenOptions}>
      <GalleryStack.Screen
        name="GalleryList"
        component={GalleryListScreen}
        options={{ headerShown: false }}
      />
      <GalleryStack.Screen
        name="GalleryDetail"
        component={GalleryDetailScreen}
        options={{ title: 'Gallery' }}
      />
      <GalleryStack.Screen
        name="Books"
        component={BooksScreen}
        options={{ title: 'Books & Guides' }}
      />
    </GalleryStack.Navigator>
  );
}

function ContactStackScreen() {
  return (
    <ContactStack.Navigator screenOptions={{ headerShown: false }}>
      <ContactStack.Screen name="Contact" component={ContactScreen} />
    </ContactStack.Navigator>
  );
}

type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: IoniconsName;
            switch (route.name) {
              case 'HomeTab':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'AboutTab':
                iconName = focused ? 'heart' : 'heart-outline';
                break;
              case 'ScheduleTab':
                iconName = focused ? 'calendar' : 'calendar-outline';
                break;
              case 'GalleryTab':
                iconName = focused ? 'images' : 'images-outline';
                break;
              case 'ContactTab':
                iconName = focused ? 'call' : 'call-outline';
                break;
              default:
                iconName = 'ellipse-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary[500],
          tabBarInactiveTintColor: colors.brown[400],
          tabBarLabelStyle: {
            fontFamily: fontFamilies.bodyMedium,
            fontSize: 11,
            marginBottom: Platform.OS === 'ios' ? 0 : 4,
          },
          tabBarStyle: {
            backgroundColor: colors.cream[50],
            borderTopColor: colors.divider,
            borderTopWidth: 1,
            height: Platform.OS === 'ios' ? 88 : 64,
            paddingTop: 6,
            paddingBottom: Platform.OS === 'ios' ? 28 : 8,
          },
        })}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{ tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="AboutTab"
          component={AboutStackScreen}
          options={{ tabBarLabel: 'About' }}
        />
        <Tab.Screen
          name="ScheduleTab"
          component={ScheduleStackScreen}
          options={{ tabBarLabel: 'Schedule' }}
        />
        <Tab.Screen
          name="GalleryTab"
          component={GalleryStackScreen}
          options={{ tabBarLabel: 'Gallery' }}
        />
        <Tab.Screen
          name="ContactTab"
          component={ContactStackScreen}
          options={{ tabBarLabel: 'Contact' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

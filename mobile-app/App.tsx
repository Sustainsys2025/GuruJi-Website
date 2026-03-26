import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import {
  useFonts as useOrbitron,
  Orbitron_400Regular,
  Orbitron_700Bold,
} from '@expo-google-fonts/orbitron';
import {
  useFonts as useInter,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import AppNavigator from './src/navigation/AppNavigator';
import { colors } from './src/theme/colors';
import { getImageUrl } from './src/utils/helpers';

// Local fallback for splash image (used when remote image fails to load)
const splashFallback = require('./assets/splash-icon.png');

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [orbitronLoaded] = useOrbitron({
    Orbitron_400Regular,
    Orbitron_700Bold,
  });

  const [interLoaded] = useInter({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const appIsReady = orbitronLoaded && interLoaded;

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View style={styles.splashContainer}>
        <LinearGradient
          colors={[colors.primary[50], colors.gold[50], colors.cream[50]]}
          style={StyleSheet.absoluteFill}
        />
        <Image
          source={{ uri: getImageUrl('/images/guruji-pics/guru-darshan.jpg') }}
          placeholder={splashFallback}
          style={styles.splashLogo}
          contentFit="cover"
        />
        <Text style={styles.splashTitle}>Cambridge GuruJi Parivaar</Text>
        <Text style={styles.splashSubtitle}>A Spiritual Community</Text>
        <ActivityIndicator
          size="small"
          color={colors.primary[500]}
          style={styles.splashLoader}
        />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.root} onLayout={onLayoutRootView}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <AppNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.cream[50],
  },
  splashLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  splashTitle: {
    fontWeight: '700',
    fontSize: 22,
    color: colors.brown[600],
    letterSpacing: 1,
    textAlign: 'center',
  },
  splashSubtitle: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 6,
  },
  splashLoader: {
    marginTop: 30,
  },
});

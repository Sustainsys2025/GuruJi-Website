import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Audio, Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius } from '../theme';
import { getVideoUrl } from '../utils/helpers';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface VideoPlayerProps {
  source: string;
}

export default function VideoPlayer({ source }: VideoPlayerProps) {
  const videoRef = useRef<Video>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Configure audio session so sound plays even when the iOS silent switch is on
  useEffect(() => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
      shouldDuckAndroid: true,
    });
  }, []);

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setIsPlaying(status.isPlaying);
    }
  };

  const togglePlay = async () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      await videoRef.current.pauseAsync();
    } else {
      await videoRef.current.playAsync();
    }
  };

  const toggleMute = async () => {
    if (!videoRef.current) return;
    await videoRef.current.setIsMutedAsync(!isMuted);
    setIsMuted(!isMuted);
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: getVideoUrl(source) }}
        style={styles.video}
        resizeMode={ResizeMode.COVER}
        isMuted={isMuted}
        isLooping
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
      <View style={styles.controls}>
        <TouchableOpacity onPress={togglePlay} style={styles.controlBtn}>
          <Ionicons
            name={isPlaying ? 'pause' : 'play'}
            size={22}
            color={colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleMute} style={styles.controlBtn}>
          <Ionicons
            name={isMuted ? 'volume-mute' : 'volume-high'}
            size={22}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.base,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    backgroundColor: colors.black,
  },
  video: {
    width: SCREEN_WIDTH - spacing.base * 2,
    height: (SCREEN_WIDTH - spacing.base * 2) * 0.5625, // 16:9
  },
  controls: {
    position: 'absolute',
    bottom: spacing.md,
    right: spacing.md,
    flexDirection: 'row',
    gap: spacing.sm,
  },
  controlBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

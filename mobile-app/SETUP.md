# GuruJi Cambridge - Mobile App Setup

## Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (Mac) or Android Emulator, or Expo Go app on your phone

## Setup Steps

### 1. Install Dependencies
```bash
cd mobile-app
npm install
```

### 2. Download Fonts
Download these Google Fonts and place the .ttf files in `assets/fonts/`:

**Orbitron** (from https://fonts.google.com/specimen/Orbitron):
- `Orbitron-Regular.ttf`
- `Orbitron-Bold.ttf`

**Inter** (from https://fonts.google.com/specimen/Inter):
- `Inter-Light.ttf`
- `Inter-Regular.ttf`
- `Inter-Medium.ttf`
- `Inter-SemiBold.ttf`
- `Inter-Bold.ttf`

### 3. Run the App
```bash
# Start Expo dev server
npx expo start

# Run on iOS Simulator
npx expo start --ios

# Run on Android Emulator
npx expo start --android
```

### 4. Image Assets
The app loads images from `gurujicambridge.com` by default.

To bundle images locally for offline support:
1. Copy the website's `public/images/` folder into `mobile-app/src/assets/images/`
2. Update `src/utils/helpers.ts` to use `require()` instead of URLs

### 5. Build for Production

```bash
# Install EAS CLI
npm install -g eas-cli

# Configure build
eas build:configure

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

## Project Structure
```
mobile-app/
├── App.tsx                     # Entry point with font loading
├── app.json                    # Expo configuration
├── package.json                # Dependencies
├── assets/
│   └── fonts/                  # Custom fonts (download required)
└── src/
    ├── navigation/
    │   ├── AppNavigator.tsx     # Bottom tabs + stack navigators
    │   └── types.ts            # TypeScript navigation types
    ├── screens/
    │   ├── HomeScreen.tsx       # Hero, intro, video, CTA, subscribe
    │   ├── AboutScreen.tsx      # Community, mission, gatherings, seva
    │   ├── ScheduleScreen.tsx   # 2026 dates, venue, guidelines, archive
    │   ├── GalleryListScreen.tsx # Event grid with photo counts
    │   ├── GalleryDetailScreen.tsx # Photo grid with lightbox
    │   ├── BooksScreen.tsx      # 9 spiritual books
    │   └── ContactScreen.tsx    # Form, quick actions, info
    ├── components/              # Reusable UI components
    ├── theme/                   # Colors, typography, spacing
    ├── data/                    # JSON content (from website)
    └── utils/                   # Helper functions
```

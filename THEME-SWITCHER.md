# Theme Switcher Feature

## Overview

Your portfolio now includes a dynamic theme switcher that allows visitors to choose from 6 different color schemes!

## Available Themes

### 1. **Ocean Blue** (Original)

- Dark navy blue backgrounds
- Bright cyan/teal accent (#64ffda)
- Your original color scheme

### 2. **Purple Gold**

- Deep purple/violet backgrounds
- Golden yellow accent (#ffd700)
- Elegant and luxurious feel

### 3. **Electric Blue**

- Dark charcoal/gray backgrounds
- Bright electric blue accent (#3b82f6)
- Modern and tech-forward

### 4. **Forest Coral**

- Deep forest green backgrounds
- Vibrant coral accent (#ff6b6b)
- Natural and fresh

### 5. **Neon Pink**

- Midnight blue/black backgrounds
- Hot pink/magenta accent (#ff1493)
- Bold cyberpunk aesthetic

### 6. **Coffee Amber**

- Warm brown/espresso backgrounds
- Bright amber accent (#f59e0b)
- Warm and sophisticated

## How It Works

### For Users:

1. Look for the 🎨 button in the bottom-right corner
2. Click it to open the theme menu
3. Select any theme from the list
4. The color scheme changes instantly with smooth transitions
5. Your choice is saved in browser localStorage (persists across visits)

### Technical Implementation:

#### Files Created:

- `src/styles/themes.js` - Contains all 6 theme definitions
- `src/contexts/ThemeContext.js` - React Context for theme state management
- `src/components/themeSwitcher.js` - UI component for theme selection

#### Files Modified:

- `src/components/layout.js` - Wrapped with ThemeProvider and added ThemeSwitcher
- `src/styles/GlobalStyle.js` - Added smooth transitions for theme changes
- `gatsby-node.js` - Added @contexts alias for imports

#### How Theme Switching Works:

1. **Context Management**: ThemeContext manages current theme state
2. **CSS Variables**: When theme changes, CSS custom properties are updated dynamically
3. **localStorage**: Selected theme is saved to persist user preference
4. **Smooth Transitions**: All color properties have 0.3s transitions for smooth changes
5. **No Page Reload**: Everything updates instantly in-place

## Customization

### To Add a New Theme:

1. Open `src/styles/themes.js`
2. Add a new theme object with this structure:

```javascript
themeName: {
  name: 'Display Name',
  colors: {
    darkNavy: '#......',
    navy: '#......',
    lightNavy: '#......',
    lightestNavy: '#......',
    navyShadow: 'rgba(...)',
    darkSlate: '#......',
    slate: '#......',
    lightSlate: '#......',
    lightestSlate: '#......',
    white: '#......',
    accent: '#......',
    accentTint: 'rgba(...)',
  },
},
```

### To Change Default Theme:

In `src/styles/themes.js`, update:

```javascript
export const defaultTheme = 'navy'; // Change to any theme key
```

### To Customize Theme Switcher Position:

In `src/components/themeSwitcher.js`, modify the `StyledThemeSwitcher` styles:

```javascript
position: fixed;
bottom: 30px;  // Adjust this
right: 30px;   // Adjust this
```

## Benefits

1. **User Personalization**: Visitors can choose their preferred aesthetic
2. **Accessibility**: Different contrasts may work better for different users
3. **Memorable Experience**: Interactive feature makes your portfolio stand out
4. **No Performance Impact**: Uses CSS variables for instant theme switching
5. **Persistent Preference**: localStorage remembers user's choice

## Browser Compatibility

- Works in all modern browsers
- localStorage support: All modern browsers
- CSS custom properties: All modern browsers
- Gracefully degrades if localStorage is disabled

## Next Steps

1. Test all 6 themes in your browser
2. Choose which themes you want to keep
3. Optionally remove themes you don't like from `themes.js`
4. Customize theme switcher button position/style if desired
5. Deploy and share!

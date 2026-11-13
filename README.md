# Xefag | React Native UI Challenge

A mobile product-detail interface recreated with **React Native, Expo, and TypeScript** as part of **React Native Task 1 – UI Challenge**.

The project is based on a Xefag product-page design featuring **Relax** and **Sleep** supplement bottles. It focuses on translating a visual reference into reusable React Native components, responsive layouts, and interactive UI elements.

> **Project type:** Educational UI implementation. This is not an official Xefag application or a functioning e-commerce service.

## Features

- **Two product themes:** Switch between Relax (yellow, `#FFC821`) and Sleep (magenta, `#C82C50`).
- **Product artwork:** Display distinct Relax and Sleep bottle images with decorative petals.
- **Animated product transition:** Crossfade the bottle images and fade the background colour using React Native's `Animated` API.
- **Variant selectors:** Choose between the displayed 30, 60, and 90 variants.
- **Quantity controls:** Increase or decrease quantity, with a minimum of one item.
- **Reusable UI:** Separate components for the header, selectors, showcase, and product details.
- **Safe-area layout:** Account for the iPhone status bar and bottom safe area.
- **Themed controls:** Adapt the header, selected variants, quantity buttons, and Buy Now button to the chosen product.

**Current demo limitations:** The product artwork represents the 30 variant; selecting 60 or 90 does not load variant-specific bottle artwork or pricing. The displayed price is a design placeholder. Header navigation and shopping-cart actions use temporary alerts or static indicators, and **Buy Now opens a demo alert instead of processing a purchase**.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React Native | Native mobile interface |
| Expo | Development and device testing |
| TypeScript | Typed components, props, and state |
| React Native `StyleSheet` and Flexbox | Layout and styling |
| React Native `Animated` | Theme and product-image transitions |
| `react-native-safe-area-context` | Device safe areas |
| `expo-symbols` and `@expo/vector-icons` | Interface icons |

## Project Structure

```text
react-native-ui-challenge/
├── README.md
├── .gitignore
└── mobile/
    ├── App.tsx
    ├── app.json
    ├── package.json
    ├── tsconfig.json
    ├── components/
    │   ├── ProductHeader.tsx
    │   ├── ProductSelectors.tsx
    │   ├── ProductShowcase.tsx
    │   └── ProductInfo.tsx
    └── assets/
        └── images/
            ├── logo.png
            ├── xefag-relax.png
            ├── xefag-sleep.png
            ├── Lotus Petal Circle Icon.png
            └── Crescent Moon with Three Stars.png
```

The tree highlights the main files used in the challenge; Expo-generated files and directories are omitted.

## Getting Started

### Requirements

- Node.js and npm
- A computer with the project source code
- Expo Go installed on a compatible iPhone, or another supported development device

### Installation

Clone the repository from its GitHub page, then open a terminal in the project's `mobile` directory:

```bash
cd react-native-ui-challenge/mobile
npm install
```

Start the Expo development server:

```bash
npx expo start
```

On an iPhone:

1. Connect the phone and development computer to the same Wi-Fi network.
2. Open the iPhone Camera and scan the QR code shown by Expo.
3. Open the link in **Expo Go**.

If the local-network connection fails, try:

```bash
npx expo start --tunnel
```

### TypeScript Check

Run this command inside `mobile`:

```bash
npx tsc --noEmit
```

## How the Interface Works

The selected product is stored in `App.tsx` as React state:

```tsx
const [selectedType, setSelectedType] = useState<ProductType>("Relax");
```

That state is passed to child components as props. Selecting a different product updates the header and selector themes, the product information, and the animated showcase. The transition uses a shared `Animated.Value`: **0 for Relax**, **1 for Sleep**.

Quantity is maintained separately with `useState`, and the decrease action is bounded to one item with `Math.max(1, current - 1)`.

## Design Reference and Screenshots

The implementation is based on the supplied **Xefag product UI** reference, credited in the reference image filename to **Bogdan Nikitin for Nixtio on Dribbble**. Product and icon images in this repository are used for this educational design exercise.

**Preview screenshots:** To add a preview to this README, save a screenshot in the repository (for example, `docs/xefag-preview.png`) and insert the following Markdown after the file has been committed:

```md
![Xefag Relax and Sleep UI preview](docs/xefag-preview.png)
```

## Build and Submission

The assignment calls for a completed application build, uploaded to Google Drive and linked from the GitHub README.

- **Application build:** Not yet published.
- **Google Drive build link:** To be added after building and uploading the application.
- **Testing status:** UI development and visual/responsiveness checks are in progress.

## Next Improvements

- Fine-tune matching visible sizes for the Relax and Sleep bottles.
- Verify the final typography and spacing against the reference on different screen sizes.
- Test rapid theme switching and animation behaviour on the physical device.
- Capture final screenshots, create the submission build, and add the Google Drive link.

## Acknowledgements

Created for **React Native Task 1 – UI Challenge**, with design inspiration from the supplied Xefag concept artwork. The original design and any third-party assets remain the property of their respective creators.

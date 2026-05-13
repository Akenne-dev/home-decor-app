# Home Decor App 🏠✨

A modern, full-featured e-commerce mobile application for browsing and purchasing home decor items. Built with React Native using Expo and Figma design specifications.

## 📋 Project Overview

Home Decor App is a comprehensive mobile shopping platform that allows users to explore, search, and purchase furniture and home decor products across multiple categories. The app features a beautiful UI with smooth navigation, user authentication, product filtering, wishlists, shopping carts, and user reviews.

## ✨ Key Features

### 🛍️ Shopping & Product Browsing

- **Multiple Categories**: Bedroom, Living Room, Dining, Kitchen, Office, Bestsellers, Collections
- **Product Details**: High-quality images, descriptions, pricing, and customer reviews
- **Search Functionality**: Find products quickly with the search feature
- **Product Filtering**: Filter items by category and preferences

### 👤 User Authentication

- **Sign Up & Login**: Secure user account creation and authentication
- **Password Management**: Forgot password and password reset functionality
- **User Profile**: Manage account information and preferences

### 🛒 Shopping Features

- **Shopping Cart**: Add products, manage quantities, view totals
- **Wishlist**: Save favorite items for later
- **Product Reviews**: Read and leave reviews for products
- **Banner Promotions**: Featured products and special offers

### 📱 UI/UX

- **Responsive Design**: Optimized for mobile devices
- **Tailwind CSS**: Modern styling with TailwindCSS and NativeWind
- **Intuitive Navigation**: Tab-based navigation with category views

## 🏗️ Project Structure

```
figma-home-decor/
├── app/                          # Main application code (Expo Router)
│   ├── (auth)/                  # Authentication screens
│   │   ├── login.jsx
│   │   ├── signup.jsx
│   │   ├── forgot.jsx
│   │   └── setpassword.jsx
│   ├── (tabs)/                  # Main app screens
│   │   ├── homePage.jsx
│   │   ├── search.jsx
│   │   ├── cart.jsx
│   │   ├── wishList.jsx
│   │   ├── profile.jsx
│   │   ├── reviews.jsx
│   │   ├── banner.jsx
│   │   └── list/               # Category details and products
│   │       ├── bedroom/
│   │       ├── living/
│   │       ├── dining/
│   │       ├── kitchen/
│   │       ├── office/
│   │       ├── bestseller/
│   │       └── collection/
│   ├── filter.jsx
│   └── launch.jsx
├── components/                  # Reusable components
│   └── list/
│       ├── ProductCard.jsx     # Product display component
│       ├── ProductDetails.jsx
│       ├── CategoryBox.jsx
│       ├── CategoryHeader.jsx
│       └── ReviewsComponent.jsx
├── assets/                     # Images and media files
│   └── images/                # Product images, icons, banners
├── context/                    # React Context
│   └── AuthContext.js         # Authentication state management
├── tailwind.config.js         # Tailwind CSS configuration
├── metro.config.js            # Metro bundler config
└── app.json                   # Expo app configuration
```

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Routing**: Expo Router (file-based routing)
- **Styling**: TailwindCSS + NativeWind
- **State Management**: React Context API
- **TypeScript/JavaScript**: Mixed configuration
- **Build Tools**: Metro, Babel, ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Akenne-dev/home-decor-app.git
cd home-decor-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npx expo start
```

4. Run on your device:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your physical device

## 📦 Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser

## 🎨 Design

The app is designed based on Figma prototypes with a modern, clean aesthetic featuring:

- Smooth animations and transitions
- Intuitive user interface
- Consistent color scheme and typography
- Mobile-first responsive design

## 📁 Key Components

### ProductCard

Displays individual products with images, pricing, and quick actions

### ProductDetails

Shows comprehensive product information including images, description, reviews, and purchase options

### ReviewsComponent

Manages and displays customer reviews and ratings

### CategoryBox

Displays category cards for easy navigation

### CategoryHeader

Header component for category pages

## 🔐 Authentication

The app uses a custom authentication system with:

- User registration and login
- Password recovery
- Secure session management via React Context

## 🌐 Navigation Structure

- **Authentication Stack**: Login, Sign up, Password reset
- **Main Tabs**: Home, Search, Cart, Wishlist, Profile, Reviews
- **Category Details**: Detailed product views for each category

## 📝 Configuration Files

- **app.json** - Expo app configuration
- **tailwind.config.js** - Tailwind CSS customization
- **tsconfig.json** - TypeScript configuration
- **eslint.config.js** - ESLint rules
- **babel.config.js** - Babel transpiler configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For questions or support, please open an issue on GitHub or contact the project maintainer.

---

**Built with ❤️ using Expo and React Native**

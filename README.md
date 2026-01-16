# E-Commerce Store

A modern e-commerce platform built with Next.js 15, TypeScript, Material-UI, and Zustand.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Material-UI (MUI)** for beautiful, responsive UI components
- **Zustand** for state management
- **Yarn 4+** for fast, reliable package management
- **ESLint** for code quality
- **Responsive Design** with mobile-first approach
- **Modern Architecture** with proper separation of concerns

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript 5
- **UI Library**: Material-UI (MUI) v6
- **State Management**: Zustand
- **Package Manager**: Yarn 4.9.2
- **Styling**: MUI Theme + CSS-in-JS
- **Icons**: Material Icons
- **Fonts**: Geist (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd intern-ecommerce-tetbit
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with MUI theme provider
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
├── store/                 # Zustand state management
│   └── index.ts          # Main store configuration
├── theme/                 # Material-UI theme configuration
│   └── index.ts          # Custom theme setup
├── types/                 # TypeScript type definitions
├── utils/                 # Utility functions
└── hooks/                 # Custom React hooks
```

## 🎨 Theme Configuration

The project uses a custom Material-UI theme with:
- **Primary Color**: Blue (#1976d2)
- **Secondary Color**: Pink (#dc004e)
- **Typography**: Roboto font family
- **Spacing**: 8px base unit
- **Border Radius**: 8px for components
- **Responsive Breakpoints**: Mobile-first approach

## 📱 Features

### Current Implementation
- ✅ Modern responsive layout
- ✅ Material-UI components
- ✅ Zustand state management
- ✅ Shopping cart functionality
- ✅ Product display
- ✅ TypeScript integration
- ✅ ESLint configuration

### Planned Features
- 🔄 User authentication
- 🔄 Product search and filtering
- 🔄 Checkout process
- 🔄 Order management
- 🔄 Admin dashboard
- 🔄 Payment integration
- 🔄 Product reviews
- 🔄 Wishlist functionality

## 🚀 Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration
- `.yarnrc.yml` - Yarn configuration

## 📝 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow ESLint rules
- Use Material-UI components consistently
- Implement responsive design
- Write meaningful component and function names

### State Management
- Use Zustand for global state
- Keep stores focused and modular
- Use proper TypeScript typing
- Implement proper error handling

### Component Architecture
- Use functional components with hooks
- Implement proper prop interfaces
- Use Material-UI theme values
- Follow mobile-first responsive design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Material-UI team for the beautiful components
- Zustand team for the lightweight state management
- Vercel for the deployment platform

---

Built with ❤️ using Next.js, TypeScript, and Material-UI

## Frontend Assignment - Vendors Table

### Overview

A React TypeScript application that displays a vendors table with interactive side panel functionality. Built with Material-UI components and modern React patterns.

### Features

✅ **Interactive Table**: Displays vendors with avatars, icons, and status chips  
✅ **Side Panel**: Click any row to view detailed vendor information  
✅ **Vendor Types**: Different layouts for Business and Independent vendors  
✅ **Responsive Design**: Optimized for different screen sizes  
✅ **Modern UI**: Material-UI components with custom styling  
✅ **TypeScript**: Full type safety throughout the application  

### Vendor Types

- **Business Vendors**: Display exchange rate, account number, and payment details
- **Independent Vendors**: Show comment and phone number information

### Tech Stack

- **React 18** with TypeScript
- **Material-UI (MUI)** for UI components
- **React Hooks** for state management
- **CSS-in-JS** with MUI's `sx` prop
- **Axios** for data fetching

### Getting Started

#### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

#### Installation

```bash
# Clone the repository
git clone https://github.com/Karin-Goldin/frontend-assignment.git

# Navigate to the project directory
cd frontend-assignment

# Install dependencies
npm install

# Start the development server
npm start
```

The application will open at `http://localhost:3000`

### Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── table/           # Reusable table component
│   │   ├── right-panel/     # Side panel functionality
│   │   └── vendor-details/  # Vendor detail components
│   ├── layouts/             # Layout components
│   └── pages/               # Page components
├── services/
│   └── vendors/             # API and type definitions
├── utils/
│   └── formatters.ts        # Utility functions
└── assets/                  # Images and static files
```

### Key Components

- **VendorsPage**: Main page component with table and data fetching
- **Table**: Generic reusable table with hover effects and click handlers
- **VendorDetails**: Side panel component with conditional rendering
- **BusinessVendorDetails**: Specific layout for business vendors
- **IndependentVendorDetails**: Specific layout for independent vendors

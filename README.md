
Action: file_editor create /app/README.md --file-text "# hypertxt - Professional Web Development Services

A modern, responsive website showcasing professional web development services for both static and dynamic web applications. Built with React, FastAPI, and MongoDB.

![hypertxt Logo](https://img.shields.io/badge/hypertxt-Professional_Web_Services-0073e6?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat&logo=react)


## 🌟 Features

- **Light/Dark Mode**: Seamless theme switching with persistent storage
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Professional UI**: Built with Shadcn UI components and Tailwind CSS
- **8 Logo Variations**: Multiple professional logo designs to choose from
- **Service Showcase**: Highlight static and dynamic web development offerings
- **Portfolio Gallery**: Display featured projects with technology stack
- **Client Testimonials**: Build trust with client feedback
- **Contact Information**: Easy-to-find contact details

## 📁 Project Structure

```
hypertxt/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── ui/         # Shadcn UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── LogoVariations.jsx
│   │   │   ├── LogoShowcase.jsx
│   │   │   └── ThemeProvider.jsx
│   │   ├── data/
│   │   │   └── mock.js      # Mock data for development
│   │   ├── hooks/
│   │   │   └── use-toast.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── .env.example
│
├── backend/                  # FastAPI backend application
│   ├── server.py            # Main FastAPI application
│   ├── requirements.txt     # Python dependencies
│   └── .env.example
│
├── memory/                   # Project documentation
│   ├── PRD.md               # Product Requirements Document
│   └── LOGO_OPTIONS.md      # Logo variations guide
│
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v16 or higher
- **Python**: 3.8 or higher
- **MongoDB**: 4.4 or higher (local or cloud instance)
- **Yarn**: Package manager (recommended) or npm

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/hypertxt.git
cd hypertxt
```

#### 2. Set Up Environment Variables

**Frontend** (`/frontend/.env`):
```bash
cd frontend
cp .env.example .env
```

Edit `.env` and add:
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

**Backend** (`/backend/.env`):
```bash
cd ../backend
cp .env.example .env
```

Edit `.env` and add your MongoDB connection:
```env
MONGO_URL=mongodb://localhost:27017/hypertxt
DB_NAME=hypertxt
```

#### 3. Install Dependencies

**Frontend**:
```bash
cd frontend
yarn install
# or
npm install
```

**Backend**:
```bash
cd ../backend
pip install -r requirements.txt
```

### 🏃 Running the Application

You'll need to run both frontend and backend servers:

#### Terminal 1 - Backend Server

```bash
cd backend
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

The backend API will be available at: `http://localhost:8001`

#### Terminal 2 - Frontend Server

```bash
cd frontend
yarn start
# or
npm start
```

The frontend will be available at: `http://localhost:3000`

### 🎨 View Logo Variations

Visit `http://localhost:3000/#logos` to see all 8 logo design options in both light and dark modes.

## 🛠️ Tech Stack

### Frontend
- **React 19**: Modern UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn UI**: High-quality React components
- **Lucide React**: Beautiful icon library
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls

### Backend
- **FastAPI**: Modern Python web framework
- **Motor**: Async MongoDB driver
- **Pydantic**: Data validation
- **Python-dotenv**: Environment variable management

### Database
- **MongoDB**: NoSQL database for flexible data storage

### Development Tools
- **Craco**: React configuration override
- **ESLint**: Code linting
- **Prettier**: Code formatting

## 📝 Development

### Mock Data

All content currently uses mock data located in `/frontend/src/data/mock.js`. Update this file with your actual:
- Services information
- Project portfolio items
- Team member details
- Client testimonials
- Contact information

### Customizing the Logo

1. Visit `/#logos` to view all 8 logo variations
2. Choose your favorite design
3. Update `/frontend/src/components/Navbar.jsx` and `/frontend/src/components/Footer.jsx`
4. See `/memory/LOGO_OPTIONS.md` for detailed instructions

### Color Scheme

The project uses a Classic Professional theme:
- **Primary Blue**: `#0073e6` (blue-600)
- **Light Mode**: White backgrounds with dark text
- **Dark Mode**: Dark navy backgrounds with light text
- All colors are defined in `/frontend/src/index.css`

## 🔧 Configuration

### Frontend Configuration

**Tailwind Config** (`frontend/tailwind.config.js`):
- Custom color scheme for light/dark modes
- Shadcn UI component styles
- Custom animations and transitions

**Craco Config** (`frontend/craco.config.js`):
- Path aliases configuration
- Webpack customization

### Backend Configuration

**CORS Settings** (`backend/server.py`):
- Currently allows all origins for development
- Update for production with specific domains

**API Routes**:
- All routes prefixed with `/api`
- Base route: `GET /api/` - Health check
- Status routes: `POST /api/status`, `GET /api/status`

## 📦 Building for Production

### Frontend Build

```bash
cd frontend
yarn build
# or
npm run build
```

Build output will be in `frontend/build/`

### Backend Deployment

For production, use a WSGI server like Gunicorn:

```bash
pip install gunicorn
gunicorn server:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8001
```

## 🌐 Environment Variables

### Frontend Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_BACKEND_URL` | Backend API URL | `http://localhost:8001` |

### Backend Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URL` | MongoDB connection string | `mongodb://localhost:27017/` |
| `DB_NAME` | Database name | `hypertxt` |

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) - Beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - Clean icon set
- [Unsplash](https://unsplash.com/) - Portfolio images

## 📞 Support

For support, email hello@yourwebagency.com or visit our website.

## 🗺️ Roadmap

- [x] Frontend with mock data
- [x] Light/Dark mode toggle
- [x] 8 logo variations
- [x] Responsive design
- [ ] Backend API integration
- [ ] Contact form with email notifications
- [ ] Admin panel for content management
- [ ] Blog section
- [ ] SEO optimization
- [ ] Performance optimization

---

**Built with ❤️ by hypertxt**
"
Observation: Overwrite successful: /app/README.md

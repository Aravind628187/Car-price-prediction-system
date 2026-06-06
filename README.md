# HUB Cars 🚙 | AI-Powered Car Marketplace

HUB Cars is a full-stack automotive marketplace that enables users to seamlessly buy, sell, and discover new and used vehicles. Built with React, Node.js, Express, and Python, the platform combines a modern user experience with an intelligent Machine Learning pricing engine that helps sellers estimate accurate market values for their vehicles.

Designed with scalability, security, and usability in mind, HUB Cars delivers a complete marketplace experience, from secure authentication and vehicle listing management to AI-powered price prediction and location-based showroom discovery.

---

## Features

### AI-Powered Price Prediction

Leverages a Python-based Machine Learning model to estimate vehicle prices using key attributes such as:

* Brand and model
* Manufacturing year
* Kilometers driven
* Vehicle condition

The system generates multiple pricing ranges, including Fair Price, Good Price, Excellent Price, and Dealer Price estimates.

### Vehicle Marketplace

* Browse new and used cars
* View detailed vehicle information
* Upload vehicle images
* Create and manage listings

### Auto-Expiring Listings

To maintain marketplace quality, sellers can choose listing durations of 10 or 20 days. Expired listings are automatically hidden from users.

### Showroom Discovery

Integrated with Google Maps to help users locate nearby authorized dealerships and showrooms directly from vehicle pages.

### Secure Authentication

* JWT-based authentication
* Password hashing with bcrypt
* Protected routes and user sessions

### Responsive Modern UI

* Built with React and Vite
* Mobile-friendly responsive design
* Professional dark-themed interface

### File Upload Management

Vehicle images are securely uploaded and managed using Multer.

---

## Technology Stack

### Frontend

* React.js
* Vite
* React Router DOM
* CSS3

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt
* Multer

### Machine Learning Service

* Python
* Flask
* Scikit-learn
* Pandas
* NumPy

---

## Project Structure

```text
Car-price-prediction-system-main/
│
├── frontend/          # React application
├── backend/           # Express API and authentication services
└── ml-service/        # Flask ML prediction service
```

---

## Getting Started

### Prerequisites

* Node.js 18+
* Python 3.8+
* Git

### Run the ML Service

```bash
cd ml-service

python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

pip install flask pandas scikit-learn flask-cors numpy joblib

python app.py
```

ML Service:
http://localhost:8000

### Run the Backend

```bash
cd backend

npm install
npm start
```

Backend API:
http://localhost:5050

### Run the Frontend

```bash
cd frontend

npm install
npm run dev
```

Frontend:
http://localhost:5173

---

## Environment Variables

Create a `.env` file inside the `backend` directory:

```env
JWT_SECRET=your_jwt_secret
ML_ENDPOINT=http://localhost:8000/predict
PORT=5050
```

---

## Key Highlights

* Full-stack architecture
* AI-powered vehicle valuation
* JWT-secured authentication
* Image upload support
* Google Maps integration
* Auto-expiring marketplace listings
* Responsive user interface
* Microservice-based ML integration

---

## License

Licensed under the MIT License.

If you found this project useful, consider giving it a ⭐ on GitHub.

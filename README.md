# Autotext Frontend Application

This is a React-based frontend application for the Autotext project. It provides two main functionalities: displaying a list of posts and fetching weather data for a specific location. The application is designed with reusable components, error handling, and a responsive UI.

---

## Project Structure

The project is organized as follows:
autotext-fe-app/
├── public/                 # Static files
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # Web app manifest
│   └── robots.txt          # Robots.txt file
├── src/                    # Source code
│   ├── components/         # Reusable components
│   │   ├── Header.jsx      # Header component
│   │   ├── PostItem.jsx    # Single post item component
│   │   ├── PostList.jsx    # List of posts component
│   │   ├── Section.jsx     # Section for displaying posts
│   │   ├── Weather.jsx     # Weather component
│   │   ├── ui/             # UI-specific components
│   │   │   └── Loader.jsx  # Loading spinner
│   │   └── ErrorBoundary.jsx # Error boundary for handling errors
│   ├── pages/              # Page components
│   │   └── Home.jsx        # Home page
│   ├── services/           # API service functions
│   │   └── service.js      # Fetch functions for posts and weather
│   ├── App.js              # Main application component
│   ├── App.css             # Styles for the App component
│   ├── index.js            # Entry point for the application
│   ├── index.css           # Global styles
│   └── App.test.js         # Example test file
├── .env                    # Environment variables
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation


---

## Components and Their Functionalities

### Pages

#### `Home.jsx`
- The main page of the application.
- Allows users to toggle between two views: "Posts" and "Weather".
- Fetches posts data when the "Posts" view is selected.
- Displays a loading spinner while data is being fetched.
- Uses toast notifications to display errors.

---

### Components

#### `Header.jsx`
- Displays the application header with the title "Autotext.app".

#### `PostItem.jsx`
- Represents a single post.
- Displays the post's title and body.

#### `PostList.jsx`
- Displays a list of posts.
- Iterates over the posts data and renders `PostItem` for each post.

#### `Section.jsx`
- Wraps the post list with a section header.
- Displays the title "Posts" and renders the `PostList` component.

#### `Weather.jsx`
- Allows users to search for weather data by entering a location.
- Fetches weather data using the `fetchWeather` service.
- Displays weather details such as temperature, condition, humidity, and wind speed.
- Handles errors and displays appropriate messages.

#### `Loader.jsx`
- A spinner component displayed during data loading.

#### `ErrorBoundary.jsx`
- Catches and displays errors in the application.
- Prevents the application from crashing due to unhandled errors.

---

### Services

#### `service.js`
- Contains API calls for fetching posts and weather data:
  - `fetchPosts`: Fetches a list of posts from a placeholder API.
  - `fetchWeather`: Fetches weather data for a given city using the OpenWeatherMap API.

---

## How to Run the Application Locally

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

---

### Steps

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd autotext-fe-app

2. **Install dependencies**:

Set up the environment variable:

Create a .env file in the root directory.
Add the following line to the .env file:
    ```bash
    REACT_APP_APIKEY='your-api-key'

3. **Start the development server**:
    ```bash
    npm start

Open the application in your browser:

Navigate to http://localhost:3000.
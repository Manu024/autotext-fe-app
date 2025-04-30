import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Loader from "../components/ui/Loader";
import ErrorBoundary from "../components/ErrorBoundary";
import Section from "../components/Section";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchPosts } from "../services/service";
import Weather from "../components/Weather";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState("posts"); // State to track the selected view

  useEffect(() => {
    if (view === "posts") {
      setTimeout(async () => {
        setLoading(true);
        const response = await fetchPosts();
        if (!response.isSuccess) {
          setError("Failed to fetch data");
          setLoading(false);
          showToast("Failed to fetch data"); // Show toast notification
          return;
        }
        setData(response.data);
        setLoading(false);
      }, 3000);
    }
  }, [view]);

  const showToast = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <ErrorBoundary>
      <ToastContainer />
      <div className="home">
        <Header />
        <div className="view-toggle">
          <button onClick={() => setView("posts")}>Posts</button>
          <button onClick={() => setView("weather")}>Weather</button>
        </div>
        {view === "posts" ? (
          loading ? (
            <Loader />
          ) : (
            <Section data={data} />
          )
        ) : (
          <Weather />
        )}
      </div>
    </ErrorBoundary>
  );
};

export default Home;


import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Service from "./page/Service.jsx";
import Contact from "./page/Contact.jsx";
import Conference from "./page/Conference.jsx";
import VideoCall from "./page/VideoCall.jsx";

// ✅ Define ErrorBoundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-red-50">
          <h1 className="text-2xl text-red-600 font-bold">
            Something went wrong. Please refresh the page or try again later.
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

const App = () => {
  const navbarRef = useRef(null);

  return (
    <ErrorBoundary>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Layout navbarRef={navbarRef} />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route path="video" element={<VideoCall />} />
            <Route path="room/:roomID" element={<Conference />} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    console.log('🐛 NotFound DEBUG:', {
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
      state: location.state,
      fullUrl: window.location.href,
      baseUrl: import.meta.env.BASE_URL,
      isProd: import.meta.env.PROD
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <p className="text-sm text-gray-500 mb-4">
          Attempted path: {location.pathname}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Full URL: {window.location.href}
        </p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

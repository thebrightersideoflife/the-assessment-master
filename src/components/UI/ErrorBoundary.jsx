import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console or an external service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleRetry = () => {
    // Reset error state to attempt re-rendering children
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="max-w-4xl mx-auto p-6 space-y-6"
          role="alert"
          aria-live="assertive"
        >
          <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-[#C0392B]/30">
            <h2 className="text-3xl font-bold text-[#C0392B] mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              An unexpected error occurred. Please try again or return to the home
              page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
                aria-label="Try again"
              >
                Try Again
              </button>
              <Link
                to="/"
                className="bg-gradient-to-r from-[#3498DB]/20 to-[#4169E1]/20 text-[#4169E1] px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-center"
                aria-label="Return to home"
              >
                Back to Home
              </Link>
            </div>
            {/* Optional error details for debugging (hidden in production) */}
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-6 text-gray-600">
                <summary className="cursor-pointer text-[#3498DB] hover:underline">
                  Error Details
                </summary>
                <pre className="mt-2 text-sm overflow-auto">
                  {this.state.error?.toString()}
                  <br />
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
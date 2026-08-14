import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Uncaught application error:', error, info);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
          <div className="max-w-md text-center space-y-6">
            <p className="text-emerald-400 font-semibold tracking-widest text-sm uppercase">Al Kabir Developers</p>
            <h1 className="text-3xl font-bold">Something went wrong</h1>
            <p className="text-slate-400">
              We hit an unexpected error while loading this page. Please try going back to the homepage.
            </p>
            <button
              onClick={this.handleReload}
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-full transition duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

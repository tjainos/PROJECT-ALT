// src/components/ErrorBoundaryTestPage.js
import React, { Component } from 'react';

class ErrorBoundaryTestPage extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error('Error caught by Error Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div>
        <h1>Error Boundary Test Page</h1>
        {/* This will throw an error */}
        <ChildComponent />
      </div>
    );
  }
}

// This component intentionally throws an error
function ChildComponent() {
  throw new Error('Intentional error thrown by ChildComponent');
}

export default ErrorBoundaryTestPage;

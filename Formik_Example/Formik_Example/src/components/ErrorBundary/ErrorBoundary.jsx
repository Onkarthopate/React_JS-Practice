import React, { Component } from "react";

export class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch({ error, errorInfo }) {
        console.log("Error caugth by error boundary", error, errorInfo);
    }

    render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red' }}>
          <h2>Something went wrong.</h2>
          <p>Please try refreshing the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
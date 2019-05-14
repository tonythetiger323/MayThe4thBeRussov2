import React from 'react';
import * as Sentry from '@sentry/browser';

interface ErrorBoundaryState {
  hasError: boolean,
  error: string | undefined,
  eventId: string | undefined
}

class ErrorBoundary extends React.Component<any, ErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: undefined, eventId: undefined };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    // You can also log the error to an error reporting service
    this.setState({ error });
    Sentry.withScope(scope => {
      scope.setExtras(info);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
        <h1>Something went wrong.</h1>
        <a onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId })}>Report Feedback</a>
        </div>
      );
    } else {
      return this.props.children
    }

  }
}

export default ErrorBoundary;

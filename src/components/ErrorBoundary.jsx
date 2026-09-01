import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  handleRefresh = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="section-shell flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
          <p className="text-lg font-medium text-[var(--tc-ink)]">
            Something went wrong while loading this page.
          </p>
          <button
            type="button"
            onClick={this.handleRefresh}
            className="focus-ring mt-6 rounded-full bg-gradient-to-r from-[var(--tc-accent)] to-[var(--tc-accent-strong)] px-6 py-3 text-sm font-semibold text-white"
          >
            Refresh page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 開発環境では常にコンソールにエラーを出力（デバッグ用）
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // 本番環境ではエラー追跡サービスに送信（必要に応じて実装）
    if (import.meta.env.PROD) {
      // TODO: エラー追跡サービス（例: Sentry, LogRocket等）に送信
      // Example: errorTrackingService.captureException(error, { extra: errorInfo });
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-2xl font-kanteiryuu text-japanese-indigo mb-4">
              エラーが発生しました
            </h1>
            <p className="text-gray-600 mb-6">
              申し訳ございませんが、ページの読み込み中にエラーが発生しました。
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.href = '/';
              }}
              className="px-6 py-3 bg-japanese-red text-white rounded-lg hover:bg-black transition-colors font-medium"
            >
              トップページに戻る
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}


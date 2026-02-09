import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import { HelmetProvider } from 'react-helmet-async';
import type { FilledContext } from 'react-helmet-async';
import App from './App';

export async function render(url: string) {
  const helmetContext: FilledContext = {} as FilledContext;

  const app = (
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const appHtml = renderToString(app);

  const { helmet } = helmetContext;

  if (!helmet) {
    throw new Error('Helmet context was not populated during SSR render.');
  }

  return { appHtml, helmet };
}

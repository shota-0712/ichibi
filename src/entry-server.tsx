import { Writable } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import { HelmetProvider } from 'react-helmet-async';
import type { FilledContext } from 'react-helmet-async';
import App from './App';

function renderToHtml(app: JSX.Element) {
  return new Promise<string>((resolve, reject) => {
    let html = '';
    let settled = false;
    let renderError: unknown;
    const renderState: { timeoutId?: ReturnType<typeof setTimeout> } = {};

    const settle = (callback: () => void) => {
      if (settled) return;
      settled = true;
      if (renderState.timeoutId) {
        clearTimeout(renderState.timeoutId);
      }
      callback();
    };

    const output = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      }
    });

    output.on('finish', () => {
      settle(() => {
        if (renderError) {
          reject(renderError);
          return;
        }
        resolve(html);
      });
    });

    output.on('error', (error) => {
      settle(() => {
        reject(error);
      });
    });

    const stream = renderToPipeableStream(app, {
      onAllReady() {
        stream.pipe(output);
      },
      onShellError(error) {
        settle(() => {
          reject(error);
        });
      },
      onError(error) {
        renderError = error;
      }
    });

    renderState.timeoutId = setTimeout(() => {
      settle(() => {
        stream.abort();
        reject(new Error('SSR render timed out.'));
      });
    }, 10000);
  });
}

export async function render(url: string) {
  const helmetContext: FilledContext = {} as FilledContext;

  const app = (
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const appHtml = await renderToHtml(app);

  const { helmet } = helmetContext;

  if (!helmet) {
    throw new Error('Helmet context was not populated during SSR render.');
  }

  return { appHtml, helmet };
}

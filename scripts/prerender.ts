import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { load } from 'cheerio';
import type { HelmetServerState } from 'react-helmet-async';

type RenderResult = {
  appHtml: string;
  helmet: HelmetServerState;
};

type RenderModule = {
  render: (url: string) => Promise<RenderResult>;
};

const routes = ['/', '/menu', '/store-info', '/dining-philosophy'] as const;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '..', 'dist');
const templatePath = path.join(distDir, 'index.html');

const template = await readFile(templatePath, 'utf8');

process.env.NODE_ENV = 'production';

const vite = await createServer({
  logLevel: 'info',
  server: { middlewareMode: true },
  appType: 'custom'
});

try {
  const loadedModule = (await vite.ssrLoadModule('/src/entry-server.tsx')) as Partial<RenderModule>;
  if (typeof loadedModule.render !== 'function') {
    throw new Error('entry-server.tsx must export an async render() function.');
  }

  const render = loadedModule.render;

  for (const route of routes) {
    const { appHtml, helmet } = await render(route);

    const $ = load(template);

    $('#root').html(appHtml);

    $('head title').remove();
    $('head meta[name="description"]').remove();
    $('head meta[name="application-name"]').remove();
    $('head meta[name="apple-mobile-web-app-title"]').remove();
    $('head meta[property^="og:"]').remove();
    $('head meta[name^="twitter:"]').remove();
    $('head link[rel="canonical"]').remove();

    $('head').append(helmet.title.toString());
    $('head').append(helmet.meta.toString());
    $('head').append(helmet.link.toString());

    const seenMeta = new Set<string>();
    $('head meta[data-rh="true"]').each((_, element) => {
      const el = $(element);
      const key = `${el.attr('name') ?? el.attr('property') ?? ''}|${el.attr('content') ?? ''}`;
      if (seenMeta.has(key)) {
        el.remove();
      } else {
        seenMeta.add(key);
      }
    });

    const seenLinks = new Set<string>();
    $('head link[rel="canonical"][data-rh="true"]').each((_, element) => {
      const el = $(element);
      const key = `${el.attr('rel') ?? ''}|${el.attr('href') ?? ''}`;
      if (seenLinks.has(key)) {
        el.remove();
      } else {
        seenLinks.add(key);
      }
    });

    const outputPath = path.join(
      distDir,
      route === '/' ? 'index.html' : path.join(route.replace(/^\//, ''), 'index.html')
    );

    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, $.html(), 'utf8');
  }
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  await vite.close();
}

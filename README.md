# 一期一美 - 公式ウェブサイト

十割蕎麦・焼鳥酒場『一期一美』の公式サイト。React + Vite を用いた高速・軽量構成で、オフライン表示に対応しています。

## 技術スタック

- フロントエンド: React 18 + TypeScript
- ビルド: Vite 5（ESM）
- スタイリング: Tailwind CSS 3 / 自前ユーティリティ
- アニメーション: Framer Motion
- ルーティング: React Router DOM 6
- UI 基盤: Radix UI（HoverCard など）
- アイコン: lucide-react

## 開発

前提: Node.js 18 以上（推奨 20+） / npm

```bash
npm install          # 依存解決
npm run dev          # 開発サーバー（Vite）
npm run build        # 本番ビルド（dist/）
npm run preview      # 本番ビルドのローカル確認
npm run lint         # ESLint 実行
npm run analyze      # バンドル解析（--mode analyze）
```

## ディレクトリ構成（抜粋）

```
public/
├── image/                   # 配信用画像（.webp / .svg）
│   └── ichigo_ichibi_logo.svg
├── fonts/
│   └── yuji-syuku/          # 自前ホストのフォント一式
│       ├── yuji-syuku.woff2
│       ├── yuji-syuku.ttf
│       └── yuji-syuku.css   # @font-face 定義
└── service-worker.js        # 手書き SW（v5）

src/
├── components/
│   ├── home/                # ヒーロー・特集・フッター
│   ├── social/              # SNS 埋め込み
│   └── ui/                  # 汎用 UI
├── pages/                   # ルーティング単位
├── index.css                # Tailwind + 基本ユーティリティ
└── main.tsx                 # エントリ・SW 登録
```

## フォント運用（自前ホスト）

- 採用フォント: Yuji Syuku（OFL）
- 実体: `public/fonts/yuji-syuku/` に `yuji-syuku.woff2`（優先）/`yuji-syuku.ttf`
- 読み込み:
  - 事前読み込み: `index.html:61` で WOFF2 を `<link rel="preload" as="font">`
  - 適用 CSS: `index.html:65` から `public/fonts/yuji-syuku/yuji-syuku.css` を参照
  - 本文の既定書体は可読性重視の明朝（OS 搭載）を使用し、見出しや強調に Yuji を使用
- Tailwind ユーティリティ:
  - `font-kanteiryuu` で 'Yuji Syuku' を最優先に適用（`src/index.css:76`）
- Google Fonts への依存はありません（preconnect / フォールバック削除済み）。

## パフォーマンス最適化

- ルート単位の遅延ロード（React.lazy + Suspense）: `src/App.tsx`
- ヒーロー画像の段階的読み込み + idle でのプリロード: `src/components/home/hero-section.tsx`
- WOFF2 プリロード + 自前ホストにより FOUT を最小化
- 画像は WebP を採用しサイズ最適化（`public/image/` に集約）

## PWA / キャッシュ戦略

- Service Worker: `public/service-worker.js`（v5）
  - インストール時は安全に個別キャッシュ（404混入でも失敗しない）
  - プリキャッシュ: 主要アセット + フォント（CSS/WOFF2/TTF）
  - フェッチ: キャッシュファースト（ナビゲーションは `/` フォールバック）
- 登録: `src/main.tsx:9` でページロード後に遅延登録
- キャッシュ更新: 変更時は `CACHE_NAME` を更新

## デプロイ（Netlify）

- 設定: `netlify.toml`
  - 静的アセットを `immutable` で長期キャッシュ
  - HTML は `must-revalidate`
  - フォントの Content-Type を明示（`/fonts/*.woff2`, `/fonts/*.ttf`）
- 旧 `public/_headers` は削除し、`netlify.toml` に統一

## アクセシビリティ / SEO

- カラーパレットは WCAG AA 基準を考慮（Tailwind 拡張）
- 主要画像に `alt`、見出し構造は論理順序で配置
- OGP/説明文/構造化データは `index.html` に定義（JSON-LD あり）

## トラブルシューティング

- フォントが切り替わらない/古い表示になる
  1. ブラウザのハードリロード
  2. DevTools → Application → Service Workers → Unregister → 再読み込み
  3. それでも改善しなければ `public/service-worker.js` の `CACHE_NAME` を +1
- 画像 404: 画像は `public/image/` に統一。参照パスを `/image/...` にする

## メモ

- 本リポジトリはプライベート運用を想定
- 画像・文章の権利は店舗に帰属します

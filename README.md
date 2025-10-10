# 一期一美 - 公式ウェブサイト

千葉県君津市の十割蕎麦・焼鳥酒場『一期一美』の公式サイト。React + Vite を用いた高速・軽量構成で、PWA対応とオフライン表示に対応しています。

🌐 **本番サイト**: https://i-chi-bi.com

## 技術スタック

- **フロントエンド**: React 18 + TypeScript
- **ビルド**: Vite 5（ESM）
- **スタイリング**: Tailwind CSS 3 + カスタムユーティリティ
- **アニメーション**: Framer Motion 11
- **ルーティング**: React Router DOM 6
- **UI コンポーネント**: Radix UI（HoverCard、Slot など）
- **アイコン**: Lucide React
- **PWA**: Service Worker + Manifest

## 開発環境

**前提条件**: Node.js 18 以上（推奨 20+）

```bash
npm install          # 依存関係インストール
npm run dev          # 開発サーバー起動（Vite）
npm run build        # 本番ビルド（dist/）
npm run preview      # 本番ビルドのローカル確認
npm run lint         # ESLint 実行
npm run analyze      # バンドル解析
```

## サイト構成

### ページ構成
- `/` - ホーム（店舗紹介・特集）
- `/menu` - メニュー（蕎麦・焼鳥・定食・ドリンク）
- `/store-info` - 店舗情報（営業時間・アクセス）
- `/contact` - お問い合わせ・ご要望
- `/dining-philosophy` - お店の理念・こだわり

### ディレクトリ構成

```
public/
├── image/                   # 配信用画像（WebP/SVG最適化済み）
│   ├── ichigo_ichibi_logo.svg
│   ├── soba.webp
│   ├── yakitori.webp
│   └── ...
├── fonts/
│   └── yuji-syuku/          # 自前ホストフォント
│       ├── yuji-syuku.woff2
│       ├── yuji-syuku.ttf
│       └── yuji-syuku.css
├── service-worker.js        # PWA Service Worker
├── manifest.json           # PWA マニフェスト
├── sitemap.xml             # SEO用サイトマップ
└── robots.txt              # 検索エンジン向け設定

src/
├── components/
│   ├── Layout.tsx          # 共通レイアウト
│   ├── LazyImage.tsx       # 遅延読み込み画像コンポーネント
│   ├── PageTransitionSplash.tsx
│   ├── social/             # SNS連携コンポーネント
│   └── ui/                 # 再利用可能UIコンポーネント
├── pages/
│   ├── Home.tsx           # ホームページ
│   ├── Menu.tsx           # メニューページ
│   ├── StoreInfo.tsx      # 店舗情報
│   ├── Contact.tsx        # お問い合わせページ
│   └── DiningPhilosophy.tsx
├── hooks/
│   └── useWebWorker.ts    # Web Worker フック
├── lib/
│   └── utils.ts           # ユーティリティ関数
├── index.css              # グローバルスタイル
└── main.tsx               # エントリーポイント
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

### フロントエンド最適化
- **Code Splitting**: React.lazy + Suspenseによるページ単位の遅延ロード
- **画像最適化**: WebP形式 + Intersection Observer による遅延読み込み
- **フォント最適化**: WOFF2プリロード + 自前ホストでFOUT最小化
- **バンドル最適化**: Vite + Terserによる圧縮とチャンク分割
- **Web Worker**: バックグラウンドでのパフォーマンス測定と画像プリロード
- **クリティカルCSS**: インライン化による初期レンダリング高速化

### キャッシュ戦略
- **Service Worker**: `public/service-worker.js`
  - プリキャッシュ: 主要アセット + フォント + 画像
  - ランタイムキャッシュ: キャッシュファースト戦略
  - ナビゲーション: `/` へのフォールバック
- **ブラウザキャッシュ**: 静的アセット長期キャッシュ（1年）

## PWA対応

- **マニフェスト**: `public/manifest.json` でアプリ化対応
- **オフライン対応**: Service Workerによるリソースキャッシュ
- **インストール**: ホーム画面追加対応

## SEO最適化

- **サイトマップ**: `public/sitemap.xml` - 全ページ最新情報
- **Robots.txt**: `public/robots.txt` - 検索エンジン最適化
- **構造化データ**: JSON-LD形式のレストラン情報
- **メタデータ**: Open Graph + Twitter Cards対応

## デプロイ・本番環境

### Netlify設定
- **設定ファイル**: `netlify.toml`
- **ドメイン**: https://i-chi-bi.com
- **ビルドコマンド**: `npm run build`
- **公開ディレクトリ**: `dist`
- **リダイレクト**: SPA用の`/*`→`/index.html`設定

### キャッシュヘッダー
- 静的アセット: `Cache-Control: public, max-age=31536000, immutable`
- HTML: `Cache-Control: public, max-age=0, must-revalidate`
- フォント: 適切なContent-Type設定

## トラブルシューティング

### キャッシュ関連
- **フォント表示問題**: ブラウザのハードリロード（Ctrl+Shift+R）
- **Service Worker問題**: DevTools → Application → Service Workers → Unregister
- **古いキャッシュ**: `public/service-worker.js`の`CACHE_NAME`をインクリメント

### ビルド・開発
- **型エラー**: `npm run lint`で確認
- **依存関係**: `npm install`で再インストール
- **画像404**: `public/image/`に配置、パスは`/image/...`

## プロジェクト情報

- **ライセンス**: プライベート（店舗専用）
- **著作権**: 画像・文章の権利は一期一美に帰属
- **最終更新**: 2025年1月

# ロゴのLCPパフォーマンス最適化

## 現在の状況
- ロゴファイルサイズ: 22KB（最適化が必要）
- 複数サイズのロゴファイルが存在するが、すべて同じサイズ
- LCPパフォーマンスが悪い

## 実装済みの最適化

### 1. プリロード
- ロゴをHTMLのheadセクションでプリロード
- ページ読み込み時に優先的にロゴを取得

### 2. 読み込み最適化
- `fetchPriority="high"` - 高優先度で読み込み
- `loading="eager"` - 遅延読み込みなし
- `decoding="async"` - 非同期デコード

### 3. シンプルな実装
- srcSetとsizesを削除してシンプルに
- 単一のロゴファイルを使用

## 推奨される手動最適化

### 1. ロゴファイルの最適化

#### 現在のファイルサイズ
- ichigo_ichibi_logo.webp: 22KB
- ichigo_ichibi_logo-80.webp: 22KB
- ichigo_ichibi_logo-96.webp: 22KB
- ichigo_ichibi_logo-192.webp: 22KB

#### 推奨サイズ
- **メインロゴ**: 96x96px、5-8KB
- **小サイズ**: 80x80px、4-6KB
- **大サイズ**: 192x192px、8-12KB

### 2. 最適化手順

#### ImageMagickを使用する場合：
```bash
# メインロゴ（96x96px）
convert ichigo_ichibi_logo.webp -resize 96x96 -quality 85 ichigo_ichibi_logo-96-optimized.webp

# 小サイズ（80x80px）
convert ichigo_ichibi_logo.webp -resize 80x80 -quality 85 ichigo_ichibi_logo-80-optimized.webp

# 大サイズ（192x192px）
convert ichigo_ichibi_logo.webp -resize 192x192 -quality 85 ichigo_ichibi_logo-192-optimized.webp
```

#### オンラインツールを使用する場合：
1. [Squoosh](https://squoosh.app/) を使用
2. ロゴをアップロード
3. 各サイズにリサイズ
4. WebP形式で圧縮率85%に設定
5. 最適化された画像をダウンロード

### 3. 最適化後の実装

最適化後は、srcSetを再度有効にできます：

```jsx
<img 
  src="/ichigo_ichibi_logo.webp" 
  alt="一期一美" 
  className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-lg"
  width="96"
  height="96"
  fetchPriority="high"
  loading="eager"
  decoding="async"
  sizes="(max-width: 768px) 80px, 96px"
  srcSet="/ichigo_ichibi_logo-80.webp 80w, /ichigo_ichibi_logo-96.webp 96w, /ichigo_ichibi_logo-192.webp 192w"
/>
```

## 期待される改善効果

最適化後は以下の改善が期待されます：
- ロゴファイルサイズ: 60-70%削減
- LCP (Largest Contentful Paint): 20-30%改善
- ページ読み込み速度: 10-15%改善

## 確認方法

最適化後は以下を確認してください：
1. PageSpeed InsightsでLCPスコアを確認
2. ロゴファイルサイズを確認
3. ブラウザの開発者ツールでロゴの読み込み時間を確認
4. すべてのデバイスでロゴが正しく表示されることを確認

## 注意事項
- ロゴの品質を保ちながら最適化してください
- バックアップを取ってから最適化を実行してください
- 最適化後はすべてのページでロゴが正しく表示されることを確認してください 
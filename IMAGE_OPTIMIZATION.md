# 画像最適化ガイド

## 現在の状況
- すべての画像はWebP形式で提供されています
- 画像サイズが大きすぎる可能性があります
- 圧縮率を改善する余地があります

## 推奨される最適化

### 1. 画像サイズの最適化
背景画像として使用される画像は以下のサイズに最適化してください：

- **soba.webp**: 1920x1080px、圧縮率75%
- **yakitori.webp**: 1920x1080px、圧縮率75%
- **nihonnshu.webp**: 1920x1080px、圧縮率75%

### 2. 手動最適化手順

#### ImageMagickを使用する場合：
```bash
# soba.webp の最適化
convert public/image/soba.webp -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 75 public/image/soba-optimized.webp

# yakitori.webp の最適化
convert public/image/yakitori.webp -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 75 public/image/yakitori-optimized.webp

# nihonnshu.webp の最適化
convert public/image/nihonnshu.webp -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 75 public/image/nihonnshu-optimized.webp
```

#### オンラインツールを使用する場合：
1. [Squoosh](https://squoosh.app/) を使用
2. 画像をアップロード
3. サイズを1920x1080に設定
4. WebP形式で圧縮率75%に設定
5. 最適化された画像をダウンロード

### 3. 実装済みの最適化

#### プリロード
- 重要な画像（soba.webp、yakitori.webp）をプリロード
- HTMLのheadセクションに追加済み

#### 遅延読み込み
- 非重要な画像にloading="lazy"を適用
- fetchPriority="high"を重要な画像に適用

#### Vite設定
- WebPファイルをアセットとして認識するように設定
- キャッシュヘッダーを設定

### 4. 期待される改善効果

最適化後は以下の改善が期待されます：
- 画像ファイルサイズ: 30-50%削減
- ページ読み込み速度: 20-30%改善
- LCP (Largest Contentful Paint): 15-25%改善

### 5. 確認方法

最適化後は以下を確認してください：
1. PageSpeed Insightsでスコアを確認
2. 画像ファイルサイズを確認
3. ブラウザの開発者ツールで読み込み時間を確認

## 注意事項
- 画像の品質を保ちながら最適化してください
- バックアップを取ってから最適化を実行してください
- 最適化後はすべてのページで画像が正しく表示されることを確認してください 
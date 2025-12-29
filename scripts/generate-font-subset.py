#!/usr/bin/env python3
"""
フォントサブセット生成スクリプト
プロジェクト内のソースファイルから使用されている文字を抽出し、
必要な文字のみを含むサブセットフォントを生成します。
"""

import os
import re
import sys
from pathlib import Path

def extract_characters_from_files():
    """プロジェクト内のソースファイルから使用されている文字を抽出"""
    project_root = Path(__file__).parent.parent
    src_dir = project_root / 'src'
    index_html = project_root / 'index.html'
    
    characters = set()
    
    # ひらがな（全文字）
    hiragana = ''.join([chr(i) for i in range(0x3041, 0x3097)])  # あ-ん
    characters.update(hiragana)
    
    # カタカナ（全文字）
    katakana = ''.join([chr(i) for i in range(0x30A1, 0x30F7)])  # ア-ン
    characters.update(katakana)
    
    # 全角数字・記号
    characters.update('０１２３４５６７８９')
    characters.update('、。・「」（）【】『』【】〜ー')
    
    # ASCII文字
    characters.update('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~')
    
    # プロジェクト内のすべてのファイルから文字を抽出
    print("Scanning source files for characters...")
    
    # ソースファイルから文字を抽出（より徹底的に）
    file_count = 0
    # すべてのファイルをスキャン
    for file_path in src_dir.rglob('*'):
        if file_path.is_file() and file_path.suffix in ['.tsx', '.ts', '.jsx', '.js', '.css']:
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    file_count += 1
                    
                    # 1. 文字列リテラル内の文字を抽出（シングルクォート、ダブルクォート、テンプレートリテラル）
                    string_literals = re.findall(r'["\']([^"\']*)["\']', content)
                    for literal in string_literals:
                        characters.update(literal)
                    
                    # 2. テンプレートリテラル（バッククォート）から抽出
                    template_literals = re.findall(r'`([^`]*)`', content)
                    for template in template_literals:
                        # 変数展開部分を除外
                        template_clean = re.sub(r'\$\{[^}]*\}', '', template)
                        characters.update(template_clean)
                    
                    # 3. JSX内のテキストを抽出（>と<の間のテキスト、より包括的に）
                    jsx_text = re.findall(r'>([^<{]+)<', content)
                    for text in jsx_text:
                        # 変数名やクラス名、空白のみを除外
                        text_clean = text.strip()
                        if text_clean and not re.match(r'^[a-zA-Z_$][a-zA-Z0-9_$]*$', text_clean):
                            characters.update(text_clean)
                    
                    # 4. JSXの属性値から抽出（alt, title, aria-labelなど）
                    attr_values = re.findall(r'(?:alt|title|aria-label|placeholder|content|description|name|value)="([^"]*)"', content, re.IGNORECASE)
                    for attr_val in attr_values:
                        characters.update(attr_val)
                    
                    # 5. コメント内の文字も抽出
                    comments = re.findall(r'//.*?$|/\*.*?\*/', content, re.MULTILINE | re.DOTALL)
                    for comment in comments:
                        characters.update(comment)
                    
                    # 6. CSSファイルの場合は、すべてのテキストを抽出
                    if file_path.suffix == '.css':
                        # CSS内の文字列やコメントから抽出
                        css_content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
                        css_strings = re.findall(r'["\']([^"\']*)["\']', css_content)
                        for css_str in css_strings:
                            characters.update(css_str)
            except Exception as e:
                print(f"Warning: Could not read {file_path}: {e}", file=sys.stderr)
    
    print(f"Scanned {file_count} source files")
    
    # index.htmlからも抽出（より徹底的に）
    if index_html.exists():
        try:
            with open(index_html, 'r', encoding='utf-8') as f:
                content = f.read()
                # HTMLテキストコンテンツから文字を抽出（タグを除去）
                text_content = re.sub(r'<script[^>]*>.*?</script>', '', content, flags=re.DOTALL | re.IGNORECASE)
                text_content = re.sub(r'<style[^>]*>.*?</style>', '', text_content, flags=re.DOTALL | re.IGNORECASE)
                text_content = re.sub(r'<[^>]+>', '', text_content)
                characters.update(text_content)
                
                # メタタグや属性値からも抽出
                meta_content = re.findall(r'content="([^"]*)"', content, re.IGNORECASE)
                for meta in meta_content:
                    characters.update(meta)
                
                # title, alt, placeholderなどの属性値も抽出
                attr_values = re.findall(r'(?:title|alt|placeholder|aria-label|label)="([^"]*)"', content, re.IGNORECASE)
                for attr_val in attr_values:
                    characters.update(attr_val)
        except Exception as e:
            print(f"Warning: Could not read {index_html}: {e}", file=sys.stderr)
    
    # データファイルからも抽出
    data_dir = project_root / 'src' / 'data'
    if data_dir.exists():
        for file_path in data_dir.rglob('*.{ts,tsx,js,jsx,json}'):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # JSONやデータファイル内の文字を抽出
                    characters.update(content)
            except Exception as e:
                print(f"Warning: Could not read {file_path}: {e}", file=sys.stderr)
    
    # レビューデータからも抽出
    ratings_json = project_root / 'public' / 'ratings.json'
    if ratings_json.exists():
        try:
            with open(ratings_json, 'r', encoding='utf-8') as f:
                content = f.read()
                characters.update(content)
        except Exception as e:
            print(f"Warning: Could not read {ratings_json}: {e}", file=sys.stderr)
    
    # 日本語の常用漢字範囲を追加（CJK統合漢字の基本範囲）
    # U+4E00-9FFF: CJK統合漢字
    # 実際の文字はファイルから抽出したもののみを使用するが、
    # 範囲指定でフォールバックを確保
    print(f"Extracted {len(characters)} unique characters from files")
    
    return sorted(characters)

def generate_subset_command(characters, input_font, output_font):
    """pyftsubsetコマンドを生成"""
    # 文字列をUnicodeコードポイントの範囲に変換
    chars_str = ''.join(characters)
    
    print(f"\nTotal unique characters: {len(characters)}")
    print(f"Sample characters: {chars_str[:200]}...")
    
    # 日本語文字の範囲を確認
    japanese_chars = [c for c in characters if ord(c) >= 0x3040 and ord(c) <= 0x9FFF]
    print(f"Japanese characters (Hiragana/Katakana/Kanji): {len(japanese_chars)}")
    
    # pyftsubsetコマンド
    # --textで指定した文字のみを含める（サイズを抑えるため）
    cmd = [
        'pyftsubset',
        str(input_font),
        f'--text={chars_str}',
        '--flavor=woff2',
        f'--output-file={output_font}',
        '--layout-features=*',
        '--glyph-names',
    ]
    
    return cmd

def main():
    project_root = Path(__file__).parent.parent
    fonts_dir = project_root / 'public' / 'fonts' / 'yuji-syuku'
    # 新しいTTFファイルを優先的に使用
    new_ttf = project_root / 'public' / 'fonts' / 'Yuji_Syuku' / 'YujiSyuku-Regular.ttf'
    old_woff2 = fonts_dir / 'yuji-syuku.woff2'
    output_font = fonts_dir / 'yuji-syuku-subset.woff2'
    
    # 入力フォントを決定（新しいTTFを優先）
    if new_ttf.exists():
        input_font = new_ttf
        print(f"Using new TTF font: {input_font}")
    elif old_woff2.exists():
        input_font = old_woff2
        print(f"Using existing WOFF2 font: {input_font}")
    else:
        print(f"Error: Input font not found", file=sys.stderr)
        print(f"  Checked: {new_ttf}", file=sys.stderr)
        print(f"  Checked: {old_woff2}", file=sys.stderr)
        sys.exit(1)
    
    print("Extracting characters from source files...")
    characters = extract_characters_from_files()
    
    print(f"\nGenerating subset font with {len(characters)} characters...")
    cmd = generate_subset_command(characters, input_font, output_font)
    
    print("\nTo generate the subset font, run:")
    print(" ".join(cmd))
    print("\nOr install fonttools and run:")
    print(f"pip install fonttools[woff]")
    print(" ".join(cmd))
    
    # pyftsubsetが利用可能な場合は実行
    import shutil
    if shutil.which('pyftsubset'):
        print("\nExecuting pyftsubset...")
        import subprocess
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode == 0:
            print(f"✓ Successfully generated {output_font}")
            print(f"  Original size: {input_font.stat().st_size / 1024:.1f} KB")
            print(f"  Subset size: {output_font.stat().st_size / 1024:.1f} KB")
            reduction = (1 - output_font.stat().st_size / input_font.stat().st_size) * 100
            print(f"  Size reduction: {reduction:.1f}%")
        else:
            print(f"Error: {result.stderr}", file=sys.stderr)
            sys.exit(1)
    else:
        print("\nNote: pyftsubset not found. Install with: pip install fonttools[woff]")

if __name__ == '__main__':
    main()


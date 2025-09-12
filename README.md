# nicovideo-embed-pip

[![GitHub Release](https://img.shields.io/github/v/release/koto28/nicovideo-embed-pip)](https://github.com/KOTO28/nicovideo-embed-pip/releases/latest)
![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/koto28/nicovideo-embed-pip/total)

ニコニコ動画の埋め込みプレイヤーにPicture-in-Pictureを開始するボタンを追加するユーザースクリプト

## 使い方

### インストール

1. 任意のユーザースクリプトマネージャーをインストール
2. [最新のリリース](https://github.com/KOTO28/nicovideo-embed-pip/releases/latest)の `Assets` にある `nicovideo-embed-pip.user.js` をクリック
3. ユーザースクリプトマネージャーの指示に従ってインストール

### 使用方法

1. ニコニコ動画の埋め込みプレイヤーの右下に追加されたアイコンをクリック
2. 動画のPicture-in-Pictureが開始されます

## 注意事項

- Google Chrome + Tampermonkeyでの動作を確認しています。
- Firefoxでは `requestPictureInPicture()` メソッドがサポートされてないため、正しく動作しません。
- ニコニコ動画のページ構造が変更された場合、スクリプトが正常に動作しなくなる可能性があります。

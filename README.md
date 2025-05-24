# Web勉強会プロジェクト

[![参考資料](https://img.shields.io/badge/📚_参考資料-REFERENCES-blue?style=for-the-badge)](./REFERENCES.md)
[![勉強会履歴](https://img.shields.io/badge/🗓️_勉強会履歴-SESSIONS-green?style=for-the-badge)](./STUDY_SESSIONS.md)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-1.0+-fbf0df?style=for-the-badge&logo=bun&logoColor=black)](https://bun.sh/)
[![Drizzle](https://img.shields.io/badge/Drizzle-ORM-c5f74f?style=for-the-badge&logo=drizzle&logoColor=black)](https://orm.drizzle.team/)
[![SQLite](https://img.shields.io/badge/SQLite-003b57?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)

[![Last Commit](https://img.shields.io/github/last-commit/Lunacea/next-learn?style=for-the-badge&logo=github)](https://github.com/Lunacea/next-learn)

Next.jsを使ったWeb開発の学習記録です。

## 📋 概要

このプロジェクトは研究室でのWeb開発勉強会の内容を記録し、実際のコードと合わせて学習を進めるためのリポジトリです。

## 🚀 クイックスタート

```bash
# リポジトリをクローン
git clone https://github.com/Lunacea/next-learn.git
cd next-learn

# 依存関係をインストール
bun install

# 開発サーバーを起動
bun dev
```

## 💬 コミュニティ

研究室Discord「STQ研究室」でファイル共有や質問対応を行っています。

## 📚 学習内容

**フロントエンド開発を中心としたWeb開発スキル**の習得を目指します。

### 主要トピック

| 技術分野                   | 学習内容                                                      |
| -------------------------- | ------------------------------------------------------------- |
| **JavaScript基礎**   | クロージャ、プロトタイプ、async/await、ES6+構文               |
| **TypeScript**       | 型システム、ジェネリクス、型ガード                            |
| **React/Next.js**    | コンポーネント設計、Hooks、App Router、サーバーコンポーネント |
| **CSS/スタイリング** | Flexbox/Grid、レスポンシブデザイン、Tailwind CSS             |
| **UI/UX設計**        | デザインシステム、アクセシビリティ、Figma                     |
| **開発ツール**       | Biome/ESLint、Git/GitHub             |
| **API/データ**       | REST API、GraphQL、WebSocket                                   |
| **デプロイ/運用**    | Vercel、Cloudflare、GitHub Actions                    |

### 📖 参考資料

学習に役立つ参考資料は [REFERENCES.md](./REFERENCES.md) をご覧ください。

## 🗓️ 勉強会履歴

これまでの勉強会の記録は [STUDY_SESSIONS.md](./STUDY_SESSIONS.md) をご覧ください。

## 🛠️ 技術スタック

| カテゴリ                 | 技術                 |
| ------------------------ | -------------------- |
| **フレームワーク** | Next.js 15, React    |
| **言語**           | TypeScript           |
| **スタイリング**   | Tailwind CSS         |
| **データベース**   | SQLite + Drizzle ORM |
| **ランタイム**     | Bun                  |
| **開発ツール**     | VSCode, Git, GitHub  |

## 📁 プロジェクト構造

```text
next-learn/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # ルートレイアウト
│   │   └── page.tsx          # ホームページ
│   ├── components/           # 再利用可能コンポーネント
│   └── db/                   # データベース関連
│       └── schema.ts         # DBスキーマ定義
├── drizzle/                  # マイグレーション
├── public/                   # 静的ファイル
├── .env                      # 環境変数
├── drizzle.config.ts         # Drizzle設定
└── package.json              # 依存関係
```

## 🔧 開発コマンド

```bash
# 開発サーバー起動
bun dev

# データベース操作
bunx drizzle-kit generate    # マイグレーション生成
bunx drizzle-kit push        # スキーマ適用
bunx drizzle-kit studio      # DB管理画面

# ビルド
bun run build

# 本番環境起動
bun start
```

## 🎯 次のステップ

研究室勉強会で予定している今後のテーマです。  
これまでの学習内容を実際のWebサイト制作で活用していきます。

### 📱 フロントエンド基礎固め
- [ ] **簡単なTodoアプリの作成** - React Hooksとローカルストレージを使った実装
- [ ] **プロフィールサイトの制作** - Tailwind CSSでレスポンシブデザイン
- [ ] **CSSアニメーションの追加** - ホバーエフェクトやページ遷移の改善

### 🔗 サーバーサイド機能の導入
- [ ] **API Routes の実装** - Next.js API機能でバックエンド処理を作成
- [ ] **データベース連携** - 既存のDrizzle ORMとAPI Routesの組み合わせ
- [ ] **フォーム処理の実装** - サーバーサイドでのデータ送信・バリデーション

### 🌐 フルスタックアプリケーション
- [ ] **ブログ風サイトの構築** - DB連携とServer Componentを活用
- [ ] **Vercel/Cloudflareへのデプロイ** - フルスタックアプリケーションの本番公開

## 📄 ライセンス

このプロジェクトは学習目的で作成されています。

## 🤝 コントリビューション

勉強会メンバーからのプルリクエストを歓迎します。質問や提案がある場合はDiscordでお気軽にお声掛けください。

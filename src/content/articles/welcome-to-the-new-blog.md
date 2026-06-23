---
title: ブログをローカル Markdown 管理に移行しました
description: 記事データを外部 CMS からリポジトリ内の Markdown ファイルへ移行しました。これはその動作確認用のサンプル記事です。
createdAt: '2026-06-23T00:00:00.000Z'
updatedAt: '2026-06-23T00:00:00.000Z'
author: mktu
categories: tech
ogImage: /ogp-img.png
---

## はじめに

この記事はサンプルです。記事は `src/content/articles/` 配下の Markdown ファイルとして管理され、ビルド時に HTML へ変換されます。

## 記法の確認

**太字**、_斜体_、[リンク](https://kit.svelte.dev/) などの基本的な Markdown 記法が使えます。

- リスト項目その1
- リスト項目その2
- リスト項目その3

> 引用ブロックの表示確認です。

### コードブロック

```ts
const greet = (name: string): string => `Hello, ${name}!`;
console.log(greet('world'));
```

以上、サンプル記事でした。

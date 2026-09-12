---
title: '今まで作ってきたものについて（ポートフォリオ）'
slug: 'portfolios'
description: '今まで作ってきたサービスを簡単に紹介したいと思います。'
createdAt: '2022-04-17T14:04:54.266Z'
updatedAt: '2026-08-30T00:00:00.000Z'
author: 'mktu'
categories: 'developers'
ogImage: '/images/articles/portfolios/jess-bailey-q10VITrVYUM-unsplash.jpg'
coverImage: '/images/articles/portfolios/jess-bailey-q10VITrVYUM-unsplash.jpg'
---

# 作ってきたサービス

今まで作ってきたサービスを簡単に紹介したいと思います。

## RecipeHub(2026/1〜)

<img src="/images/articles/portfolios/RecipeHub.png" alt="RecipeHub の画面" width="320" height="542" />

[RecipeHub](https://recipe-app-wine-three.vercel.app/lp)は、複数のレシピサイトに散らばったお気に入りレシピを LINE で集約・検索できるレシピ図鑑アプリです。レシピの URL を LINE に送るだけで料理名や材料が登録され、あとは「豚肉」のようななんとなく覚えているキーワードを送るだけで探し出せます。表記ゆれの多い食材名は辞書による名寄せとベクトル検索で吸収しており、「豚こま切れ肉」で登録したレシピも「豚肉」で拾えるようにしています。技術的には Next.js + Supabase + Gemini + LINE(LIFF) を使っており、設計から実装まで Claude Code によるフル AI コーディングで開発したのが今までとの大きな違いです。

### 関連記事など

このアプリを作る上で気をつけたことや関連技術をまとめています。

- [LINEで使えるレシピのブックマークアプリを作ってみた（Zenn）](https://zenn.dev/mktu/articles/000e97357492c5)
- [ソースコード（GitHub）](https://github.com/mktu/recipe-app)

## Bookmark Board(2021/4〜)

![](/images/articles/portfolios/App.png)

[Bookmark Board](https://bookmark-board.com/)はシンプルなブックマーク管理アプリです。管理機能に加えて、ブックマークの共有・共同編集やChrome拡張・Lineとの連携機能なども備えてます。技術的にはNext.js + Firebase + Vercelを使っており、Domainの取得やOGP対応、パフォーマンスなども含めて、今までよりも本格的なサービスを目指し製作したものになります。

### 関連記事など

このアプリを作る上で気をつけたことや関連技術をまとめています。

- [React / Firebaseでブックマーク管理アプリを作ってみた【個人開発】（Qiita）](https://qiita.com/mktu/items/ac8b4707dda339e32a13)
- [Chrome拡張+React+Firebaseで認証機能を実装する（Zenn）](https://zenn.dev/mktu/articles/9f17fe89e74282)

## Mushiqui(2019/12~)

![](/images/articles/portfolios/Mushiqui.png)

[Mushiqui](https://mushiqui-ab6ad.web.app/?lng=jp)は簡単な虫食いクイズアプリです。マークダウンっぽい書き方で穴埋めクイズが作成できます。技術的にはReact + Firebaseを使用しており、初めてReactを使って制作したWEBアプリになります。

### 関連記事など

このアプリを作る上で気をつけたことや関連技術をまとめています。

- [WEB初心のプログラマーがReact+Firebase+Algoliaでクイズアプリを作成するまで（Qiita）](https://qiita.com/mktu/items/f7a2c326541a951290f0)

#### 使用技術
* Next.js
* Tailwind-CSS
* TypeScript
---
###使用API
* https://pokeapi.co/api/v2/pokemon/number
* https://pokeapi.co/api/v2/pokemon-species/number
---
今回のサイトはAPIで非同期処理を使ったポケモン図鑑です。
そして、今回は初めてNext.js、Tailwind-CSS、TypeScript使ってサイトを制作しました。
主な目的はNext.jsを実際に使ってサイトを制作して勉強することです。
まず初めにlayoutファイルにサイドバーを実装しました。
Next.jsはファイルを作成すると自動的にファイル名をURLのパスにしてくれるので、
効率よく実装できました。
そして、サイドバーはどのページでも共通なのでlayoutに記述することで不要なレンタリングを避けました。
メインのポケモンの情報はAPIから非同期処理で取得し、コンポーネント化することでmapなど繰り返しの利用や、
細かな変更に対応できるようにしました。
サイトを開いたときに取得するポケモンの数は１０２５体なので一気に取得するとどうしても遅くなってしまうので、
速さを上げるためにまずは３０体を取得したのち時間経過で残りを数回に分けて取得していきました。

## Personal_app
・概要
   他のuserに質問ができ、それに対してコメントが出来る  
・本番環境
   http://18.178.86.145/
・制作背景(意図)
   Qiitaなどの情報共有サービスを使って欲しいと感じた物を追加したアプリとなってる
トップページ  
![55EADA34-6006-4516-B8D5-8C3A0BDD8D10_1_105_c](https://user-images.githubusercontent.com/57927265/73331069-fbd07080-42a5-11ea-86e9-19253fb79b40.jpeg)


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string｜null: false,unique: true|
|name|sting|null: false,unique: true|
|password|string|null: false|

## contentsテーブル
|Column|Type|Options|
|------|----|-------|
|title|string|null: false,unique: true|
|text|text|null: false|
|image|string||
|users_id|integer|null: false,foreign_key: true|

## genreテーブル
|Column|Type|Options|
|------|----|-------|
|genre|string|null: false|
|language|string|null: false,unique: true|
|content_id|integer|null: false,foreign_key: true|

## answersテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|string||
|content_id|integer|null: false,foreign_key: true|
|users_id|integer|null: false,foreign_key: true|

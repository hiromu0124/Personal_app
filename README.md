## Personal_app

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

# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
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

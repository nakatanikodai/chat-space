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

## user テーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|
|mail|integer|
|password|integer|

## message テーブル
|Column|Type|Options|
|------|----|-------|
|body|string|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|



## groups_users テーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

## Association
- belongs_to :group
- belongs_to :user
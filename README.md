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
|user_id|integer|null: false, foreign_key: true|
|name|string|null: false|
|mail|integer|null: false|
|password|integer|null: false|
 ## Association
 - has_many : messages
 - has_many : groups
 - has_many : groups_users, through: :groups_users
 - has_many : groups_users

## message テーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|string|
|image|string|
## Association
- belongs_to :user
- belongs_to :group
 

## group テーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|user_id|string|null: false|
## Association
- has_many : users, through: :groups_users
- has_many : messages
- has_many : groups_users


## groups_users テーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
## Association
- belongs_to :group
- belongs_to :user
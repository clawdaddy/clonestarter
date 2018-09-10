insert into reward_item
( digital, name, creator_id)
values ($1, $2, $3)
returning id as item_id, digital, name, creator_id;
insert into reward_item
( number, digital, name, creator_id)
values ($1, $2, $3, $4)
returning id, reward_id;
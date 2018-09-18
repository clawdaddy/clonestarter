update reward_item
set digital = $1,
    name = $2
where id=$3
returning id as item_id, digital, name, creator_id;
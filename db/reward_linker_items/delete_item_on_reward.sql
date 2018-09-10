delete from reward_linker_item
where id = $1
returning *;
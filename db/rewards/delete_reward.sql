delete from rewards
where id = $1
returning *;
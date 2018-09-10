insert into reward_linker_item
(reward_id, item_id, number)
VALUES
($1, $2, $3);
select item_id, rli.id as linker_id, rli.number, ri.digital, ri.name, ri.creator_id from reward_linker_item as rli
join reward_item as ri on rli.item_id = ri.id
where rli.item_id = $2;
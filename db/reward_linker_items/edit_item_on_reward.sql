update reward_linker_item
set number =$2
where id=$1
returning *;
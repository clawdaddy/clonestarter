update rewards
set  
title = $2, 
pledge_amount = $3, 
description = $4, 
estimated_delivery = $5, 
shipping_details = $6, 
reward_limit_enabled = $7, 
backer_limit = $8, 
reward_limit_end_date = $9, 
reward_limit_start_date = $10
where id = $1
returning *;
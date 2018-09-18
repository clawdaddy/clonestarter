insert into rewards
(project_id, title, pledge_amount, description, estimated_delivery, shipping_details, reward_limit_enabled, backer_limit, reward_limit_end_date, reward_limit_start_date)
values
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
returning id;
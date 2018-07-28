update project
set category = $2,
    idea = $3,
    country = $4,
    image = $5,
    title= $6,
    subcategory = $7,
    project_location = $8,
    funding_goal = $9,
    end_date_time = $10
where id=$1
returning *;
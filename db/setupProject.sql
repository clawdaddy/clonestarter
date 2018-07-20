insert into project
(category, idea, country)
VALUES ($1,$2,$3)
returning *;
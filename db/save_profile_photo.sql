update about_you
set profile_photo = $1
where id = $2
returning *;
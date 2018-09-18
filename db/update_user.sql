update about_you
set 
    profile_photo = $2,
    your_location = $3,
    biography = $4,
    name = $5
where id = $1
returning *;
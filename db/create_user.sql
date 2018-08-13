insert into about_you
(auth0_id, contact_email, name, profile_photo)
values($1, $2, $3, $4)
returning *;
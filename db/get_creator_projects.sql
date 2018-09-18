select creator_id as id, project_id, category, auth0_id, contact_email, your_location, biography, name, profile_photo, idea, country, image, subcategory, project_location, funding_goal, end_date_time, title from about_you as au 
join project_creators as pc 
on au.id = pc.creator_id
join project as p 
on pc.project_id = p.id
where au.id=$1;
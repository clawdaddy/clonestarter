select * from about_you as au 
join project_creators as pc 
on au.id = pc.creator_id
join project as p 
on pc.project_id = p.id
where au.id=$1;
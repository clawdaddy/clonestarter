update project
set image = $1
where id = $2
returning image;

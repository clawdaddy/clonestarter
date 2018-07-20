CREATE TABLE IF NOT EXISTS project (
    id SERIAL PRIMARY KEY,
    category varchar(30),
    idea varchar(135),
    country varchar(50),
    image text,
    title varchar(60),
    subcategory varchar(30),
    project_location varchar(50),
    funding_duration integer,
    funding_goal integer
)
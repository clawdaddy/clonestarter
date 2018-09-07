CREATE TABLE IF NOT EXISTS project (
    id SERIAL PRIMARY KEY,
    category varchar(30),
    idea varchar(135),
    country varchar(50),
    image text,
    title varchar(60),
    subcategory varchar(30),
    project_location varchar(50),
    funding_goal integer,
    end_date DATE
);
CREATE TABLE IF NOT EXISTS about_you(
    id serial primary key,
    profile_photo text,
    name varchar(30),
    biography text,
    your_location varchar(50),
    contact_email varchar(50),
    auth0_id VARCHAR
);

CREATE TABLE IF NOT EXISTS rewards(
    id SERIAL PRIMARY KEY,
    project_id integer,
    title text,
    pledge_amount float,
    description text,
    estimated_delivery date,
    shipping_details varchar(30),
    reward_limit_enabled boolean,
    backer_limit integer,
    reward_limit_end_date DATE,
    reward_limit_start_date DATE
);
CREATE TABLE IF NOT EXISTS project_details(
    id serial primary key,
    project_id integer,
    project_video text,
    risks_and_challenges text
);
create table if not exists project_description(
    id serial primary key,
    project_details_id integer,
    type varchar(30),
    link_url text,
    text text
);
CREATE TABLE IF NOT EXISTS about_you_websites(
    id SERIAL PRIMARY KEY,
    about_you_id integer,
    website text
);
CREATE TABLE IF NOT EXISTS pledges (
    id SERIAL PRIMARY KEY,
    sponsor_id integer,
    project_id integer,
    pledge integer
);
CREATE TABLE IF NOT EXISTS project_creators (
    id SERIAL PRIMARY KEY,
    creator_id integer,
    project_id integer
);
create table IF NOT EXISTS reward_item
(
    id serial primary key,
    reward_id integer,
    number integer,
    digital boolean,
    name varchar(70)
)
CREATE TABLE bur_oak (

id SERIAL PRIMARY KEY,

recorded TIMESTAMP DEFAULT current_date,

class VARCHAR(80),

site INT,

breaking_leaf_buds VARCHAR(80),

leaves VARCHAR(80),

increasing_leaf_size VARCHAR(80),

colored_leaves VARCHAR(80),

falling_leaves VARCHAR(80),

flowers_or_flower_buds VARCHAR(80),

open_flowers VARCHAR(80),

pollen_release VARCHAR(80),

fruits VARCHAR(80),

ripe_fruits VARCHAR(80),

recent_fruit_or_seed_drop VARCHAR (80),

notes VARCHAR (250)

);


CREATE TABLE common_buckthorn (

id SERIAL PRIMARY KEY,

recorded TIMESTAMP DEFAULT current_date,

class VARCHAR(80),

site INT,

breaking_leaf_buds VARCHAR(80),

leaves VARCHAR(80),

increasing_leaf_size VARCHAR(80),

colored_leaves VARCHAR(80),

falling_leaves VARCHAR(80),

flowers_or_flower_buds VARCHAR(80),

open_flowers VARCHAR(80),

fruits VARCHAR(80),

ripe_fruits VARCHAR(80),

recent_fruit_or_seed_drop VARCHAR (80),

notes VARCHAR (250)

);


CREATE TABLE common_milkweed (

id SERIAL PRIMARY KEY,

recorded TIMESTAMP DEFAULT current_date,

class VARCHAR(80),

site INT,

initial_growth VARCHAR(80),

leaves VARCHAR(80),

flowers_or_flower_buds VARCHAR(80),

open_flowers VARCHAR(80),

fruits VARCHAR(80),

ripe_fruits VARCHAR(80),

recent_fruit_or_seed_drop VARCHAR (80),

notes VARCHAR (250)

);


CREATE TABLE eastern_bluebird (

id SERIAL PRIMARY KEY,

recorded TIMESTAMP DEFAULT current_date,

class VARCHAR(80),

site INT,

active_individuals VARCHAR(80),

feeding VARCHAR(80),

fruit_or_seed_consumption VARCHAR(80),

insect_consumption VARCHAR(80),

calls_or_song VARCHAR(80),

singing_individuals VARCHAR(80),

territorial_individuals VARCHAR(80),

courtship VARCHAR(80),

mating VARCHAR(80),

nest_building VARCHAR(80),

occupied_nest VARCHAR(80),

nestlings VARCHAR(80),

fledged_young VARCHAR(80),

dead_individuals VARCHAR(80),

dead_nestlings_or_fledglings VARCHAR(80),

individuals_at_feeding_station VARCHAR(80),

notes VARCHAR (250)

);


CREATE TABLE ground_squirrel (

id SERIAL PRIMARY KEY,

recorded TIMESTAMP DEFAULT current_date,

class VARCHAR(80),

site INT,

active_individuals VARCHAR(80),

feeding VARCHAR(80),

young_individuals VARCHAR(80),

dead_individuals VARCHAR(80),

notes VARCHAR (250)

);


CREATE TABLE dark_eyed_junco (

id SERIAL PRIMARY KEY,

recorded TIMESTAMP DEFAULT current_date,

class VARCHAR(80),

site INT,

active_individuals VARCHAR(80),

feeding VARCHAR(80),

fruit_or_seed_consumption VARCHAR(80),

insect_consumption VARCHAR(80),

calls_or_song VARCHAR(80),

singing_individuals VARCHAR(80),

territorial_individuals VARCHAR(80),

courtship VARCHAR(80),

mating VARCHAR(80),

nest_building VARCHAR(80),

occupied_nest VARCHAR(80),

nestlings VARCHAR(80),

fledged_young VARCHAR(80),

dead_individuals VARCHAR(80),

dead_nestlings_or_fledglings VARCHAR(80),

individuals_at_feeding_station VARCHAR(80),

notes VARCHAR (250)

);


CREATE TABLE paper_birch (

id SERIAL PRIMARY KEY,

recorded TIMESTAMP DEFAULT current_date,

class VARCHAR(80),

site INT,

breaking_leaf_buds VARCHAR(80),

leaves VARCHAR(80),

increasing_leaf_size VARCHAR(80),

colored_leaves VARCHAR(80),

falling_leaves VARCHAR(80),

flowers_or_flower_buds VARCHAR(80),

open_flowers VARCHAR(80),

pollen_release VARCHAR(80),

fruits VARCHAR(80),

ripe_fruits VARCHAR(80),

recent_fruit_or_seed_drop VARCHAR (80),

notes VARCHAR (250)

);


CREATE TABLE quaking_aspen (

id SERIAL PRIMARY KEY,

recorded TIMESTAMP DEFAULT current_date,

class VARCHAR(80),

site INT,

breaking_leaf_buds VARCHAR(80),

leaves VARCHAR(80),

increasing_leaf_size VARCHAR(80),

colored_leaves VARCHAR(80),

falling_leaves VARCHAR(80),

flowers_or_flower_buds VARCHAR(80),

open_flowers VARCHAR(80),

pollen_release VARCHAR(80),

fruits VARCHAR(80),

ripe_fruits VARCHAR(80),

recent_fruit_or_seed_drop VARCHAR (80),

notes VARCHAR (250)

);


CREATE TABLE northern_red_oak (

id SERIAL PRIMARY KEY,

recorded TIMESTAMP DEFAULT current_date,

class VARCHAR(80),

site INT,

breaking_leaf_buds VARCHAR(80),

leaves VARCHAR(80),

increasing_leaf_size VARCHAR(80),

colored_leaves VARCHAR(80),

falling_leaves VARCHAR(80),

flowers_or_flower_buds VARCHAR(80),

open_flowers VARCHAR(80),

pollen_release VARCHAR(80),

fruits VARCHAR(80),

ripe_fruits VARCHAR(80),

recent_fruit_or_seed_drop VARCHAR (80),

notes VARCHAR (250)

);


CREATE TABLE ruby_throated_hummingbird (

id SERIAL PRIMARY KEY,

recorded TIMESTAMP DEFAULT current_date,

class VARCHAR(80),

site INT,

active_individuals VARCHAR(80),

feeding VARCHAR(80),

insect_consumption VARCHAR(80),

flower_visitation VARCHAR(80),

calls_or_song VARCHAR(80),

singing_individuals VARCHAR(80),

territorial_individuals VARCHAR(80),

courtship VARCHAR(80),

mating VARCHAR(80),

nest_building VARCHAR(80),

occupied_nest VARCHAR(80),

nestlings VARCHAR(80),

fledged_young VARCHAR(80),

dead_individuals VARCHAR(80),

dead_nestlings_or_fledglings VARCHAR(80),

individuals_at_feeding_station VARCHAR(80),

notes VARCHAR (250)

);

CREATE TABLE pin_oak (

id SERIAL PRIMARY KEY,

recorded TIMESTAMP DEFAULT current_date,

class VARCHAR(80),

site INT,

breaking_leaf_buds VARCHAR(80),

leaves VARCHAR(80),

increasing_leaf_size VARCHAR(80),

colored_leaves VARCHAR(80),

falling_leaves VARCHAR(80),

flowers_or_flower_buds VARCHAR(80),

open_flowers VARCHAR(80),

pollen_release VARCHAR(80),

fruits VARCHAR(80),

ripe_fruits VARCHAR(80),

recent_fruit_or_seed_drop VARCHAR (80),

notes VARCHAR (250)

);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(80) NOT NULL,
    password VARCHAR(200) NOT NULL,
	deleteable BOOLEAN
);
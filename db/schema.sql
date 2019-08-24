-- database schema

CREATE DATABASE burgers_db,

USE burgers_db,

CREATE TABLE burger (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(250) NOT NULL,
    devoured BOOLEAN DEFAULT false
),

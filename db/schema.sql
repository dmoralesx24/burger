-- database schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burgers_name VARCHAR(250) NOT NULL,
    devoured BOOLEAN DEFAULT false
);

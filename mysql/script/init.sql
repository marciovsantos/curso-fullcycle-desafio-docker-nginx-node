CREATE DATABASE nodedb;

USE nodedb;

CREATE TABLE people (
    id      INT             NOT NULL auto_increment,
    name    VARCHAR(255)    NOT NULL,
    PRIMARY KEY (id)
);
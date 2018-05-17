
USE burger_db;

CREATE TABLE burger (
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(50),
	devoured BOOLEAN DEFAULT false,
	current TIMESTAMP NOT NULL DEFAULT NOW(),
	PRIMARY KEY(id)
);
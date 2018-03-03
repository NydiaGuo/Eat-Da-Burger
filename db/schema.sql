
USE pv633r1oaexyrjai;

CREATE TABLE burger (
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(50),
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY(id)
);
-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE groceries (
	id SERIAL PRIMARY KEY,
	item VARCHAR(80) NOT NULL,
	quantity DECIMAL(3,1),
    unit VARCHAR(20) NOT NULL,
    purchased BOOLEAN DEFAULT FALSE
);

-- Dummy info: 
INSERT INTO groceries (item, quantity, unit)
VALUES ('Apples', 4, 'lbs'), 
('Bananas', 3, 'bunches'), 
('Steak', 20.5, 'oz');
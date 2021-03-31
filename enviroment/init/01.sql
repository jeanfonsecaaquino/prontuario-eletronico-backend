CREATE TABLE PATIENT (
    id int,
    name VARCHAR(25),
    birthdate DATE,
    gender ENUM('M', 'F'),
    phone VARCHAR(11),
    weight INT,
    height FLOAT
);

INSERT INTO PATIENT(id, name, birthdate, gender, phone, weight, height) VALUES
(1,'JEAN AQUINO', STR_TO_DATE('1990-04-19', '%Y-%m-%d'), 'M', '21981670333', 80, 1.70)
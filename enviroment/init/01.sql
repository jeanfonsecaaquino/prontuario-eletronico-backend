CREATE TABLE PATIENT (
    id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(25),
    birthdate DATE,
    gender ENUM('M', 'F'),
    phone VARCHAR(11),
    weight INT,
    height FLOAT
);

CREATE TABLE ENCOUNTER (
    id int PRIMARY KEY AUTO_INCREMENT,
    id_patient int NOT NULL,
    encounter_date DATE,
    FOREIGN KEY (id_patient) REFERENCES PATIENT(id)
);

CREATE TABLE OBSERVATION (
    id int PRIMARY KEY AUTO_INCREMENT,
    comment TEXT,
    id_encounter int NOT NULL,

    FOREIGN KEY (id_encounter) REFERENCES ENCOUNTER(id)
);

INSERT INTO PATIENT(id, name, birthdate, gender, phone, weight, height) VALUES
(1,'JEAN AQUINO', STR_TO_DATE('1990-04-19', '%Y-%m-%d'), 'M', '21981670333', 80, 1.70)
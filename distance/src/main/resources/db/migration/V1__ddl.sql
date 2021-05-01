CREATE SCHEMA IF NOT EXISTS transportation;

CREATE TABLE transportation.grade
  (  id         INTEGER NOT NULL,
     schoolShortName       VARCHAR(50),
     gradeLevel       VARCHAR(2),
     PRIMARY KEY (id)
  );

CREATE TABLE transportation.schools
    (  id         INTEGER NOT NULL,
       district VARCHAR(50),
       schoolShortName       VARCHAR(50),
       schoolLongName  VARCHAR(50),
       address       VARCHAR(50),
       city  VARCHAR(50),
       state       VARCHAR(50),
       zipCode  VARCHAR(50),
       phoneNumber       VARCHAR(50),
       website VARCHAR(50),
       PRIMARY KEY (id)
    );

CREATE TABLE transportation.adminSettings
    (  id         INTEGER NOT NULL,
       adminYear       VARCHAR(4),
       activeInd VARCHAR(4),
       regStatus VARCHAR(20),
       openMessage varchar(500),
       closedMessage varchar(500),
       notification1 varchar(500),
       notification2 varchar(500),
       PRIMARY KEY (id)
    );

INSERT INTO transportation.grade(id, schoolShortName, gradeLevel) VALUES      (1, 'SLS', 'K');
INSERT INTO transportation.grade(id, schoolShortName, gradeLevel) VALUES      (2, 'SLS', '1');
INSERT INTO transportation.grade(id, schoolShortName, gradeLevel) VALUES      (3, 'RSS', '2');
INSERT INTO transportation.grade(id, schoolShortName, gradeLevel) VALUES      (4, 'RSS', '3');
INSERT INTO transportation.grade(id, schoolShortName, gradeLevel) VALUES      (5, 'RSS', '4');
INSERT INTO transportation.grade(id, schoolShortName, gradeLevel) VALUES      (6, 'LMS', '5');
INSERT INTO transportation.grade(id, schoolShortName, gradeLevel) VALUES      (7, 'LMS', '6');
INSERT INTO transportation.grade(id, schoolShortName, gradeLevel) VALUES      (8, 'LMS', '7');
INSERT INTO transportation.grade(id, schoolShortName, gradeLevel) VALUES      (9, 'LHS', '8');
INSERT INTO transportation.grade(id, schoolShortName, gradeLevel) VALUES      (10, 'LHS', '9');
INSERT INTO transportation.grade(id, schoolShortName, gradeLevel) VALUES      (11, 'LHS', '10');
INSERT INTO transportation.grade(id, schoolShortName, gradeLevel) VALUES      (12, 'LHS', '11');
INSERT INTO transportation.grade(id, schoolShortName, gradeLevel) VALUES      (13, 'LHS', '12');

INSERT INTO transportation.schools(id, district, schoolShortName, schoolLongName, address, city, state, zipCode, phoneNumber, website)
VALUES (1, 'Littleton', 'SLS', 'SHAKER LANE SCHOOL', '35 Shaker Lane', 'Littleton', 'MA', '01460', '9784863959', 'https://www.littletonps.org');
INSERT INTO transportation.schools(id, district, schoolShortName, schoolLongName, address, city, state, zipCode, phoneNumber, website)
VALUES (2, 'Littleton', 'RSS', 'RUSSEL STREET SCHOOL','57 Russell Street', 'Littleton', 'MA', '01460', '9785402520', 'https://www.littletonps.org');
INSERT INTO transportation.schools(id, district, schoolShortName, schoolLongName, address, city, state, zipCode, phoneNumber, website)
VALUES (3, 'Littleton', 'LMS', 'LITLLETON MIDDLE SCHOOL', '55 Russell Street', 'Littleton', 'MA', '01460', '9784868938', 'https://www.littletonps.org');
INSERT INTO transportation.schools(id, district, schoolShortName, schoolLongName, address, city, state, zipCode, phoneNumber, website)
VALUES (4, 'Littleton', 'LHS', 'LITLLETON HIGH SCHOOL', '56 King Street', 'Littleton', 'MA', '01460', '9789522555', 'https://www.littletonps.org');


INSERT INTO transportation.adminSettings(id, adminYear, activeInd)
VALUES (1, '2021', 'Y');

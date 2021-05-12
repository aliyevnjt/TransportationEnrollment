CREATE SCHEMA IF NOT EXISTS transportation;

CREATE TABLE transportation.grade
(
    id              INTEGER NOT NULL,
    school_short_name VARCHAR(50),
    grade_level      VARCHAR(2),
    PRIMARY KEY (id)
);

CREATE TABLE transportation.schools
(
    id              INTEGER NOT NULL,
    district        VARCHAR(50),
    school_short_name VARCHAR(50),
    school_long_name  VARCHAR(50),
    address         VARCHAR(50),
    city            VARCHAR(50),
    state           VARCHAR(50),
    zip_code         VARCHAR(50),
    phone_number     VARCHAR(50),
    website         VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE transportation.admin_settings
(
    id            INTEGER NOT NULL,
    admin_year     VARCHAR(4),
    active_ind     VARCHAR(4),
    reg_status     VARCHAR(20),
    open_message   VARCHAR(500),
    closed_message VARCHAR(500),
    notification1 VARCHAR(500),
    notification2 VARCHAR(500),
    PRIMARY KEY (id)
);

CREATE TABLE transportation.users
(
    id         INTEGER NOT NULL,
    admin_year  VARCHAR(4),
    active_ind  VARCHAR(4),
    role_code   INTEGER,
    district   VARCHAR(50),
    first_name  VARCHAR(50),
    last_name   VARCHAR(50),
    email      VARCHAR(50),
    school     VARCHAR(50),
    create_date DATE DEFAULT CURRENT_DATE,
    update_date DATE DEFAULT CURRENT_DATE,
    PRIMARY KEY (id)
);


INSERT INTO transportation.grade(id, school_short_name, grade_level)
VALUES (1, 'SLS', 'K'),
       (2, 'SLS', '1'),
       (3, 'RSS', '2'),
       (4, 'RSS', '3'),
       (5, 'RSS', '4'),
       (6, 'LMS', '5'),
       (7, 'LMS', '6'),
       (8, 'LMS', '7'),
       (9, 'LHS', '8'),
       (10, 'LHS', '9'),
       (11, 'LHS', '10'),
       (12, 'LHS', '11'),
       (13, 'LHS', '12');


INSERT INTO transportation.schools(id, district, school_short_name, school_long_name, address, city, state, zip_code,
                                   phone_number, website)
VALUES (1, 'Littleton', 'SLS', 'SHAKER LANE SCHOOL', '35 Shaker Lane', 'Littleton', 'MA', '01460', '9784863959',
        'https://www.littletonps.org'),
       (2, 'Littleton', 'RSS', 'RUSSEL STREET SCHOOL', '57 Russell Street', 'Littleton', 'MA', '01460', '9785402520',
        'https://www.littletonps.org'),
       (3, 'Littleton', 'LMS', 'LITLLETON MIDDLE SCHOOL', '55 Russell Street', 'Littleton', 'MA', '01460', '9784868938',
        'https://www.littletonps.org'),
       (4, 'Littleton', 'LHS', 'LITLLETON HIGH SCHOOL', '56 King Street', 'Littleton', 'MA', '01460', '9789522555',
        'https://www.littletonps.org');


INSERT INTO transportation.admin_settings(id, admin_year, active_ind)
VALUES (1, '2021', 'Y');


INSERT INTO transportation.users(id, admin_year, active_ind, role_code, district,
                                 first_name, last_name, email, school, create_date, update_date)
VALUES (1, '2021', 'Y', 1, 'Flowlyst', 'Yavuz', 'Keskin',
        'keskinyavuz@gmail.com', 'Flowlyst', '2021-05-02', CURRENT_DATE),
       (2, '2021', 'Y', 1, 'Flowlyst', 'Nijat', 'Aliyev',
        'aliyevnicat@gmail.com', 'Flowlyst', '2021-05-02', CURRENT_DATE),
       (3, '2021', 'Y', 1, 'Flowlyst', 'Aziz', 'Agayev',
        'aziz@agayevconsulting.com', 'Flowlyst', '2021-05-02', CURRENT_DATE),
        (4, '2021', 'Y', 2, 'Littleton', 'Steven', 'Mark',
    'smark@littletonps.org', 'LHS', '2021-05-02', CURRENT_DATE),
       (5, '2021', 'Y', 2, 'Littleton', 'Robin', 'Healy',
        'rhealy@littletonps.org', 'LHS', '2021-05-02', CURRENT_DATE);


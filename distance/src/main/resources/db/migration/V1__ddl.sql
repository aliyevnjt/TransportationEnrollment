CREATE TABLE grade
  (  id         INTEGER NOT NULL,
     level       VARCHAR(50),
     value       VARCHAR(50),
     label  VARCHAR(50),
     PRIMARY KEY (id)
  );

CREATE TABLE schoolnames
    (  id         INTEGER NOT NULL,
       value       VARCHAR(50),
       label  VARCHAR(50),
       PRIMARY KEY (id)
    );

CREATE TABLE school_year
    (  id         INTEGER NOT NULL,
       value       VARCHAR(50)
    );

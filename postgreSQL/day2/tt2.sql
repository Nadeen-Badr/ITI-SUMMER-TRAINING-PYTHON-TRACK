-- Database: iti

-- DROP DATABASE IF EXISTS iti;

-- CREATE DATABASE iti
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;
-- Drop the stu_grades table
DROP TABLE IF EXISTS stu_grades;

-- Drop the stu_subjects table
DROP TABLE IF EXISTS stu_subjects;

-- Drop the student table
DROP TABLE IF EXISTS student;

-- Drop the exam table
DROP TABLE IF EXISTS exam;

-- Drop the subject table
DROP TABLE IF EXISTS subject;

-- Drop the level table
DROP TABLE IF EXISTS level;	
-- Create the level table
CREATE TABLE level (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

-- Create the subject table
CREATE TABLE subject (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    sub_desc TEXT,
    max_score INTEGER
);

-- Create the exam table
CREATE TABLE exam (
    id SERIAL PRIMARY KEY,
    date DATE
);

-- Create the student table
CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    level_id INTEGER REFERENCES level (id) ON DELETE CASCADE
);

-- Create the stu_subjects table
CREATE TABLE stu_subjects (
    stu_id INTEGER REFERENCES student (id) ON DELETE CASCADE,
    sub_id INTEGER REFERENCES subject (id) ON DELETE CASCADE,
    PRIMARY KEY (stu_id, sub_id)
);

-- Create the stu_grades table
CREATE TABLE stu_grades (
    stu_id INTEGER REFERENCES student (id) ON DELETE CASCADE,
    sub_id INTEGER REFERENCES subject (id) ON DELETE CASCADE,
    exam_id INTEGER REFERENCES exam (id) ON DELETE CASCADE,
    grade FLOAT,
    PRIMARY KEY (stu_id, sub_id, exam_id)
);
INSERT INTO level (name)
VALUES ('Beginner'), ('Intermediate'), ('Advanced');

-- Insert data into the subject table
INSERT INTO subject (name, sub_desc, max_score)
VALUES
    ('Mathematics', 'Basic math skills', 100),
    ('Physics', 'Study of matter and energy', 100),
    ('English', 'Language skills and literature', 100);

-- Insert data into the exam table
INSERT INTO exam (date)
VALUES ('2023-07-01'), ('2023-07-05'), ('2023-07-09');

-- Insert data into the student table
INSERT INTO student (name, email, phone, level_id)
VALUES
    ('John Doe', 'john.doe@example.com', '1234567890', 1),
    ('Jane Smith', 'jane.smith@example.com', '9876543210', 2),
    ('Michael Johnson', 'michael.johnson@example.com', '5555555555', 3);

-- Insert data into the stu_subjects table
INSERT INTO stu_subjects (stu_id, sub_id)
VALUES
    (1, 1), (1, 2), (1, 3),
    (2, 1), (2, 3), (2, 2),
    (3, 3), (3, 2), (3, 1);

-- Insert data into the stu_grades table
INSERT INTO stu_grades (stu_id, sub_id, exam_id, grade)
VALUES
    (1, 1, 1, 85.5),
    (1, 2, 1, 90.0),
    (1, 3, 1, 95.5),
    (2, 1, 1, 80.0),
    (2, 2, 1, 92.5),
    (2, 3, 1, 88.0),
    (3, 1, 1, 75.0),
    (3, 2, 1, 85.0),
    (3, 3, 1, 90.0);
	
CREATE TYPE gender_enum AS ENUM ('male', 'female');
ALTER TABLE student
ADD COLUMN gender gender_enum;
UPDATE student
SET gender = 'male'
WHERE id = 2;
select * from student;

ALTER TABLE student
ADD COLUMN birthdate DATE;

INSERT INTO student (name, email, phone, level_id, gender, birthdate)
VALUES
    ('John Doe', 'john.doe@example.com', '1234567890', 1, 'male', '1990-01-15'),
    ('Jane Smith', 'jane.smith@example.com', '9876543210', 2, 'female', '1992-05-20'),
    ('Michael Johnson', 'michael.johnson@example.com', '5555555555', 3, 'male', '1988-11-03');
-- Add ON DELETE CASCADE to stu_id foreign key in stu_subjects table
ALTER TABLE stu_subjects
DROP CONSTRAINT IF EXISTS fk_stu_subjects_student;

ALTER TABLE stu_subjects
ADD CONSTRAINT fk_stu_subjects_student
FOREIGN KEY (stu_id)
REFERENCES student (id)
ON DELETE CASCADE;

-- Add ON DELETE CASCADE to sub_id foreign key in stu_subjects table
ALTER TABLE stu_subjects
DROP CONSTRAINT IF EXISTS fk_stu_subjects_subject;

ALTER TABLE stu_subjects
ADD CONSTRAINT fk_stu_subjects_subject
FOREIGN KEY (sub_id)
REFERENCES subject (id)
ON DELETE CASCADE;

-- Add ON DELETE CASCADE to stu_id foreign key in stu_grades table
ALTER TABLE stu_grades
DROP CONSTRAINT IF EXISTS fk_stu_grades_student;

ALTER TABLE stu_grades
ADD CONSTRAINT fk_stu_grades_student
FOREIGN KEY (stu_id)
REFERENCES student (id)
ON DELETE CASCADE;

-- Add ON DELETE CASCADE to sub_id foreign key in stu_grades table
ALTER TABLE stu_grades
DROP CONSTRAINT IF EXISTS fk_stu_grades_subject;

ALTER TABLE stu_grades
ADD CONSTRAINT fk_stu_grades_subject
FOREIGN KEY (sub_id)
REFERENCES subject (id)
ON DELETE CASCADE;

-- Add ON DELETE CASCADE to exam_id foreign key in stu_grades table
ALTER TABLE stu_grades
DROP CONSTRAINT IF EXISTS fk_stu_grades_exam;

ALTER TABLE stu_grades
ADD CONSTRAINT fk_stu_grades_exam
FOREIGN KEY (exam_id)
REFERENCES exam (id)
ON DELETE CASCADE;
--DISPLAY STUDENT NAME THAT BEGINS WITH A LETTER
SELECT name FROM student WHERE name LIKE 'J%';

--Display male students who are born before 1991-10-01.

SELECT name 
FROM student 
WHERE gender = 'male' AND birthdate < '1991-10-01';

--Delete students their score is lower than 80 in a particular subject exam.

DELETE FROM student
WHERE id IN (
    SELECT stu_id
    FROM stu_grades
    WHERE grade < 80 AND sub_id = 1 AND exam_id = 1
);
--Write a query to get the student with 3rd max score ofdatabase.
SELECT *
FROM student
WHERE id = (
    SELECT stu_id
    FROM stu_grades
    ORDER BY grade DESC
    LIMIT 1 OFFSET 2
);
--Display each student with his level name.
SELECT student.name, level.name AS level_name
FROM student
JOIN level ON student.level_id = level.id;
--Select * from student;

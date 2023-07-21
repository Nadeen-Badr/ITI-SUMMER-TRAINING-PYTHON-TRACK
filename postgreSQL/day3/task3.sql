CREATE TABLE Employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    salary NUMERIC(10, 2),
    joining_date DATE,
    department VARCHAR(255)
);

INSERT INTO Employee (id, first_name, last_name, salary, joining_date, department)
VALUES (1, 'abdullah', 'ashraf', 12000, '2018-01-20', 'Finance');

INSERT INTO Employee (id, first_name, last_name, salary, joining_date, department)
VALUES (2, 'eslam', 'mohamed', 8000, '2019-01-15', 'IT');

INSERT INTO Employee (id, first_name, last_name, salary, joining_date, department)
VALUES (3, 'ahmed', 'shokry', 10000, '2018-02-05', 'Banking');

INSERT INTO Employee (id, first_name, last_name, salary, joining_date, department)
VALUES (4, 'mohamed', 'kareem', 7000, '2019-02-25', 'Insurance');

INSERT INTO Employee (id, first_name, last_name, salary, joining_date, department)
VALUES (5, 'farid', 'sayed', 7000, '2019-05-28', 'Finance');

INSERT INTO Employee (id, first_name, last_name, salary, joining_date, department)
VALUES (6, 'mohab', 'mohamed', 9500, '2018-05-10', 'IT');

INSERT INTO Employee (id, first_name, last_name, salary, joining_date, department)
VALUES (7, 'eslam', 'emad', 6500, '2021-06-20', 'Banking');

INSERT INTO Employee (id, first_name, last_name, salary, joining_date, department)
VALUES (8, 'farid', 'ahmed', 8000, '2020-06-21', 'IT');

select * from Employee;


CREATE TABLE Reward (
    id SERIAL PRIMARY KEY,
    employee_ref_id INT,
    date_reward DATE,
    amount NUMERIC(10, 2),
    FOREIGN KEY (employee_ref_id) REFERENCES Employee (id)
);

INSERT INTO Reward (employee_ref_id, date_reward, amount)
VALUES (1, '2019-05-11', 1000);

INSERT INTO Reward (employee_ref_id, date_reward, amount)
VALUES (6, '2019-02-15', 5000);

INSERT INTO Reward (employee_ref_id, date_reward, amount)
VALUES (3, '2019-04-22', 2000);

INSERT INTO Reward (employee_ref_id, date_reward, amount)
VALUES (2, '2019-06-20', 8000);

select * from Reward;


--. Update the reward of “Abdullah” to 1000.
UPDATE Reward
SET amount = 1000
WHERE employee_ref_id = (
    SELECT id
    FROM Employee
    WHERE first_name = 'abdullah'
);
--Display the average salary by department in ascending order of salary.
SELECT department, AVG(salary) AS average_salary
FROM Employee
GROUP BY department
ORDER BY average_salary ASC;
--Write a query to increase the salary of employees in IT department by 10%.
UPDATE Employee
SET salary = salary * 1.1
WHERE department = 'IT';

--Display the number of employees grouped by date of joining.

SELECT joining_date, COUNT(*) as employee_count
FROM Employee
GROUP BY joining_date;

--Create view to display each employee and his reward amount.


CREATE VIEW EmployeeRewardView AS
SELECT e.id, e.first_name, e.last_name, r.amount
FROM Employee e
LEFT JOIN Reward r ON e.id = r.employee_ref_id

SELECT * FROM EmployeeRewardView;


--Display the repeated first names and their counts if higher than 1.
SELECT first_name, COUNT(first_name) AS count
FROM Employee
GROUP BY first_name
HAVING COUNT(first_name) > 1;

--Create index on first_name column.

CREATE INDEX idx_first_name ON Employee (first_name);

select * from Employee;
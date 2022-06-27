DROP DATABASE IF EXISTS _____ 
CREATE DATABASE _____
department:
id: INT PRIMARY KEY
name: VARCHAR(30)

role:
id: INT PRIMARY KEY
title: VARCHAR(30)
salary: DECIMAL
department_id: INT

employee:
id: INT PRIMARY KEY
first_name: VARCHAR(30)
last_name: VARCHAR(30)
role_id: INT
manager_id: INT
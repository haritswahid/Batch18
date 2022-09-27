CREATE TABLE regions (
    region_id int primary key,
    region_name varchar(22)
);

CREATE TABLE jobs (
    job_id varchar(10) primary key,
    job_title varchar(31) ,
    min_salary numeric(7,2) ,
    max_salary numeric(7,2) 
);

CREATE TABLE countries (
    country_id varchar(2) primary key,
    country_name varchar(24) ,
    region_id int ,
    foreign key (region_id) references regions(region_id) on delete cascade on update cascade
);

CREATE TABLE locations (
    location_id int primary key,
    street_address varchar(40) ,
    postal_code varchar(11) ,
    city varchar(19) ,
    state_province varchar(17) ,
    country_id varchar(2),
    foreign key (country_id) references countries(country_id) on delete cascade on update cascade
);

CREATE TABLE employees (
    employee_id int primary key,
    first_name varchar(11) ,
    last_name varchar(11) ,
    email varchar(8) ,
    phone_number varchar(18) ,
    hire_date DATE,
    job_id varchar(10) ,
    salary numeric(7,2) ,
    commission_pct varchar(4) ,
    manager_id int,
    department_id varchar(3) ,
    xemp_id varchar(1),
    foreign key (manager_id) references employees(employee_id) on delete cascade on update cascade,
    foreign key (job_id) references jobs(job_id) on delete cascade on update cascade
);

CREATE TABLE departments (
    department_id int primary key,
    department_name varchar(20) ,
    manager_id int ,
    location_id int ,
    foreign key (location_id) references locations(location_id) on delete cascade on update cascade,
    foreign key (manager_id) references employees(employee_id) on delete cascade on update cascade
);

CREATE TABLE job_history (
    employee_id int,
    start_date DATE,
    end_date DATE,
    job_id varchar(10) ,
    department_id int ,
	constraint employee_id_start_date_pk primary key (employee_id,start_date),
    foreign key (department_id) references departments(department_id) on delete cascade on update cascade,
    foreign key (job_id) references jobs(job_id) on delete cascade on update cascade,
    foreign key (employee_id) references employees(employee_id) on delete cascade on update cascade
);

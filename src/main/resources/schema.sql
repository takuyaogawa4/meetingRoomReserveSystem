create DATABASE IF NOT EXISTS reserve_db;
use reserve_db;
create table if not exists employee
(
    employeeId   int auto_increment not null primary key,
    employeeName varchar(255),
    password     varchar(255)
);

create table if not exists reserve
(

    reserveId   int auto_increment not null primary key,
    employeeId  int,
    reserveRoom varchar(255),
    reserveDate date               not null,
    reserveTime int                not null,
    foreign key (employeeId) references employee (employeeId)
);

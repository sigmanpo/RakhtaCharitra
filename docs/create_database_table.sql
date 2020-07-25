create database rakhtacharitra;

create table donor (
    
    id int not null auto_increment,
    fullname varchar(100) not null,
    username varchar(100) not null unique,
    password varchar(100) not null,
    email varchar(100),
    phone bigint(15),
    dob varchar(100),
    bloodgroup varchar(10),
    gender varchar(10) not null,
    state varchar(100) not null,
    pincode bigint(10) not null,
    city varchar(100) not null,
    area varchar(100) not null,
    primary key(id,username)

);


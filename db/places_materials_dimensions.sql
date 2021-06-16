create table places (
	id tinyint not null auto_increment unique,
    sensor_temp bool not null default true ,
    sensor_humi bool not null default true,
    description  varchar(25) not null unique,
    note varchar(25),
    lim_temperature decimal,
    id_dimension tinyint not null,
    id_material tinyint not null,
    id_institution tinyint default 1 not null, 
    
    primary key (id)
);

create table materials (
	id tinyint not null primary key auto_increment unique,
	description varchar(25) not null unique
);

create table dimensions (
	id tinyint not null primary key auto_increment unique,
	height decimal not null,
	width decimal not null,
	length decimal not null
);

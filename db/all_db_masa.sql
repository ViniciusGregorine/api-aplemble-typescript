create database if not exists masa_building;
use masa_building;

create table if not exists readings (
	id int not null  auto_increment unique,
    date date not null default(now()),
    hour time not null default now(),
    value_humidity decimal(5, 2) not null,
    value_temperature decimal(5, 2) not null,
    id_place tinyint not null,
    id_sensor tinyint,
    
    primary key(id)
);

create table if not exists sensors (
	id tinyint not null auto_increment unique,
	description varchar(50) not null unique,
	installation_date date default now(),
	device bool default 0,
	id_situation tinyint not null,
	id_gap int,
    
    primary key(id)
);

create table if not exists gaps (
	id int not null  auto_increment unique,
	description int not null unique,
    
    primary key(id)
);

create table if not exists situations (
	id tinyint not null auto_increment unique,
    description varchar(40) not null unique,

	primary key(id)
);

create table  if not exists places (
	id tinyint not null auto_increment unique,
    sensor_temp bool not null default true ,
    sensor_humi bool not null default true,
    description  varchar(40) not null unique,
    note varchar(200),
    lim_temperature decimal(5, 2),
    id_dimension tinyint not null,
    id_material tinyint not null,
    id_institution tinyint default 1 not null, 
    
    primary key (id)
);

create table if not exists materials (
	id tinyint not null primary key auto_increment unique,
	description varchar(25) not null unique
);

create table if not exists dimensions (
	id tinyint not null primary key auto_increment unique,
	height decimal(5, 2) not null,
	width decimal(5, 2) not null,
	length decimal(5, 2) not null
);

create table if not exists institutions (
	id tinyint not null primary key auto_increment unique,
  name varchar(60) not null unique,
  email varchar(60) not null unique,
  password varchar(60) not null,
  id_address tinyint not null
);

create table if not exists addresses (
	id tinyint not null primary key auto_increment unique,
    street varchar(40) not null,
    number varchar(6) not null,
    neighborhood varchar(50) not null,
    complement varchar(50),
    city varchar(40) not null default "Sombrio"
);

-- fks 
ALTER TABLE  sensors
ADD CONSTRAINT fk_situation
FOREIGN KEY (id_situation) REFERENCES situations(id),
ADD CONSTRAINT fk_gap
FOREIGN KEY (id_gap) REFERENCES gaps(id);

ALTER TABLE readings
ADD CONSTRAINT fk_place
FOREIGN KEY (id_place) REFERENCES places(id),
ADD CONSTRAINT fk_sensor
FOREIGN KEY (id_sensor) REFERENCES	 sensors(id) ON DELETE SET NULL;

ALTER TABLE places
ADD CONSTRAINT fk_dimension
FOREIGN KEY (id_dimension) REFERENCES dimensions(id),
ADD CONSTRAINT fk_material
FOREIGN KEY (id_material) REFERENCES materials(id),
ADD CONSTRAINT fk_instituition
FOREIGN KEY (id_institution) REFERENCES institutions(id);

ALTER TABLE institutions
ADD CONSTRAINT fk_address
FOREIGN KEY (id_address) REFERENCES addresses(id);
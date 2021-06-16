create table readings (
	id int not null  auto_increment unique,
    date date not null default now(),
    hour time not null default now(),
    value_humidity decimal not null,
    value_temperature decimal not null,
    id_place tinyint not null,
    id_sensor tinyint not null,
    
    primary key(id)
);
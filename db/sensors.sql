
create table sensors (
	id tinyint not null auto_increment unique,
	description varchar(40) not null unique,
	installation_date date default now(),
	device bool default 0,
	id_situation tinyint not null,
	id_gap int,
    
    primary key(id)
);


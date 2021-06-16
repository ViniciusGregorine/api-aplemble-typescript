create table situations (
	id tinyint not null auto_increment unique,
    description varchar(30) not null unique,

	primary key(id)
)

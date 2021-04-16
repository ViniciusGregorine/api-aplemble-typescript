create table institutions (
	id tinyint not null primary key auto_increment unique,
  name varchar(50) not null unique,
  email varchar(35) not null unique,
  password varchar(25) not null,
  id_adress tinyint not null
);
create table adresses (
	id tinyint not null primary key auto_increment unique,
    street varchar(35) not null,
    number varchar(5) not null,
    neighborhood varchar(25) not null,
    complement varchar(50),
    city varchar(40) not null default "Sombrio"
);
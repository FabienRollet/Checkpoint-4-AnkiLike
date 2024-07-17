create table user (
    id int unsigned primary key auto_increment not null,
    email varchar(255) not null unique,
    password varchar(255) not null
);

create table card (
    id int unsigned primary key auto_increment not null,
    question text not null,
    question_media varchar(500) null,
    answer text not null,
    answer_media varchar(500) null,
    date int not null
);

create table deck (
    id int unsigned primary key auto_increment not null,
    name varchar(255) not null,
    user_id int unsigned not null,
    card_id int unsigned not null,
    foreign key (user_id) references user (id),
    foreign key (card_id) references card (id)
);
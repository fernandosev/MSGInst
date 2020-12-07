CREATE SCHEMA IF NOT EXISTS `msginst` DEFAULT CHARACTER SET utf8 ;
USE `msginst`;

CREATE TABLE IF NOT EXISTS `user` (
	user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(300) NOT NULL,
    user_email VARCHAR(400) NOT NULL,
    user_password LONGTEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS `group` (
	group_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    group_name VARCHAR(180) NOT NULL
);

CREATE TABLE IF NOT EXISTS `user_group` (
	user_group_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    group_id INT NOT NULL,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id)  REFERENCES `user`(`user_id`),
    CONSTRAINT fk_group_id FOREIGN KEY (group_id)  REFERENCES `group`(`group_id`)
);

select * from user_group;
select * from `group`;
select * from user;
insert into user_group (user_group_id, user_id, group_id) values (default, 2, 2);
insert into user_group (user_group_id, user_id, group_id) values (default, 2, 7);

insert into user values (default, 'A', 'A2', 'AA');

select 
	`group`.`group_id`, `group`.`group_name`, `user`.`user_id`
from `group`, `user_group`, `user`
where `group`.`group_id` = `user_group`.`group_id` and `user`.`user_id` = `user_group`.`user_id` and `user`.`user_id` = 1;

select * from `group` where `group`.`group_id` = (select 
	`user_group`.`group_id`
from `user_group`
where `user_group`.`user_id` != 1);

select `group`.`group_name` 
from `group` 
inner join `user_group` 
on `group`.`group_id` = `user_group`.`group_id` and `group`.`group_id` = `user_group`.`group_id` 
where `user_group`.`user_id` != 1;


select * from `user_group`;
select * from `group`;
select * from user;
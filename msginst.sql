CREATE SCHEMA IF NOT EXISTS `msginst` DEFAULT CHARACTER SET utf8 ;
USE `msginst`;

CREATE TABLE IF NOT EXISTS `user` (
	user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(300) NOT NULL,
    user_email VARCHAR(400) NOT NULL,
    user_password LONGTEXT NOT NULL,
    user_push_token LONGTEXT,
    user_onesignal_id LONGTEXT
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
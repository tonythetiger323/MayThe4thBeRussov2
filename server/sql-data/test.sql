DROP DATABASE IF EXISTS may_the_4th_be_russo_test;
CREATE DATABASE may_the_4th_be_russo_test;

DROP TABLE IF EXSITS user;

CREATE TABLE user (
  uuid varchar(255),
  email varchar(255),
  password varchar(255),
  isActive boolean
)

INSERT INTO user
VALUES(
  "cc8726eb-7800-4017-bcee-b5ebd482859d",
  "test@maythe4thberusso.com",
  "Test*Passw0rd",
  true
);
insert into _User (user_id, username, password, role) VALUES ('22', 'customer', 'password', 'CUSTOMER');
insert into _User (user_id, username, password, role) VALUES ('11', 'trainer', 'password', 'TRAINER');

insert into trainer (id, first_name, last_name, role, bio, rating, img, price) VALUES ('11', 'jamie', 'dimon', 'TRAINER', 'CEO', 4, 'https://g.foolcdn.com/editorial/images/700519/jamie-dimon-jpmorgan.png', 100.00);
insert into trainer (id, first_name, last_name, role, bio, rating, img, price) VALUES ('3', 'tony', 'dimon', 'TRAINER', 'CEO', 3, 'https://cdn.vox-cdn.com/thumbor/UjJJtbVjzjURf6oiXSa0SomaEfU=/0x0:3000x1779/1200x800/filters:focal(1204x216:1684x696)/cdn.vox-cdn.com/uploads/chorus_image/image/59606327/ktokatitmir0.0.jpg', 100.00);
insert into trainer (id, first_name, last_name, role, bio, rating, img, price) VALUES ('4', 'toby', 'dimon', 'TRAINER', 'CEO', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvEmbAzzleQ9lakE0nuGCl6e-S9QInt1ZkaQ&usqp=CAU', 100.00);
insert into trainer (id, first_name, last_name, role, bio, rating, img, price) VALUES ('5', 'tom', 'dimon', 'TRAINER', 'CEO', 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8Y6IKdRegpmGDa7EX-haO50vYiFx07gA3g&usqp=CAU', 100.00);

insert into customer (id, first_name, last_name, role, goal, age, height, weight, trainer_id) VALUES ('22', 'dead', 'pool', 'CUSTOMER', 'lost weight', 33, 172, 150, -1);
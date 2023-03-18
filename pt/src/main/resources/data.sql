insert into _User (user_id, username, password, role) VALUES ('99988', 'customer', '1', 'CUSTOMER');
insert into _User (user_id, username, password, role) VALUES ('99999', 'trainer', '1', 'TRAINER');

insert into trainer (id, first_name, last_name, role, bio, rating, img, price, motto, background, location, years_of_exp) VALUES ('99996', 'tony', 'stark', 'TRAINER', 'IRON MAN', 3, 'https://cdn.vox-cdn.com/thumbor/UjJJtbVjzjURf6oiXSa0SomaEfU=/0x0:3000x1779/1200x800/filters:focal(1204x216:1684x696)/cdn.vox-cdn.com/uploads/chorus_image/image/59606327/ktokatitmir0.0.jpg', 100.00, 'Genius, billionaire, playboy, philanthropist.', 'A wealthy American business magnate, playboy, philanthropist, inventor and ingenious scientist.', 'Arkansas', 9);
insert into trainer (id, first_name, last_name, role, bio, rating, img, price, motto, background, location, years_of_exp) VALUES ('99997', 'jamie', 'dimon', 'TRAINER', 'CEO', 4, 'https://g.foolcdn.com/editorial/images/700519/jamie-dimon-jpmorgan.png', 80.00, '5 Days Office!', 'American billionaire businessman and banker who has been the chairman and chief executive officer of JPMorgan Chase since 2005.', 'New York', 2);
insert into trainer (id, first_name, last_name, role, bio, rating, img, price, motto, background, location, years_of_exp) VALUES ('99998', 'mark', 'ruffalo', 'TRAINER', 'THE HULK', 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvEmbAzzleQ9lakE0nuGCl6e-S9QInt1ZkaQ&usqp=CAU', 90.00, 'That is my secret, Cap. I am always angry,', 'An emotionally reserved physicist', 'New York', 3);
insert into trainer (id, first_name, last_name, role, bio, rating, img, price, motto, background, location, years_of_exp) VALUES ('99999', 'tom', 'cruise', 'TRAINER', 'TOP GUN', 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8Y6IKdRegpmGDa7EX-haO50vYiFx07gA3g&usqp=CAU', 100.00, 'Nothing ends nicely, that is why it ends.', 'He is a senior field agent for the Impossible Mission Force, an elite, top-secret espionage and covert operations agency that handles dangerous and highly sensitive international missions that have been deemed "impossible".', 'New York', 15);
insert into trainer (id, first_name, last_name, role, bio, rating, img, price, motto, background, location, years_of_exp) VALUES ('99995', 'christian', 'bale', 'TRAINER', 'BATMAN', 1, 'https://images.immediate.co.uk/production/volatile/sites/3/2020/09/Batman-Begins-f677ee0.jpg?quality=90&resize=980,654', 100.00, 'If you are good at something, never do it for free.', 'A wealthy American playboy, philanthropist, and industrialist ', 'Arkansas', 7);
insert into trainer (id, first_name, last_name, role, bio, rating, img, price, motto, background, location, years_of_exp) VALUES ('99994', 'ryan', 'raynold', 'TRAINER', 'DEADPOOL', 4, 'https://www.regmovies.com/magnoliaPublic/dam/jcr:5b130960-68ca-4cfe-8659-6c1b5b17ff07/Deadpool01.jpg', 10.00, 'Zip it, Thanos!', 'Need I say more.', 'Florida', 15);
insert into trainer (id, first_name, last_name, role, bio, rating, img, price, motto, background, location, years_of_exp) VALUES ('99993', 'joaquin', 'Phoenix', 'TRAINER', 'JOKER', 3, 'https://assets1.ignimgs.com/2019/08/28/joker-poster-1567009838218.jpg', 30.00, 'His mask is his real face.', 'Smile, because it confuses people. Smile, because it’s easier than explaining what is killing you inside.', 'New York', 5);
insert into trainer (id, first_name, last_name, role, bio, rating, img, price, motto, background, location, years_of_exp) VALUES ('99992', 'arthur', 'conan doyle', 'TRAINER', 'SHERLOCK', 5, 'https://s26162.pcdn.co/wp-content/uploads/sites/3/2021/08/shadow-sherlock.jpg', 10000.00, 'Elementary, my dear.', 'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.', 'New York', 5);
insert into trainer (id, first_name, last_name, role, bio, rating, img, price, motto, background, location, years_of_exp) VALUES ('99991', 'bruce', 'lee', 'TRAINER', 'BRUCE LEE', 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdk64HWnmFfqAmBfbMH3lZ_8UniZdQZv6nCw&usqp=CAU', 10000.00, 'Be water, my friend.', 'Actor, director, martial artist, martial arts instructor and philosopher.', 'New York', 5);
insert into trainer (id, first_name, last_name, role, bio, rating, img, price, motto, background, location, years_of_exp) VALUES ('99990', 'Muhammad', 'Ali', 'TRAINER', 'CEO', 5, 'https://images.squarespace-cdn.com/content/v1/586d154f03596e5605562ea7/1632175492972-ZOSB5JDOO1AD3PVJNRJ9/muhammad+ali.jpeg', 300.00, 'I am the greatest.', 'Professional boxer and activist.', 'New York', 5);
insert into trainer (id, first_name, last_name, role, bio, rating, img, price, motto, background, location, years_of_exp) VALUES ('99989', 'mike', 'tyson', 'TRAINER', 'CEO', 2, 'https://imageio.forbes.com/specials-images/imageserve/62617ea5b54be5d51e5d8631/0x0.jpg?format=jpg&width=1200', 20.00, 'I am a dreamer.', 'Professional boxer.', 'New York', 5);

insert into customer (id, first_name, last_name, role, goal, age, height, weight, trainer_id, img) VALUES ('99988', 'John', 'Doe', 'CUSTOMER', 'Overall fitness', 33, 175, 160, 99999, 'https://www.nicepng.com/png/detail/14-148358_lovely-penguin-clip-art-is-penguin-profile.png');
insert into customer (id, first_name, last_name, role, goal, age, height, weight, trainer_id, img) VALUES ('99987', 'James', 'Kim', 'CUSTOMER', 'Overall fitness', 23, 180, 120, 99999, 'https://www.nicepng.com/png/detail/14-148358_lovely-penguin-clip-art-is-penguin-profile.png');
insert into customer (id, first_name, last_name, role, goal, age, height, weight, trainer_id, img) VALUES ('99986', 'Xiao', 'Qiang', 'CUSTOMER', 'Gain strength', 55, 166, 166, 99999, 'https://www.nicepng.com/png/detail/14-148358_lovely-penguin-clip-art-is-penguin-profile.png');
insert into customer (id, first_name, last_name, role, goal, age, height, weight, trainer_id, img) VALUES ('99985', 'Jay', 'McGonor', 'CUSTOMER', 'Get fit', 36, 190, 198, 99999, 'https://www.nicepng.com/png/detail/14-148358_lovely-penguin-clip-art-is-penguin-profile.png');
insert into customer (id, first_name, last_name, role, goal, age, height, weight, trainer_id, img) VALUES ('99984', 'Blake', 'Trump', 'CUSTOMER', 'Lose weight', 19, 170, 210, 99999, 'https://www.nicepng.com/png/detail/14-148358_lovely-penguin-clip-art-is-penguin-profile.png');


insert into review (id, review, customer_name, trainer_id, customer_id, rating) VALUES ('99999', 'Knowledgable and kind!', 'John Doe', '99999', '96666', 5);
insert into review (id, review, customer_name, trainer_id, customer_id, rating) VALUES ('99998', 'Logical planning and scheduling, very efficient!', 'Jay McGonor', '99999', '96666', 5);
insert into review (id, review, customer_name, trainer_id, customer_id, rating) VALUES ('99997', 'Get me to my goal fast!', 'John Doe', '99992', '96666', 5);
insert into review (id, review, customer_name, trainer_id, customer_id, rating) VALUES ('99996', 'Trained me on every aspect of life!', 'James Kim', '99991', '96666', 5);
insert into review (id, review, customer_name, trainer_id, customer_id, rating) VALUES ('99995', 'Pratical plans and suggestions from his own experience!', 'John Doe', '99990', '96666', 5);

insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('999', 'false', '99988', '2023-03-20', 'Push up 50 times', 'Push up', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('998', 'false', '99988', '2023-03-24', 'Run 5 miles', 'Run', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('997', 'false', '99988', '2023-03-28', 'Push up 50 times', 'Push up', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('996', 'false', '99988', '2023-03-29', '2 sets of 30 lbs weight lifting', 'Weight', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('995', 'false', '99988', '2023-04-04', 'Push up 50 times', 'Push up', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('994', 'true', '99988', '2023-04-08', '3 sets of 30 lbs weight lifting', 'Weight', '99999');


insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('993', 'false', '99987', '2023-03-24', 'Run 5 miles', 'Run', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('992', 'false', '99987', '2023-03-20', 'Push up 50 times', 'Push up', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('991', 'false', '99987', '2023-04-04', 'Push up 50 times', 'Push up', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('990', 'true', '99987', '2023-04-25', '3 sets of 30 lbs weight lifting', 'Weight', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('989', 'false', '99987', '2023-03-28', 'Push up 50 times', 'Push up', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('988', 'false', '99987', '2023-03-29', '2 sets of 30 lbs weight lifting', 'Weight', '99999');

insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('987', 'false', '99986', '2023-03-24', 'Run 5 miles', 'Run', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('986', 'false', '99986', '2023-03-20', 'Push up 50 times', 'Push up', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('985', 'false', '99986', '2023-04-04', 'Push up 50 times', 'Push up', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('984', 'true', '99986', '2023-04-25', '3 sets of 30 lbs weight lifting', 'Weight', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('983', 'false', '99986', '2023-03-28', 'Push up 50 times', 'Push up', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('982', 'false', '99986', '2023-03-29', '2 sets of 30 lbs weight lifting', 'Weight', '99999');

insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('981', 'false', '99984', '2023-03-24', 'Run 5 miles', 'Run', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('980', 'false', '99984', '2023-03-20', 'Push up 50 times', 'Push up', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('979', 'false', '99984', '2023-04-04', 'Push up 50 times', 'Push up', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('978', 'true', '99984', '2023-04-25', '3 sets of 30 lbs weight lifting', 'Weight', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('977', 'false', '99984', '2023-03-28', 'Push up 50 times', 'Push up', '99999');
insert into training_plan(id, completed, customer_id, date, details, title, trainer_id) VALUES ('976', 'false', '99984', '2023-03-29', '2 sets of 30 lbs weight lifting', 'Weight', '99999');

insert into message(id, customer_id, message, sender, time, trainer_id) VALUES ('1', '99988', 'John, what questions do you have?', 'Trainer', '2023-03-18T10:51:45.964Z', '99999');
insert into message(id, customer_id, message, sender, time, trainer_id) VALUES ('2', '99988', 'Let me know if you have any', 'Trainer', '2023-03-18T11:51:45.964Z', '99999');
insert into message(id, customer_id, message, sender, time, trainer_id) VALUES ('3', '99988', 'Tom, what suggetions do you have for me? I am new to this', 'Customer', '2023-03-18T12:51:45.964Z', '99999');
insert into message(id, customer_id, message, sender, time, trainer_id) VALUES ('4', '99988', 'Follow the training plan I set for you, reach out to me for any concerns', 'Trainer', '2023-03-18T13:51:45.964Z', '99999');
insert into message(id, customer_id, message, sender, time, trainer_id) VALUES ('5', '99988', 'Drink plenty of water during excersise', 'Trainer', '2023-03-18T14:51:45.964Z', '99999');
insert into message(id, customer_id, message, sender, time, trainer_id) VALUES ('6', '99988', 'Hope that helps', 'Trainer', '2023-03-18T15:51:45.964Z', '99999');
insert into message(id, customer_id, message, sender, time, trainer_id) VALUES ('7', '99988', 'Great, Thanks.', 'Customer', '2023-03-18T20:51:45.964Z', '99999');

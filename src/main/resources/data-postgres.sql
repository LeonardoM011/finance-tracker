INSERT INTO users(username, password, last_login, created, added_at) VALUES('leonardom011', '123456', NOW(), NOW(), NOW());
INSERT INTO categories(name, slug_name, created, created_by) VALUES('Potrepstine', 'potrepstine', NOW(), 1);
INSERT INTO categories(name, slug_name, created, created_by) VALUES('Hrana', 'hrana', NOW(), 1);
INSERT INTO items(name, slug_name, category_id, quantity, price, added_at, user_id) VALUES('Cetkica', 'cetkica', 1, 1, 10, NOW(), 1);
INSERT INTO items(name, slug_name, category_id, quantity, price, added_at, user_id) VALUES('Pasta', 'pasta', 1, 2, 9.5, NOW(), 1);
INSERT INTO items(name, slug_name, category_id, quantity, price, added_at, user_id) VALUES('Pomfri', 'pomfri', 2, 1, 15, NOW(), 1);
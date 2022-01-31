DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    last_login TIMESTAMP NOT NULL,
    created TIMESTAMP NOT NULL,
    added_at TIMESTAMP NOT NULL
);
CREATE TABLE IF NOT EXISTS categories(
    category_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    slug_name VARCHAR(255) NOT NULL UNIQUE,
    created TIMESTAMP NOT NULL,
    created_by INT NOT NULL REFERENCES users(user_id)
);
CREATE TABLE IF NOT EXISTS items(
    item_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    slug_name VARCHAR(255) NOT NULL,
    category_id INT NOT NULL REFERENCES categories(category_id),
    quantity INT NOT NULL,
    price FLOAT NOT NULL,
    added_at TIMESTAMP NOT NULL,
    user_id INT NOT NULL REFERENCES users(user_id)
);
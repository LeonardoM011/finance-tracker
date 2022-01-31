SELECT
    username,
    password,
    items.name,
    categories.name AS category_name,
    quantity,
    price
FROM items
FULL JOIN users ON items.user_id = users.user_id
FULL JOIN categories ON items.category_id = categories.category_id;
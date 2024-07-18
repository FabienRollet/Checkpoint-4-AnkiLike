CREATE TABLE user (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL
);

CREATE TABLE card (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    question TEXT NOT NULL,
    question_media VARCHAR(500),
    answer TEXT NOT NULL,
    answer_media VARCHAR(500),
    study_date DATE NOT NULL,
    level INT NOT NULL
);

CREATE TABLE deck (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    isShared TINYINT(1) NOT NULL DEFAULT 0,
    user_id INT UNSIGNED NULL,
    FOREIGN KEY (user_id) REFERENCES user (id)
);

CREATE TABLE deck_card (
    deck_id INT UNSIGNED NOT NULL,
    card_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (deck_id, card_id),
    FOREIGN KEY (deck_id) REFERENCES deck (id),
    FOREIGN KEY (card_id) REFERENCES card (id)
);
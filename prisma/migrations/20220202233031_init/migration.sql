-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `character` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img` VARCHAR(255) NULL,
    `name` VARCHAR(255) NULL,
    `level` VARCHAR(255) NULL,
    `race` VARCHAR(255) NULL,
    `class` VARCHAR(255) NULL,
    `age` VARCHAR(255) NULL,
    `taille` VARCHAR(255) NULL,
    `pv` VARCHAR(255) NULL,
    `armor` VARCHAR(255) NULL,
    `initiative` VARCHAR(255) NULL,
    `strength` VARCHAR(255) NULL,
    `dexterity` VARCHAR(255) NULL,
    `constitution` VARCHAR(255) NULL,
    `intelligence` VARCHAR(255) NULL,
    `wisdow` VARCHAR(255) NULL,
    `charisma` VARCHAR(255) NULL,
    `feats` VARCHAR(255) NULL,
    `skill` VARCHAR(255) NULL,
    `languages` VARCHAR(255) NULL,
    `knowlegde` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

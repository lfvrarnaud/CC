/*
  Warnings:

  - You are about to drop the column `class` on the `character` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `character` DROP COLUMN `class`,
    ADD COLUMN `job` VARCHAR(255) NULL,
    ADD COLUMN `user_id` INTEGER NULL;

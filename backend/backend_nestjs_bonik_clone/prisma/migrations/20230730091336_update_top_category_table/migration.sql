/*
  Warnings:

  - You are about to drop the `TopCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `TopCategory` DROP FOREIGN KEY `TopCategory_categoryId_fkey`;

-- DropTable
DROP TABLE `TopCategory`;

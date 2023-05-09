/*
  Warnings:

  - Made the column `user_id` on table `playlists` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_playlists" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL DEFAULT 'https://i.scdn.co/image/ab67706f00000002e138087c0972c43645489dd9',
    "user_id" TEXT NOT NULL,
    CONSTRAINT "playlists_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_playlists" ("id", "img", "name", "user_id") SELECT "id", "img", "name", "user_id" FROM "playlists";
DROP TABLE "playlists";
ALTER TABLE "new_playlists" RENAME TO "playlists";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

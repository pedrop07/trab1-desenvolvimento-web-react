/*
  Warnings:

  - You are about to drop the `songs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "songs";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "musics" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "album" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "img" TEXT NOT NULL DEFAULT 'https://i.scdn.co/image/ab67706f00000002e138087c0972c43645489dd9',
    "playlist_id" TEXT,
    CONSTRAINT "musics_playlist_id_fkey" FOREIGN KEY ("playlist_id") REFERENCES "playlists" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

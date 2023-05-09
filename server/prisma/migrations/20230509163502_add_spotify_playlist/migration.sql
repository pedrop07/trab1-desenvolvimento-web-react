/*
  Warnings:

  - You are about to drop the column `spotify_playlist` on the `playlists` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "spotify_playlists" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL DEFAULT 'https://i.scdn.co/image/ab67706f00000002e138087c0972c43645489dd9'
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_musics" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "album" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "img" TEXT NOT NULL DEFAULT 'https://i.scdn.co/image/ab67706f00000002e138087c0972c43645489dd9',
    "playlist_id" TEXT,
    "spotifyPlaylistId" TEXT,
    CONSTRAINT "musics_playlist_id_fkey" FOREIGN KEY ("playlist_id") REFERENCES "playlists" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "musics_spotifyPlaylistId_fkey" FOREIGN KEY ("spotifyPlaylistId") REFERENCES "spotify_playlists" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_musics" ("album", "author", "duration", "id", "img", "name", "path", "playlist_id") SELECT "album", "author", "duration", "id", "img", "name", "path", "playlist_id" FROM "musics";
DROP TABLE "musics";
ALTER TABLE "new_musics" RENAME TO "musics";
CREATE TABLE "new_playlists" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL DEFAULT 'https://i.scdn.co/image/ab67706f00000002e138087c0972c43645489dd9',
    "user_id" TEXT,
    CONSTRAINT "playlists_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_playlists" ("id", "img", "name", "user_id") SELECT "id", "img", "name", "user_id" FROM "playlists";
DROP TABLE "playlists";
ALTER TABLE "new_playlists" RENAME TO "playlists";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

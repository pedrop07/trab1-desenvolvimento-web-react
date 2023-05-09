/*
  Warnings:

  - You are about to drop the column `playlist_id` on the `musics` table. All the data in the column will be lost.
  - You are about to drop the column `spotifyPlaylistId` on the `musics` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_MusicToPlaylist" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_MusicToPlaylist_A_fkey" FOREIGN KEY ("A") REFERENCES "musics" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MusicToPlaylist_B_fkey" FOREIGN KEY ("B") REFERENCES "playlists" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_MusicToSpotifyPlaylist" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_MusicToSpotifyPlaylist_A_fkey" FOREIGN KEY ("A") REFERENCES "musics" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MusicToSpotifyPlaylist_B_fkey" FOREIGN KEY ("B") REFERENCES "spotify_playlists" ("id") ON DELETE CASCADE ON UPDATE CASCADE
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
    "img" TEXT NOT NULL DEFAULT 'https://i.scdn.co/image/ab67706f00000002e138087c0972c43645489dd9'
);
INSERT INTO "new_musics" ("album", "author", "duration", "id", "img", "name", "path") SELECT "album", "author", "duration", "id", "img", "name", "path" FROM "musics";
DROP TABLE "musics";
ALTER TABLE "new_musics" RENAME TO "musics";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_MusicToPlaylist_AB_unique" ON "_MusicToPlaylist"("A", "B");

-- CreateIndex
CREATE INDEX "_MusicToPlaylist_B_index" ON "_MusicToPlaylist"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MusicToSpotifyPlaylist_AB_unique" ON "_MusicToSpotifyPlaylist"("A", "B");

-- CreateIndex
CREATE INDEX "_MusicToSpotifyPlaylist_B_index" ON "_MusicToSpotifyPlaylist"("B");

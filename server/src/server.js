import express from 'express'
import { registerUser } from './http/controllers/users/register.js'
import { verifyExistUser } from './http/middlewares/verify-exist-user.js'
import { listUsers } from './http/controllers/users/list.js'
import { updateUser } from './http/controllers/users/update.js'
import { listMusics } from './http/controllers/musics/list.js'
import { listPlaylists } from './http/controllers/playlists/list.js'
import { createPlaylist } from './http/controllers/playlists/create.js'
import { addMusicToPlaylist } from './http/controllers/playlists/add-music.js'
import { deletePlaylist } from './http/controllers/playlists/delete.js'
import { deleteMusicToPlaylist } from './http/controllers/playlists/delete-music.js'
import { findUser } from './http/controllers/users/find.js'
import { findPlaylist } from './http/controllers/playlists/find.js'
import { searchMusics } from './http/controllers/musics/search.js'
import { listSpotifyPlaylists } from './http/controllers/spotify-playlists/list.js'
const app = express()
app.use(express.json())

app.get('/user', listUsers)
app.get('/user/:id', findUser)
app.post('/user', verifyExistUser, registerUser)
app.patch('/user/:id', updateUser)

app.get('/musics', listMusics)
app.get('/musics/search', searchMusics)

app.get('/spotify_playlists', listSpotifyPlaylists)

app.get('/playlists', listPlaylists)
app.get('/playlists/:id', findPlaylist)
app.post('/playlists/:userId', createPlaylist)
app.delete('/playlists/:id', deletePlaylist)
app.post('/playlists/:playlistId/musics', addMusicToPlaylist)
app.delete('/playlists/:playlistId/musics/:musicId', deleteMusicToPlaylist)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})

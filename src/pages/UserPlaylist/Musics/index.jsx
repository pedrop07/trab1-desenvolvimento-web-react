import { PlusCircle } from 'phosphor-react'
import { MusicCard, MusicsContainer, EmptyMusics } from './styles'

export function Musics({ playlist }) {
  return (
    <MusicsContainer>
      {playlist?.musics?.length > 0 ? (
        playlist?.musics?.map(({ id, title, img }) => {
          return (
            <MusicCard key={id}>
              <img src={img} alt="exemplo" />
              <h5>{title}</h5>
            </MusicCard>
          )
        })
      ) : (
        <EmptyMusics>
          <PlusCircle size={80} weight="light" />

          <h3>As músicas dessa playlist vão aparecer aqui</h3>
        </EmptyMusics>
      )}
    </MusicsContainer>
  )
}

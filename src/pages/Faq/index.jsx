import { useEffect } from "react"
import { HeaderFaq } from "./components/HeaderFaq"
import { MainContentFaq } from "./components/MainContentFaq"
import { FooterFaq } from "./components/FooterFaq"
import "./styles.css"

export function Faq() {
    useEffect(() => {
        document.title = 'Spotify - FAQ'
    }, [])

    return (
        <div class="faq" >
            <HeaderFaq />
            <MainContentFaq />
            <FooterFaq />
        </div>
    )
}

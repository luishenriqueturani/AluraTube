import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"
import Image from "next/image"
import Banner from "../src/assets/imgs/banner.jpg"


function HomePage(){
    return (
        <>
            <CSSReset />
            <div style={{}}>
                <Menu />
                <Header/>
                <Timeline playlists={config.playlists} ></Timeline>
            </div>        
        </>
    )
}

export default HomePage

const StyledHeader = styled.div`
    img {
        width: 100%;
        object-fit: cover;
        max-height: 230px;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px;
        gap: 16px;
    }
    .user-picture{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

`

function Header(){
    return (
        <StyledHeader>
            <Image src={Banner} alt="Banner do AluraTube de Luís Henrique" quality={100} />
            <section className="user-info">
                <img src={config.github} className="user-picture" />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
                
            </section>
        </StyledHeader>
    )
}

function Timeline(props){
    const playlistNames = Object.keys(props.playlists)
    
    return (
        <StyledTimeline>
            {
                playlistNames.map(function(playlistName){
                    const videos = props.playlists[playlistName]
                    return (
                        <section>
                            <h2>{playlistName}</h2>
                            <div>
                                {
                                    videos.map((video) =>{
                                        return (
                                            <a href={video.url}>
                                                <img src={video.thumb}/>
                                                <span>
                                                    {video.title}
                                                </span>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    )
                })
            }
        </StyledTimeline>
    )
}

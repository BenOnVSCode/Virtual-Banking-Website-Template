import React, { useState } from 'react'
import { ArrowForward, HeroBtnWrapper, ArrowRight, HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElement'
import Video from '../../Video/video.mp4'
import { Button } from '../ButtonElement'





const HeroSection = () => {


    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video-mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual Banking Made easy 
                </HeroH1>
                <HeroP>
                    Sign up for new account today and receive 250$ in credit towards your next payment
                </HeroP>
                <HeroBtnWrapper>
                    <Button  to='about' smooth={true} duration={800} spy={true}  exact='true' offset={-80}  to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get started {hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

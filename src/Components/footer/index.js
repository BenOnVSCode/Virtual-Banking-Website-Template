import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksWrapper, SocialMedia, FooterLinksContainer, FooterLink, FooterLinkItems, FooterLinkTitle, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElement'
import {FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import {animateScroll as scroll} from 'react-scroll'




const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    const social = {
        color: '#fff' ,
        textDecoration: 'none' ,
        marginBottom: '0.5rem' ,
        fontSize: '14px' , 
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us  </FooterLinkTitle>
                                <FooterLink to="signin">About us </FooterLink>
                                <FooterLink to="signin">How it work  </FooterLink>
                                <FooterLink to="signin">Testimonials </FooterLink>
                                <FooterLink to="signin">Investors </FooterLink>
                                <FooterLink to="signin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Videos  </FooterLinkTitle>
                                <FooterLink to="signin">Submit Video </FooterLink>
                                <FooterLink to="signin">Ambassadors  </FooterLink>
                                <FooterLink to="signin">Agency </FooterLink>
                                <FooterLink to="signin">Influencer </FooterLink>
                                <FooterLink to="signin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact us  </FooterLinkTitle>
                                <FooterLink to="signin">Contact</FooterLink>
                                <FooterLink to="signin">Support </FooterLink>
                                <FooterLink to="signin">Sponserships</FooterLink>
                                <FooterLink to="signin">Distinations</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Business</FooterLinkTitle>
                                <a href='' style={social}>Instagram</a>
                                <a href='' style={social}>Github</a>
                                <a href='' style={social}>Facebook</a>
                                <a href='' style={social}>Twitter</a>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo onClick={toggleHome} to='/'>
                            dolla
                        </SocialLogo>
                        <WebsiteRights> dolla © { new Date().getFullYear()} all right reserved </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://twitter.com/4BD_O' target='_blank'> <FaTwitter /> </SocialIconLink>
                            <SocialIconLink href='https://github.com/4bdeladim' target='_blank'> <FaGithub /> </SocialIconLink>
                            <SocialIconLink href='https://www.instagram.com/4bdeladim/' target='_blank'> <FaInstagram /> </SocialIconLink>
                            <SocialIconLink href='mailto: benabdeladim7@gmail.com' target='_blank'> <AiOutlineMail /> </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer

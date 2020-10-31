import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SideBarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' isOpen={isOpen} onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='discover' isOpen={isOpen} onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services' isOpen={isOpen} onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='signup' isOpen={isOpen} onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideBarRoute to='/signin'  isOpen={isOpen} onClick={toggle}>
                        Sign In
                    </SideBarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

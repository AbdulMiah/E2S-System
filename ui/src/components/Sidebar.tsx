import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'

import * as FaIcons from 'react-icons/fa' 

import { useState } from 'react'

import styled from 'styled-components'

const CollapsedSideBar = styled.div`
    width: 100px;
    height: 100vh;
    background-color: #417285;
    position: fixed;
    top: 0;
`

const MenuIconOpen = styled(Link)`
    background-color: #203841:     
    align-content: center;
    display: flex;
    justify-content: start;
    font-size: 2.5rem;
    margin-left: 1.85rem;
    margin-top: 0.75rem;
    margin-bottom: 3rem;
    color: #ffffff;

`

const MenuIconClose = styled(Link)`
    display: flex;
    justify-content: end;
    font-size: 2.5rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
    margin-bottom: 3rem;
    color: #ffffff;
`

const SidebarMenu = styled.div<{close: boolean}>`
    width: 250px;
    height: 100vh;
    background-color: #417285;
    position: fixed;
    top: 0;
    left: ${({ close}) => close ? '0' : '-100%'};
    transition: .3s;
`

const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 90px;
    padding: 1rem 0 1.25rem;
`

const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 11px;
    text-decoration: none;
    color: #ffffff;
    margin: 0 1rem;

    &:hover {
        background-color: #ffffff;
        color: #0F242C;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        margin: 0 1rem;
    }
`

const CollapsedMenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 11px;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        background-color: #ffffff;
        color: #0F242C;
        width: 100%;
        height: 100%;
        border-radius: 3px;
        
    }
`

const Sidebar: React.FunctionComponent = () => {
    const [close, setClose] = useState(false)
    const showSidebar = () => setClose(!close)
    return (
        <>
            <CollapsedSideBar data-testid="collapsedSideBar">
            
            <MenuIconOpen data-testid="menuIconOpen" to="#" onClick={showSidebar}>
                    <FaIcons.FaBars />
                </MenuIconOpen>
            
                {SidebarData.map((item, index) => {
                    return (
                        <MenuItems key={index}>
                            <CollapsedMenuItemLinks to={item.path}>
                                {item.icon}
                            </CollapsedMenuItemLinks>
                        </MenuItems>
                    )
                })}


            </CollapsedSideBar>

            <SidebarMenu data-testid="sidebarMenu" close={close}>

                <image>
                    
                </image>

                <MenuIconClose data-testid="menuIconClose" to="#" onClick={showSidebar}>
                    <FaIcons.FaTimes />
                </MenuIconClose>

                {SidebarData.map((item, index) => {
                    return (
                        <MenuItems key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                                <h1 style={{marginLeft: '16px'}}>{item.title}</h1>
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}
            </SidebarMenu>
        </>
    )
}

export default Sidebar
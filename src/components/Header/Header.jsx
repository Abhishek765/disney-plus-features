import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Nav>
            {/* Logo */}
            <Logo src="/images/logo.svg" />

            {/* Nav Menu */}
            <NavMenu>
                <Link to="/">
                    <img src="/images/home-icon.svg" alt="homeIcon" />
                    <span>HOME</span>
                </Link>
                <Link to="/">
                    <img src="/images/search-icon.svg" alt="SearchIcon" />
                    <span>SEARCH</span>
                </Link>
                <Link to="/">
                    <img src="/images/watchlist-icon.svg" alt="WatchListIcon" />
                    <span>WATCHLIST</span>
                </Link>
                <Link to="/">
                    <img src="/images/original-icon.svg" alt="OriginalIcon" />
                    <span>ORIGINALS</span>
                </Link>
                <Link to="/">
                    <img src="/images/movie-icon.svg" alt="MoviesIcon" />
                    <span>MOVIES</span>
                </Link>
                <Link to="/">
                    <img src="/images/series-icon.svg" alt="SeriesIcon" />
                    <span>SERIES</span>
                </Link>

            </NavMenu>

            {/* USERIMG */}
            <UserImg src="https://img.etimg.com/thumb/msid-50318894,width-650,imgsize-337990,,resizemode-4,quality-100/.jpg" />

        </Nav>
    )
}

export default Header;


const Nav = styled.nav`
    height:70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding:0 36px;
    overflow: hidden;


`
const Logo = styled.img`
    width: 5rem;

`

const NavMenu = styled.div`
    display: flex;
    flex:1;
    margin-left:1.5rem;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 0.75rem;
        cursor:pointer;
        color:#fff;
        text-decoration: none;
       
        img{
            height:1.25rem;
        }

        span{
            font-size: 0.813rem;
            letter-spacing:0.063rem;
            position: relative;

            &:after{
                content:"";
                height:0.125rem;
                background:#fff;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -0.375rem;
                transform-origin: left center;
                transform:scaleX(0);
                transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            }
        }

        &:hover {
            span:after{
                transform: scaleX(1);
            }
        }
    }
`

const UserImg = styled.img`
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        cursor: pointer;
`

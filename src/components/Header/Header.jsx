import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { auth, provider } from '../../firebase.js'
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName, selectUserPhoto, setSignOut, setUserLogin } from '../../features/user/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);


    // handle auth state
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push('/');
            }
        })

    }, [dispatch, history])

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                let user = result.user;

                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push('/');

            })
    }

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setSignOut());
                history.push('/login');
            })
    }

    return (
        <Nav>
            <Link to="/">
                <Logo src="/images/logo.svg" />
            </Link>
            {
                !userName ?
                    <>
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
                        <LoginContainer>
                            <Login onClick={signIn}>Login</Login>
                        </LoginContainer>
                    </> :
                    <>
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


                        <SignOut>
                            <UserImg
                                src={userPhoto} alt={userName} />
                            <DropDown>
                                <span onClick={signOut}>Sign out</span>
                            </DropDown>
                        </SignOut>
                    </>
            }
        </Nav>
    )
}

export default Header;


const Nav = styled.nav`
    position:fixed;
    height:70px;
    top:0;
    left:0;
    right:0;
    margin-bottom:5rem;
    background: #090b13;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding:0 36px;
    z-index:3;
`;
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
            z-index: auto;
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
    @media (max-width: 768px) {
        display: none;
    } 
`;

const UserImg = styled.img`
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        cursor: pointer;
`
const Login = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition: all 0.2s ease 0s;
    cursor: pointer;


    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

const LoginContainer = styled.div`
    flex:1;
    display:flex;
    justify-content: flex-end;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
      z-index:11;
    }
  }
`;
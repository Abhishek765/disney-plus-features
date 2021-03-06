import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import db from '../../firebase';
import { auth } from '../../firebase.js'
import { BounceLoader } from 'react-spinners';
import { setUserLogin } from '../../features/user/userSlice';
import { useDispatch } from 'react-redux';

const loaderCss = css`
  display: block;
  margin: 0 auto;
  margin-top: 40vh;
  border-color: red;
`;

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [movie, setMovie] = useState();
    const [isloading, setLoading] = useState(true);


    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push(`/detail/${id}`);
            }
        })

    }, [id, dispatch, history])
    //! getting the data from Firebase DB
    useEffect(() => {
        db.collection("movies")
            .doc(id)
            .get()
            .then(doc => {
                if (doc.exists) {
                    // save the movie data in a state
                    setMovie(doc.data());
                    setLoading(false);
                }
                else {
                    // redirect to home page
                }
            })
    }, [id]); // handling Dependancy list 
    return (
        <>
            {
                isloading ? <BounceLoader color={"#fff"} css={loaderCss} /> :
                    <Container>
                        <Background>
                            <img src={movie.backgroundImg} alt="back" />
                        </Background>
                        <ImageTitle>
                            <img src={movie.titleImg} alt="titleImg" />
                        </ImageTitle>
                        <ContentMeta>
                            <Controls>
                                <PlayButton>
                                    <img src="/images/play-icon-black.png" alt="imgIcon" />
                                    <span>PLAY</span>
                                </PlayButton>
                                <a href={movie.videoURL}>
                                    <TrailerButton>
                                        <img src="/images/play-icon-white.png" alt="imgIcon" />
                                        <span>TRAILER</span>
                                    </TrailerButton>
                                </a>
                                <AddButton>
                                    <span>+</span>
                                </AddButton>
                                <GroupWatchButton>
                                    <img src="/images/group-icon.png" alt="groupIcon" />
                                </GroupWatchButton>
                            </Controls>

                            <SubTitle>
                                {movie.subTitle}
                            </SubTitle>

                            <Description>
                                {movie.description}
                            </Description>
                        </ContentMeta>
                    </Container>
            }
        </>
    )
}

export default Detail;

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    padding: 0px calc(3.5vw + 5px);

        `;
const Background = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;

    }

            `
const ImageTitle = styled.div`
        height:30vh;
        min-height:10.625rem;
        width: 35vw;
        min-width:12.5rem;
        margin-top:5rem;

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

`;
const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    a{
        text-decoration:none;
    }

`;
const PlayButton = styled.button`
    border-radius: 4px;
    font-size:15px;
    padding: 0 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249,249);
    border:none;
    letter-spacing:1.8px;
    cursor:pointer;

    &:hover {
        background:rgb(198, 198, 198);
    }
    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;
        img {
        width: 25px;
        }
     }
`;

const TrailerButton = styled(PlayButton)`
    background: rgba( 0, 0, 0, 0.3 );
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`;

const AddButton = styled.button`
    width: 2.75rem;
    height: 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    border:2px solid #fff;
    background-color: rgba( 0, 0 ,0, 0.6);
    cursor:pointer;
    margin-right:16px;
    span{
        font - size: 1.875rem;
    color: #fff;
    }
    @media (max-width: 315px) {
         margin-top:10px;
     }

`;

const GroupWatchButton = styled(AddButton)`
    background: #000;
    @media (max-width: 370px) {
         margin-top:10px;
     }
    
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height:20px;
    margin-top:26px;
`;

const Description = styled.div`
 width: fit;
 line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`
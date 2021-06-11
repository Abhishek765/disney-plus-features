import React, { useEffect } from 'react'
import styled from 'styled-components';
import ImgSlider from '../ImgSlider/ImgSlider';
import Movies from '../Movies/Movies';
import Viewers from '../Viewers/Viewers';
import db from '../../firebase';
import { useDispatch } from 'react-redux';
import { setMovies } from '../../features/movie/movieSlice';
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        db.collection("movies").onSnapshot(snapshot => {
            let tempMovies = snapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() };
            })

            dispatch(setMovies(tempMovies));
        })

    }, [dispatch])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home;

const Container = styled.main`
        min-height: calc(100vh - 4.375rem);
        padding: 0 calc(3.5vw + 0.313rem);
        position: relative;
        overflow: hidden;
        &:before {
            background: url("/images/home-background.png") center center / cover no-repeat fixed;
            content: ""; 
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index:-1;
        }


`

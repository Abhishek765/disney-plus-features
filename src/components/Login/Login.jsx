import React from 'react'
import styled from 'styled-components';

const Login = () => {
    return (
        <Container>
            <Content>
                <CTALogoOne src="/images/cta-logo-one.svg" alt="LogoOne" />
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="LogoTwo" />
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    overflow: hidden;
    height: calc(100vh - 70px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: top;
    text-align: center;
    &:before{
        background-position:top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(/images/login-background.jpg);
        content:"";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom:0;
        opacity: 0.7;
        z-index: -1;
    }

`

const Content = styled.div`
    width:60%;
    max-width: 40rem;
    padding: 80px 40px;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`

const CTALogoOne = styled.img`

`
const SignUp = styled.a`
    width: 100%;
    cursor: pointer;
    background-color:#0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius:4px;
    font-size:1.125rem;
    transition: all 250ms;
    letter-spacing:1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background-color:#0483ee;   
    }
`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    line-height:1.5;

`
const CTALogoTwo = styled.img`
    width: 90%;
`

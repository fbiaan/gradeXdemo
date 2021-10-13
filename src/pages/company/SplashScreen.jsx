import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MiniCard from "./Minicard";
import { useParams } from 'react-router-dom';
import imgabout from './imgcom/about2.JPG'
import linea from './imgcom/banda3colores.JPG'
import imgfin from './imgcom/financial.JPG'


function Splash(props) {

    const {productId} = useParams();
    console.log({productId})

    const Toggle = styled.button`
        cursor: pointer;
        height: 50px;
        width: 50px;   
        border-radius: 50%;
        border: none;
        background-color: ${props => props.theme.titleColor};
        color: ${props => props.theme.pageBackground};
        &:focus {
            outline: none;
        }
        transition: all .5s ease;
    `;

    const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
    `;

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const Title = styled.h1`
        color: ${props => props.theme.titleColor};
        transition: all .5s ease;
    `;

    const TagLine = styled.span`
        color: ${props => props.theme.tagLineColor};
        font-size: 18px;
        transition: all .5s ease;
    `;

    const CardContainer = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    `;

    const ContainerCard = styled.div`
    width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    @media only screen and (max-width: 480px) {
      width: 50px
    }
  `;    

  const TextCard = styled.span`
  margin-top: 10px;
  text-align:center;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
    `;
    const ImageCard = styled.img`
    width: 20px;
    `;


    const [company, setData]= useState([]);
    //const baseUrl="http://168.181.186.118:9093/democompany/buscaxid/15";
    const baseUrl="http://168.181.186.118:9093/democompany/buscaxid/" + productId;
    const peticionGet=async()=>{
        await axios.get(baseUrl)
        .then(response=>{
        console.log(response.data);
        setData(response.data);
        }).catch(error=>{
        console.log(error);
        })
    }

    useEffect(()=>{
        peticionGet();
    }, [])


    function changeTheme() {
        props.setTheme("dark")
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

    return (

        <Page>
            <Container>                               
                <Title>GRADE X</Title>
                <TagLine>B2B  BUSSINES INTELLIGENCE</TagLine>
                <img src={linea} width="400" height ="20"/>
                <img src={company.logo_file} border="1" alt="Logo empresa" width="200" height="100"></img>
                <TagLine>COMPANY : {company.company_name}</TagLine>
                
                <CardContainer>
                    <ContainerCard>    
                        <img src={imgabout} width="250" height ="40" />
                        <TextCard> {company.about}</TextCard>
                        <TextCard>{company.hq_location}</TextCard>
                        <TextCard> {company.industry_groups}</TextCard>
                        <TextCard> </TextCard>
                        <TextCard>{company.bwatc} employyes</TextCard>
                        <TextCard>{company.web_site} employyes</TextCard>
                    </ContainerCard>
                    <ContainerCard>    
                        <img src={imgfin} width="300" height ="40" />
                        <TextCard>Founded date: {company.founded_date}</TextCard>
                        <TextCard>Founders :  {company.founders}</TextCard>
                        <TextCard>Estimated Revenue Range : {company.company_id}</TextCard>
                        <TextCard>Number of investors : {company.company_id}</TextCard>
                        <TextCard>Total Founding Amount : {company.company_id}</TextCard>
                        <TextCard>Number of founding rounds : {company.company_id}</TextCard>
                        <TextCard>Number of acquisitions : {company.company_id}</TextCard>
                        <TextCard>Number of lead investors : {company.company_id}</TextCard>
                    </ContainerCard>                    
                </CardContainer>                
            </Container>
        </Page>
    );
};

export default Splash;
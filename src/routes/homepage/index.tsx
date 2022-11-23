import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Layout from '../layout/Layout';
import SpyGlass from './SpyGlass';
import { Headline } from '../common/Headline';
import { Routes } from '../layout/Routes';
import { Box, RowArranged, ColumnArranged } from '../common/Containers';
import TypeWriter from '../common/Typewriter';
//import Web from '../common/Link';
import Marquee from 'react-fast-marquee';
import { attached_1, attached_2 } from './constant';

export default function Homepage() {
  const text = 'hello world';

  return (
    <Layout options={Routes}>
      <HomeContainer>
        <LogoStack>
          <TypeWriter
            text={text}
            size='2em'
            m='2em 0 1em 0'
            color='#ffffff'
            shadow
            fontfam='orangina'
          />

          <SpyGlass color='#ffffff' fontSize='60px' />
        </LogoStack>

        <ProfileContainer>
          <ProfileCard>
            <Headline center bolder>
              Technical overview
            </Headline>
            <Paragraph>{attached_1}</Paragraph>
            <div className='spread'></div>
          </ProfileCard>
          <ProfileCard>
            <Headline center bolder>
              Technical overview
            </Headline>
            <Paragraph>{attached_2}</Paragraph>
            <Headline m='1em 0 0 0' bolder>
              Giovani Fouz Jiménez.
            </Headline>
          </ProfileCard>
        </ProfileContainer>

        <TechnologiesContainer>
          <Headline upper size='1em' center color='#ffffff' bolder spacing='5px' fontfam='calibri'>
            Web Developer
          </Headline>
          <TechnologiesStack>
            <RedBox>Html</RedBox>
            <BlueBox>Css</BlueBox>
            <GreenBox>Scss</GreenBox>
            <YellowBox>Js Ts</YellowBox>
          </TechnologiesStack>

          <Marquee>
            <Headline bolder color='#ffffff' spacing='6px' upper fontfam='orangina'>
              ReactJS styled-components valtio react-query react-hook-form axios eslint prettier
              typescript ExpressJS
            </Headline>
          </Marquee>
        </TechnologiesContainer>
      </HomeContainer>
    </Layout>
  );
}

const HomeContainer = styled(ColumnArranged)`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(./images/landscape.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: space-evenly;

  img {
    max-width: 100%;
    height: auto;
    position: relative;
    right: 0.5em;
  }
`;
const TechnologiesStack = styled(RowArranged)`
  margin: 0;
  justify-content: center;
  padding: 2em;
`;
const RedBox = styled(Box)`
  color: #afeeee;
  background-color: #0000ff;
`;
const BlueBox = styled(Box)`
  color: #0000ff;
  background-color: #afeeee;
`;
const GreenBox = styled(Box)`
  color: #ffffff;
  background-color: #000000;
`;
const YellowBox = styled(Box)`
  color: #000000;
  background-color: yellow;
`;
const LogoStack = styled(ColumnArranged)`
  justify-content: center;
`;

const ProfileContainer = styled(RowArranged)`
  flex-wrap: wrap;
  padding: 2em;
  .sc-pyfCe:hover {
    color: #999999;
    background-color: black;
  }
`;

const ProfileCard = styled(ColumnArranged)`
  position: relative;
  color: #ffffff50;
  border: none;
  border-radius: 15px;
  box-shadow: 1px 1px 35px #ffffff50;
  margin: 1em 0;
  width: 400px;
  padding: 1em;
  min-width: 320px;
  align-items: flex-start;
  transition: 1s;
`;
const Paragraph = styled(Headline)``;
const TechnologiesContainer = styled.div``;
// background-image: linear-gradient(black, #222222, black)

//.sc-pyfCe sc-hTBuwn cnzzyj jjRVQy

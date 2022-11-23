import * as React from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import { Headline } from '../common/Headline';
import { Routes } from '../layout/Routes';
import Text from '../common/Highlighter';
import NodeIcon from '../icons/Node';
import NpmIcon from '../icons/Npm';
import HtmlIcon from '../icons/Html';
import CssIcon from '../icons/Css';
import ReactIcon from '../icons/ReactIcon';
import { first_text, second_text, third_text, fourth_text } from './text';
import { RowArranged, ColumnArranged } from '../common/Containers';

function About() {
  return (
    <>
      <Layout options={Routes}>
        <AboutContainer>
          <Headline upper m='2em 0' size='2em' bolder center color='#999999'>
            About<Text color='#000000'>Me</Text>
          </Headline>
          <PrimaryArticle>
            <img src='./images/avatar.jpg' alt='avatar' />
          </PrimaryArticle>
          <ParagraphSection>
            <Paragraph>
              <Headline color='#444444' bolder>
                My outlook about programming.
              </Headline>
              <img className='article__avatar' src='./images/boldman.jpg' alt='emoji' />
              <p>{first_text}</p>
            </Paragraph>
            <Paragraph>
              <Headline color='#444444' bolder>
                I found something really nice.
              </Headline>
              <img className='article__avatar' src='./images/boldman.jpg' alt='emoji' />
              <p>{second_text}</p>
            </Paragraph>
          </ParagraphSection>
          <SecondaryArticle>
             <img  src='./images/piece.jpg' alt='pc' />
          </SecondaryArticle>
          <ParagraphSection>
            <Paragraph>
              <Headline color='#444444' bolder>
                CSS architecture
              </Headline>
              <img className='article__avatar' src='./images/boldman.jpg' alt='emoji' />
              <p>{third_text}</p>
            </Paragraph>
            <Paragraph>
              <Headline color='#444444' bolder>
                English language a beloved tool.
              </Headline>
              <img className='article__avatar' src='./images/boldman.jpg' alt='emoji' />
              <p>{fourth_text}</p>
            </Paragraph>
          </ParagraphSection>
          <TertiaryArticle>
            <TertiaryHealine upper bolder center p='2em' spacing='5px'>
              Imagination & inspiration
           </TertiaryHealine>    
            <img className='secondary__image' src='./images/spider.jpg' />
          </TertiaryArticle>  
          
          <TechnologySection>
            <HtmlIcon />
            <CssIcon />
            <NpmIcon fontSize='35px' />
            <NodeIcon />
            <ReactIcon fontSize='25px' />
          </TechnologySection>
        </AboutContainer>
      </Layout>
    </>
  );
}

export default About;

const AboutContainer = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
  
`;
const ParagraphSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Paragraph = styled.div`
  width: 450px;
  min-width: 320px;
  padding: 2em;
  text-align: left;
  .article__avatar {
    float: left;
  }
`;
const PrimaryArticle = styled(RowArranged)`
  justify-content: flex-start;
`;
const SecondaryArticle = styled(RowArranged)`
 flex-wrap: wrap;
 justify-content: center;
 background-color: #f5f5f5;
`;
const TertiaryArticle = styled(RowArranged)`
 flex-wrap: wrap;
 justify-content: center;
 background-color: #fbfbfb;
`;
const TertiaryHealine = styled(Headline)`
text-shadow: 1px 1px 10px #222222;
`;
const TechnologySection = styled(RowArranged)`
 padding: 6em 0;
 background-color: #fbfbfb;
`;
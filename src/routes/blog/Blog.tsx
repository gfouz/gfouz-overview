import styled from 'styled-components';
import Postlist from './Postlist';
import Layout from '../layout/Layout';
import { Routes } from '../layout/Routes';
import { RowArranged, ColumnArranged } from '../common/Containers';
import { Headline } from '../common/Headline';

function Blog() {
  return (
    <>
      <Layout options={Routes}>
        <BlogContainer>
          <Main>
            <img src='./images/corner.jpg' alt='student' />
            <Headline bolder center color='#000000' p='0.5em' upper size='0.9em'>
              En ciertos momentos, la única forma de tener razón es perdiéndola. J.Bergamín
            </Headline>
          </Main>
          <PostListContainer>
            <Postlist />
          </PostListContainer>
        <Paragraph center p='2em' bolder >
         En ciertos momentos, la única forma de tener razón es perdiéndola. J.Bergamín
        </Paragraph>
        </BlogContainer>
      </Layout>
    </>
  );
}

export default Blog;

const BlogContainer = styled(ColumnArranged)`
  --blue-grey: #121a3e;
  --vscode: #19202e;
  height: 100%;

`;
const Main = styled(ColumnArranged)`
  img {
    width: 700px;
    height: auto;
    margin: 2em 0;
  }
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 2.5em;
  color: #444444;
  margin: 1em 0;
  font-weight: bolder;
`;
const Span = styled.span`
  color: #8628b8;
`;
const PostListContainer = styled(RowArranged)``;
const Paragraph = styled(Headline)``;

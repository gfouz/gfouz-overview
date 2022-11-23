import * as React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import PreviousNext from './PrevAndNext';
import posts from './posts.json';

const Post = () => {
  const [content, setContent] = React.useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) {
    navigate('/404');
  }
  //Plus operator to turn a string type into number.( +id ).
  const currentpost = posts.find((e) => e.id === +id );
  
  React.useEffect(() => {
    setContent(currentpost?.content);
  });
  return (
    <>
      <PostContainer>
            <ReactMarkdown>
             {content}
            </ReactMarkdown>
            <PreviousNextContainer>
              <PreviousNext posts={posts} />
            </PreviousNextContainer>
      </PostContainer>
    </>
  );
};
export default Post;

const PostContainer = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 2em 0.2em;
  text-align: left;
  h1 {
    color: #666666;
    margin: 2em 0;
    font-weight: bolder; 
    font-size: 2em;
  }
  h2 {
    color: #444444;
    font-style: italic;
    font-size: 1.1em;
    font-weight: bolder;
  }
`;
 const PreviousNextContainer = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 2em;
`;


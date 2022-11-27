//@ts-nocheck
import * as React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import PreviousNext from './PrevAndNext';
import posts from './posts.json';
import { IPost } from './constants';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'


const Post = () => {
  const [list, setList] = React.useState<IPost[]>([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const posibleUndefined: string = id !== undefined ? id : '';
  const post = list.find((post) => post.id === parseInt(posibleUndefined));
  if (!id) {
    navigate('/404');
  }
  React.useEffect(() => {
    const postlist: IPost[] = posts.map((post: IPost) => post);
    setList(postlist);
  }, [post]);

  return (
    <>
      <PostContainer>
        <ReactMarkdown
          children={post && post!.content}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={dracula}
                  language={match[1]}
                  PreTag='div'
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
        ,
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


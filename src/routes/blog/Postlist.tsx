import styled from 'styled-components';
import postlist from './posts.json';
import { Link } from 'react-router-dom';
import { Headline } from '../common/Headline';
import { RowArranged, ColumnArranged } from '../common/Containers';

function PostList() {
  return (
    <>
      <PostCardsContainer>
        {postlist.length &&
          postlist.map((post, i) => {
            return (
              <Card key={post.id} className='card'>
                <CardImage>
                  <img src={`./images/${post.img}`} alt='react' />
                </CardImage>
                <CardInfo>
                  <Headline upper size='0.6em' color='#000000' bolder spacing='3px' p='1em'>
                    {post.title}
                  </Headline>
                  <Line />
                  <Small>
                    Published on: {post.date} by {post.author}
                  </Small>
                  <FurtherInfo>
                    <Link className='post__link' to={`/post/${post.id}`}>
                      Read more
                    </Link>
                  </FurtherInfo>
                </CardInfo>
              </Card>
            );
          })}
      </PostCardsContainer>
    </>
  );
}
export default PostList;

const PostCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  justify-content: center;
  .card:hover {
    animation: jello-horizontal 0.9s both;
  }

  @keyframes jello-horizontal {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.05, 0.9, 1);
    }
    40% {
      transform: scale3d(0.85, 1.05, 1);
    }
    50% {
      transform: scale3d(1.05, 0.9, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;
const Card = styled(RowArranged)`
  box-shadow: 1px 1px 10px #000000;
  border-radius: 10px;
  width: 320px;
  height: 120px;
  margin: 0.5em;
`;
const CardImage = styled.div`
  width: 100px;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
const CardInfo = styled(ColumnArranged)`
  position: relative;
  width: 70%;
  text-align: left;
  padding: 0.2em;
  align-items: flex-start;
`;
const Line = styled.div`
  height: 1px;
  width: 95%;
  background-color: #222222;
`;
const Small = styled.span`
  color: #db173f;
  font-size: 0.6em;
  letter-spacing: 2px;
  font-weight: bolder;
`;
const FurtherInfo = styled.div`
  position: absolute;
  right: 20px;
  bottom: 10px;
  a {
    color: blue;
  }
`;


import * as React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AngleRight from '../icons/AngleRight';
import AngleLeft from '../icons/AngleLeft';
import { RowArranged } from '../common/Containers';
import { IPost } from './constants';

interface IProps {
  posts: IPost[];
}
const PreviousNext = (props: IProps) => {
  const { posts } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const posibleUndefined = id !== undefined ? id : '';
  const currentId = parseInt(posibleUndefined);
  const postId = posts && posts.map((post: IPost) => post.id);
  const initialState = postId && postId.indexOf(currentId);
  const [active, setActive] = React.useState(true);
  const [index, setIndex] = React.useState(initialState);

  function next() {
    index < postId?.length - 1 ? setIndex((prev) => prev + 1) : setActive(false);
    index === postId?.length - 1 ? setActive(false) : setActive(true);
  }
  function prev() {
    index > 0 ? setIndex((prev) => prev - 1) : navigate('/blog');
    setActive(true);
  }

  React.useEffect(() => {
    navigate(`/post/${postId[index]}`);
  }, [index]);

  return (
    <>
      <PreviousNextContainer>
        <Previous onClick={prev}>
          <AngleLeft fontSize='20px' />
        </Previous>
        <Next onClick={next}>
          <AngleRight fontSize='20px' color={active ? '#000000' : '#999999'} />
        </Next>
      </PreviousNextContainer>
    </>
  );
};
export default PreviousNext;

const PreviousNextContainer = styled(RowArranged)`
  justify-content: center;
  width: 100%;
`;
const Button = styled.button`
  border-radius: 12px;
  outline: none;
  padding: 1em 2em;
  margin: 1em;
  color: #ff9800;
`;
const Previous = styled(Button)`
  margin-right: 4em;
`;
const Next = styled(Button)`
  margin-left: 4em;
`;

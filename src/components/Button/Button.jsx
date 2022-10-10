import { BtnStyled } from './Button.styled';

export const Button = ({ loadMore }) => {
  return (
    <BtnStyled type="button" onClick={loadMore}>
      Load more
    </BtnStyled>
  );
};

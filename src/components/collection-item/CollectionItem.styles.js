import styled from 'styled-components';
import CustomButton from '../custom-button/CustomButton.component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 450px;
  align-items: center;
  position: relative;

  &:hover {
    .CollectionItemImage {
      opacity: 0.7;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`

export const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
`

export const CollectionFooter = styled.div`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  bottom: 50px;
  display: none;
`

export const CollectionName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

export const CollectionPrice = styled.span`
  width: 10%;
`

export const AddBtn = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  bottom: 50px;
  display: none;
`

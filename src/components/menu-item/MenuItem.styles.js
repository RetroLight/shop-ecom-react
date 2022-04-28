import styled from "styled-components";

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${({size}) => size ? '360px' : '240px'};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  
  &.large {
    height: 360px;
  }

  &:hover {
    cursor: pointer;
    & .menuItem__backgroundImage {
      transform: scale(1.1);
      transition-duration: 6s;
    }
    & .menuItem__contentContainer {
      opacity: 0.9;
    }
`

export const CategoryBackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  transition-duration: 200ms;
  background-image: ${({imageUrl}) => `url(${imageUrl})`}
`

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  position: absolute;
  background-color: #fff;
  opacity: 0.7;
  
  h1 {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
  }
  
  span {
    font-weight: lighter;
    font-size: 16px;
  }
`

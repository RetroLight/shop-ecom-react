import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  
  img {
    width: 100%;
    height: 100%;
  }
`

export const TextContainer = styled.span`
  width: 23%;
`

export const QuantityContainer = styled(TextContainer)`
  padding-left: 20px;
  display: flex;

  div {
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }
`

export const RemoveBtn = styled.div`
  padding-left: 12px;
  cursor: pointer;
`

import styled from 'styled-components';
import {ReactComponent as ShoppingBagIco} from "../../assets/124 shopping-bag.svg";

const checkUser = props => {
    return props.isActive ? 'opacity: 1' : 'opacity: 0.3';
}

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${checkUser};
`

export const ShoppingIcon = styled(ShoppingBagIco)`
  width: 24px;
  height: 24px;
`

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`

import styled, {css} from 'styled-components'
import { colors,media, getOuterSpace } from '../../style/constants'

export const Wrapper = styled.div`
   position: relative;
   top: 25%;
   z-index:0;
   cursor:none;
   ${getOuterSpace('padding')}
  ${media.md`
    // position: static;
    padding: 30% 0 0 5%;
  `}
\`

  .padding{
    height: 100vh;
    -webkit-transform: translateX(50%);
    -moz-transform: translateX(50%);
    -ms-transform: translateX(50%);
    -o-transform: translateX(50%);
  }
  svg {
    width: 100%;
    height: 100%;
  } 
  
  h1 {
    position: absolute;
    transform: translate(35%, 25%);
    margin-bottom: 0px !important;
    ${media.md`
        width: 300px;
        height: 250px;
        transform: translate(0%, 0%);
  `}
  ${media.sm`
        width: 200px;
        height: 150px;
        transform: translate(0%, 0%);
  `}
    }
    
  .line {
    // opacity: 50%;
    fill: none;
    stroke:${colors.gray700};
    stroke-width: 41px;
  }
      
  .dot {
    opacity: 75%;
    fill:${colors.gray500};
  }
`


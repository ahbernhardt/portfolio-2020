import styled, { css } from 'styled-components'
import { colors, media, getOuterSpace } from '../../style/constants'

export const Wrapper = styled.div`
  font-size: 1.3rem;
  max-width: 45rem;
  line-height: 1.3em;
  ${media.md`
    max-width: 32rem;
  `}
  ${media.sm`
    max-width: 95%;
    font-size: 1.1rem;
  `}
  ${media.xs`
    font-size: 1.1rem;
    line-spacing: 1rem;
  `}

  ${props => props.fixed
    ? css`
      ${getOuterSpace('padding')};
      position: absolute;
      top: 0;
      right: 0;
      text-align: right;
      color: ${colors.gray500};
      ${media.md`
        text-align: left;
        left: 0;
        right: auto;
      `}
    `
    : css`
      text-align: left;
    `
}
`

export const Title = styled.h1`
  margin-bottom:5px;
  
  .welcome {
    font-size:1.5rem;
    color: ${colors.yellow500};
  }
  
  .name {
    color: ${colors.white};
    font-weight: 700;
  }
  
  .sub-title{
    color: ${colors.gray700};
    font-size:1.2rem;
    font-weight: 400;
  }
  
`

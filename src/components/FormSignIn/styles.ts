import styled, { css } from 'styled-components'

import { lighten } from 'polished'

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    text-align: right;
    display: block;
    text-decoration: none;

    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
    }
  `}
`

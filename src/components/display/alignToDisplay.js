
import { css } from 'styled-components'

const alignToDisplay = css`
  @media (min-width: 900px) {
    margin: 0;
    position: relative;
    left: ${props => props.defaultDisplay ? "0" : "50%" };
    transform: translateX(${props => props.defaultDisplay ? "0" : "-50%" });
  }

`

export default alignToDisplay
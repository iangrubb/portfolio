
import { css } from 'styled-components'

const alignToDisplay = css`
  @media (min-width: 900px) {
    margin: 0;
    transition: left var(--desktop-duration) ease, transform var(--desktop-duration) ease;
    position: relative;
    left: ${props => props.defaultDisplay ? "0" : "50%" };
    transform: translateX(${props => props.defaultDisplay ? "0" : "-50%" });
  }

  @media (min-width: 1200px) {
    margin: 0;
    transition: left var(--desktop-duration) ease, transform var(--desktop-duration) ease;
    position: relative;
    left: ${props => props.defaultDisplay ? "0" : "50%" };
    transform: translateX(${props => props.defaultDisplay ? "0" : "-50%" });
  }

  @media (min-width: 1500px) {
    margin: 0;
    transition: left var(--desktop-duration) ease, transform var(--desktop-duration) ease;
    position: relative;
    left: ${props => props.defaultDisplay ? "0" : "50%" };
    transform: translateX(${props => props.defaultDisplay ? "0" : "-50%" });
  }
`

export default alignToDisplay
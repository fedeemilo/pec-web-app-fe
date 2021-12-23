import styled from 'styled-components'

const Paragraph = styled('p')<{color?: String}>`
    color: ${props => props?.color};
    margin: 0 0 2.1rem 0;
`

export default Paragraph
import styled from 'styled-components'

const Subtitle = styled('h2')<{color?: String}>`
    
    color: ${props => props?.color};
    margin-left: 3.875rem;
`

export default Subtitle
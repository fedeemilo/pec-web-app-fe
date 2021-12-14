import styled from 'styled-components'

const Index = styled('h1')<{color?: String}>`
    
    color: ${props => props?.color ? props?.color : 'blue'}

`

export default Index
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    height: 100%;
    width: 100%;
    background-color: #f2f2f2;
    justify-content: center;
    align-items: center;
`

export const  Header = styled.View`
    flex: 1;
`

export const Card = styled.View`
    display: flex;
    flex: 10;
    width: 150px;
    flex-direction: row;
    border-radius: 10px;
    border-width: 1px;
    border-color: black;
    justify-content: space-between;
`
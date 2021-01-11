import styled from "styled-components";

export const TaskStyle = styled.div`
    display: grid;
    justify-content: center;
    
`


export const FormStyle = styled.form`
    color: blue;
    display: grid;
    grid-template-columns: 1fr;
    margin: 5px;
    padding:5px;
    border: 2px solid black;
    

    button{
        margin: 10px;
        padding: 10px 20px;
        border-radius: 5px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-color: green;
        color: white;
    }
`


export const ListStyle = styled.div`
    border: 2px solid black;
    font-size: 22px;
    margin: 2px;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    h2{
        &.false{

        }
        &.true{
            text-decoration: line-through;
        }
    }
`
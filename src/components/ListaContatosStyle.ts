import styled from 'styled-components'

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-botoom: 20px;
`
export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`
export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #e08f67;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #e0c1b2;
  }
`
export const List = styled.ul`
  list-style: none;
  padding: 0;
`
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`
export const EditButton = styled.button`
  background-color: #e1bb73;
  color: black;
  border: none;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e0a800;
  }
`
export const DeleteButton = styled.button`
  background-color: #e07a67;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`

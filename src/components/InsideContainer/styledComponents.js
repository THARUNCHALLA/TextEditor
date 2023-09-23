import styled from 'styled-components'

export const Container = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  border: solid 1px #25262c;
  padding: 20px;
  @media (min-width: 768px) {
    background-color: #25262c;
    min-height: 100vh;
    border: solid 1px #25262c;
    padding: 100px;
  }
`
export const Container1 = styled.div`
  background-color: #1b1c22;
  min-height: 100vh;
  border: solid 1px #1b1c22;
  display: flex;
  width: 300px;
  margin: 0px;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    background-color: #1b1c22;
    min-height: 100vh;
    border: solid 1px #1b1c22;
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
  }
`
export const Image = styled.img`
  height: 200px;
  margin-top: 20px;
  @media (min-width: 768px) {
    height: 400px;
    margin-top: 20px;
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: white;
  margin-top: 20px;
  margin-left: 60px;
  @media (min-width: 768px) {
    font-family: 'Roboto';
    font-size: 22px;
    color: white;
    margin-top: 20px;
    margin-left: 160px;
  }
`
export const Unordered = styled.ul`
  background-color: #25262c;
  border: solid 1px #f1f5f9;
  width: 260px;
  margin-right: 0px;
  padding-top: 20px;
  margin-left: 20px;
  @media (min-width: 768px) {
    background-color: #25262c;
    border: solid 1px #f1f5f9;
    width: 500px;
    margin-right: 30px;
    padding-top: 20px;
  }
`
export const Button = styled.button`
  border: none;
  outline: none;
  font-family: 'roboto';
  font-size: 22px;
  cursor: pointer;
  background-color: transparent;
  margin-right: 20px;
  color: ${props => props.color};
`
export const Button1 = styled.button`
  font-family: 'roboto';
  font-size: 22px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  margin-right: 20px;
  color: ${props => props.color};
`
export const Button2 = styled.button`
  font-family: 'roboto';
  font-size: 22px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  margin-right: 20px;
  color: #f1f5f9;
  color: ${props => props.color};
`
export const Line = styled.hr`
  width: 200px;
  margin-right: 0px;
  margin-left: 0px;
  @media (min-width: 768px) {
    width: 440px;
    margin-right: 100px;
    margin-left: 0px;
  }
`
export const Text = styled.textarea`
  width: 200px;
  font-size: 16px;
  color: white;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontItalic};
  text-decoration: ${props => props.textDecoration};
  margin-right: 100px;
  margin-left: 0px;
  border: none;
  outline: none;
  background-color: transparent;
  @media (min-width: 768px) {
    width: 440px;
    font-size: 16px;
    color: white;
    font-weight: ${props => props.fontWeight};
    font-style: ${props => props.fontItalic};
    text-decoration: ${props => props.textDecoration};
    margin-right: 100px;
    margin-left: 0px;
    border: none;
    outline: none;
    background-color: transparent;
  }
`
export const Container2 = styled.div`
  display: flex;
`
export const List = styled.li`
  list-style-type: none;
`

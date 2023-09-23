import {Component} from 'react'

import {AiOutlineUnderline} from 'react-icons/ai'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {
  Container,
  Container1,
  Image,
  Heading,
  Unordered,
  Button,
  Button1,
  Button2,
  Line,
  Text,
  Container2,
  List,
} from './styledComponents'

class InsideContainer extends Component {
  state = {
    InitialBold: true,
    InitialBold1: true,
    InitialBold2: true,
    colorBold: '#f1f5f9',
    colorItalic: '#f1f5f9',
    colorUnderline: '#f1f5f9',
    bold: false,
    italic: false,
    under: false,
    boldWeight1: 'normal',
    underLine: 'normal',
    fontStyle1: 'normal',
  }

  boldClick = () => {
    this.setState(
      prevState => ({
        InitialBold: !prevState.InitialBold,
        bold: !prevState.bold,
      }),
      this.color,
    )
  }

  ItalicClick = () => {
    this.setState(
      prevState => ({
        InitialBold1: !prevState.InitialBold1,
        italic: !prevState.italic,
      }),
      this.color1,
    )
  }

  UnderlineClick = () => {
    this.setState(
      prevState => ({
        InitialBold2: !prevState.InitialBold2,
        under: !prevState.under,
      }),
      this.color2,
    )
  }

  color = () => {
    const {InitialBold, bold} = this.state
    const ans = InitialBold ? '#f1f5f9' : '#faff00'
    const ans1 = bold ? 'bold' : 'normal'
    this.setState({colorBold: ans, boldWeight1: ans1})
  }

  color1 = () => {
    const {InitialBold1, italic} = this.state
    const ans = InitialBold1 ? '#f1f5f9' : '#faff00'
    const ans2 = italic ? 'italic' : 'normal'
    this.setState({colorItalic: ans, fontStyle1: ans2})
  }

  color2 = () => {
    const {InitialBold2, under} = this.state
    const ans = InitialBold2 ? '#f1f5f9' : '#faff00'
    const ans3 = under ? 'underline' : 'normal'
    this.setState({colorUnderline: ans, underLine: ans3})
  }

  render() {
    const {
      colorBold,
      colorItalic,
      colorUnderline,
      boldWeight1,
      fontStyle1,
      underLine,
    } = this.state
    return (
      <Container>
        <Container1>
          <div>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <Unordered>
            <Container2>
              <List>
                <Button
                  data-testid="bold"
                  onClick={this.boldClick}
                  color={colorBold}
                >
                  <VscBold size={25} />
                </Button>
              </List>
              <List>
                <Button1
                  data-testid="underline"
                  color={colorUnderline}
                  onClick={this.UnderlineClick}
                >
                  <AiOutlineUnderline />
                </Button1>
              </List>
              <List>
                <Button2
                  data-testid="italic"
                  color={colorItalic}
                  onClick={this.ItalicClick}
                >
                  <GoItalic />
                </Button2>
              </List>
            </Container2>
            <Line />
            <Text
              cols="58"
              rows="33"
              onChange={this.textarea}
              fontWeight={boldWeight1}
              fontItalic={fontStyle1}
              textDecoration={underLine}
            />
          </Unordered>
        </Container1>
      </Container>
    )
  }
}

export default InsideContainer

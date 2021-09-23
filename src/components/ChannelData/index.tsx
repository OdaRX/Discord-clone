import React, { useRef, useEffect } from 'react'
import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messageRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messageRef])

  return (
    <Container>
      <Messages ref={messageRef}>
        {Array.from(Array(15).keys()).map(n => (
          <ChannelMessage
            author="Oda"
            date="30/05/2021"
            content="lorem ipsum dolor sit amet"
          />
        ))}

        <ChannelMessage
          author="Oda"
          date="30/05/2021"
          content={
            <>
              <Mention>@Oda </Mention>lorem ipsum dolor sit amet
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData

import '../public/global.css'
import { Card } from './card.js'
import { Button } from './button.js'
import { FlexCol, FlexRow, TwoColumnGrid } from './utils'
import { Text } from 'utopia-api'
import { Rectangle } from 'utopia-api'

export var App = () => {
  return (
    <FlexCol
      style={{
        width: '100%',
        height: '100%',
        padding: 8,
        gap: 8,
      }}
      data-uid='8a3'
    >
      <FlexRow data-uid='6b1'>
        <FlexCol
          style={{
            width: '100%',
            height: '100%',
            padding: 8,
            gap: 8,
          }}
          data-uid='a2a'
        >
          <span
            style={{
              fontSize: '40px',
              fontWeight: 700,
              fontStyle: 'normal',
              display: 'flex',
              flexBasis: 0,
            }}
            data-uid='a91'
            data-label='            Sequoia Design System         '
          >
            Sequoia Design System
          </span>
        </FlexCol>
      </FlexRow>
      <TwoColumnGrid style={{ gap: 8 }} data-uid='a1e'>
        <Text data-uid='b3f'>Card</Text>
        <Text data-uid='aaa'>Button</Text>
        <Card
          name='Test Card'
          description='This is a test card'
          image='https://utopia.app/og-card.png'
          rating={3}
          data-uid='f61'
        />
        <Button text='Add' data-uid='b55' />
      </TwoColumnGrid>
    </FlexCol>
  )
}

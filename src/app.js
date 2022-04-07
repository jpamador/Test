import * as React from 'react'
import '../public/global.css'
import { Card } from './card.js'
import { Button } from './button.js'
import { FlexCol, FlexRow, TwoColumnGrid } from './utils'

export var App = () => {
  const [numCards, setNumCards] = React.useState(1)

  const beaches = [
    {
      name: 'La Digue',
      country: 'Seychelles',
      image:
        'https://source.unsplash.com/jPmurJKSL_0/600x800',
      rating: 4,
    },
    {
      name: 'Isle of Pines',
      country: 'New Caledonia',
      image:
        'https://source.unsplash.com/n7DY58YFg9E/600x800',
      rating: 5,
    },
    {
      name: 'McWay Falls',
      country: 'California',
      image:
        'https://source.unsplash.com/07mSKrzKiRw/600x800',
      rating: 3,
    },
    {
      name: 'Meeru Island',
      country: 'Maldives',
      image:
        'https://source.unsplash.com/8OGJqpNMBGM/600x800',
      rating: 4,
    },
  ]
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
            }}
            data-uid='a91'
          >
            Beaches
          </span>
          <span
            style={{
              color: 'rgb(0, 0, 0, 0.5)',
              fontSize: '16px',
            }}
            data-uid='f38'
          >
            Featured
          </span>
        </FlexCol>
        <FlexCol
          style={{
            justifyContent: 'center',
            marginRight: 8,
            gap: 8,
          }}
          data-uid='873'
        >
          <Button
            text='+'
            onClick={() => {
              if (numCards < 4) {
                setNumCards((i) => i + 1)
              }
            }}
          />
          <Button
            text='+'
            onClick={() => {
              if (numCards > 0) {
                setNumCards((i) => i - 1)
              }
            }}
          />
        </FlexCol>
      </FlexRow>
      <TwoColumnGrid style={{ gap: 8 }} data-uid='a1e'>
        {Array(numCards)
          .fill()
          .map((_, i) => (
            <Card
              name={beaches[i].name}
              country={beaches[i].country}
              image={beaches[i].image}
              rating={beaches[i].rating}
              data-uid='f61'
            />
          ))}
      </TwoColumnGrid>
    </FlexCol>
  )
}

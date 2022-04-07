import * as React from 'react'
import '../public/globals.css'
import { Card } from './card.js'
import { FlexRow, FlexCol, TwoColumnGrid } from './utils'
import { SearchIcon } from '@heroicons/react/solid'
import { Ratings } from '/src/card.js'

export var App = (props) => {
  return (
    <FlexCol
      style={{
        width: '100%',
        height: '100%',
        padding: 8,
        gap: 8,
      }}
    >
      <span
        style={{
          fontSize: '40px',
          fontWeight: 700,
          fontStyle: 'normal',
        }}
      >
        Beaches
      </span>
      <span
        style={{
          color: 'rgb(0, 0, 0, 0.5)',
          fontSize: '16px',
        }}
      >
        Featured
      </span>
      <TwoColumnGrid style={{ gap: 8 }}>
        <Card
          name='La Digue'
          country='Seychelles'
          image='https://source.unsplash.com/jPmurJKSL_0/600x800'
          rating={10}
        />
        <Card
          name='Isle of Pines'
          country='New Caledonia'
          image='https://source.unsplash.com/n7DY58YFg9E/600x800'
          rating={5}
        />
        <Card
          name='McWay Falls'
          country='California'
          image='https://source.unsplash.com/07mSKrzKiRw/600x800'
          rating={3}
        />
        <Card
          name='Meeru Island'
          country='Maldives'
          image='https://source.unsplash.com/8OGJqpNMBGM/600x800'
          rating={4}
        />
      </TwoColumnGrid>
    </FlexCol>
  )
}


import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'

export var storyboard = (
  <Storyboard>
    <Scene
      style={{
        position: 'absolute',
        left: -1,
        top: 1,
        width: 375,
        height: 802,
        display: 'flex',
        flexDirection: 'column',
      }}
      data-label='Beaches'
    >
      <App style={{}} />
    </Scene>
  </Storyboard>
)

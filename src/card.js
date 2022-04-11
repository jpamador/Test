import { FlexCol, FlexRow } from './utils'

export function Ratings(props) {
  return (
    <FlexRow
      style={{ justifyContent: 'flex-start' }}
      data-uid='1ca'
    >
      {Array.from({ length: props.rating ?? 1 }).map(() => {
        return '*'
      })}
    </FlexRow>
  )
}

export var Card = (props) => {
  return (
    <FlexCol
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 1,
        boxShadow: '0px 2px 4px rgb(0, 0, 0, 0.12)',
        paddingBottom: 5,
        overflow: 'hidden',
        height: 326,
        ...props.style,
      }}
      data-uid='22d'
    >
      <div
        style={{
          flex: 1,
          backgroundImage: `url(${props.image})`,
          backgroundSize: 'cover',
          flexBasis: 150,
          marginBottom: 8,
        }}
        data-uid='2d0'
      />
      <div
        style={{
          position: 'relative',
          paddingLeft: 5,
          color: 'rgb(0, 0, 0, 0.5)',
        }}
        data-uid='70d'
      >
        {props.description}
      </div>
      <div
        style={{
          position: 'relative',
          paddingLeft: 5,
          fontSize: '18px',
          fontWeight: 700,
          fontStyle: 'normal',
          flexBasis: 0,
        }}
        data-uid='17b'
      >
        {props.name}
      </div>
      <Ratings rating={props.rating} data-uid='f2c' />
    </FlexCol>
  )
}

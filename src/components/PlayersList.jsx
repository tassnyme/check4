import React from 'react'
import players from './players'
import Player from './Player'

export default function PlayersList() {
    
  return (
    <div className='flex'>
      {players.map((item,index)=>(<Player key={index}  item={item}/>))}
    </div>

  )
}

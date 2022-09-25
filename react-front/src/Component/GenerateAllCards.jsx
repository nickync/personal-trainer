import React from 'react'
import TrainerCard from './TrainerCard'

export default function GenerateAllCards(props) {
  return (
    <div className='mx-auto d-flex-row text-center'>
        {props.trainers.map(trainer => <TrainerCard key={trainer.id} {...trainer}/>)}
    </div>
  )
}

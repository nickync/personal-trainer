import React from 'react'
import TrainerCard from './TrainerCard'
import { useState, useEffect } from 'react';
import TrainerService from '../service/TrainerService';

export default function TrainerList() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
      TrainerService.getTrainers().then(res => {
          setTrainers(res.data)
      })
  }, [])

  return (
    <div className='card mt-3'>
        {trainers.map(item => <TrainerCard key={item.id} trainer={item} />)}
    </div>
  )
}

import React, { useState } from 'react'
import { useContext } from 'react';
import LoginVerification from './LoginInfomation';

export default function AddTrainerComponent() {

    const isAdminValue = useContext(LoginVerification);

  return (

    <div>
        {isAdminValue ? <a className="nav-item nav-link text-info px-2" href='#'>Add Trainer</a> : null}
    </div>
  )
}

import React from 'react';
import requireAuth from './HOC/requireAuth'


const Feature = () => {
  return (
    <div>
      <h1> Feature </h1>
      This is the feature!
    </div>
  )
}

export default requireAuth(Feature)

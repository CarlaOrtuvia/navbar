import React from 'react'
import Alert from 'react-bootstrap/Alert'


const cartWidget = () => {
  return (
    <>
       {[
            'info',
          
          ].map((variant) => (
            <Alert key={variant} variant={variant}>
              Aún no puedes comprar!
            </Alert>
          ))}
    </>
  )
}

export default cartWidget
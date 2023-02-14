import React from 'react'
import Alert from 'react-bootstrap/Alert'

const flores = () => {
  return (

        <>
          {[
            'primary',
          
          ].map((variant) => (
            <Alert key={variant} variant={variant}>
              Aqui no hay nada vuelve luego!
            </Alert>
          ))}
        </>
      );
    }
    
    
export default flores
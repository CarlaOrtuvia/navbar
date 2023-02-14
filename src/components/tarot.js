import React from 'react'
import Alert from 'react-bootstrap/Alert'

const tarot = () => {
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
    
    
export default tarot
import React from 'react';
import Form from 'react-bootstrap/Form';

function Check() {
  return (
    <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
          
            id={`default-${type}`}
       
          />

        
        </div>
      ))}
    </Form>
  );
}

export default Check;
import React from 'react';
import { MDBInput } from "mdbreact";

export const Input = ({
  input,
  label,
  type,
  symbol,
  className,
  meta: { touched, error, warning }
}) => (
  <div className='form-group'>
    <div>
      { symbol &&
        <div className='input-group-prepend'>
          <div className='input-group-text'>{symbol}
          </div>
        </div>
      }
      <MDBInput {...input} type={type} className={className} label={label} autocomplete="off" />
    </div>
      {touched &&
        ((error && <div className='alert alert-danger'>{error}
        </div>))}
  </div>
)

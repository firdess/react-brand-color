import React from 'react';
import { getContrastYIQ } from '../helpers';

export default function Copied({ color }) {

  return (
    <div
      className="copied"
      style={{ '--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}` }}>
      Copied #{color} to clipboard</div>
  )
}

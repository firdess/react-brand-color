import React, { useContext } from 'react';
import { getContrastYIQ } from '../helpers';
import MainContext from '../MainContext';
import Clipboard from 'react-clipboard.js';

export default function Brand({ brand }) {
  const { selectedBrands, setSelectedBrands, setCopied } = useContext(MainContext);

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
    } else {
      setSelectedBrands([...selectedBrands, brand.slug])
    }

  }

  const setColor = (color) => {
    setCopied(color)
  }

  return (
    <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
      <h5 onClick={toggleSelected}>{brand.title}</h5>
      <div className="brand-color">
        {
          brand.colors.map((color, key) => (
            <Clipboard
              key={key}
              onSuccess={() => setColor(color)}
              component="span"
              data-clipboard-text={color}
              style={{ '--bgColor': `#${color}`, '--text-color': `${getContrastYIQ(color)}` }}>
              {color}
            </Clipboard>
          ))
        }
      </div>
    </div>
  )
}

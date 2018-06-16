import React from 'react';

export default ({ keys, onInputChange, state }) => {
  const inputs = keys.map((key, index) => 
    <fieldset key={key}>
      <label>
        <span>Side {index + 1}</span>
        <input
          onChange={(e) => onInputChange(e, key)}
          type="number"
          value={state.side} />
      </label>
    </fieldset>
  );

  return (
    <div>
      {inputs}
    </div>
  )
}
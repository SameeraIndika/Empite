import React from 'react'

interface LocationProps {
    name: string;
    address: string;
}

const Location = ( { name, address }:LocationProps ) => {
  return (
    <div>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-8">
          <h2 className="text-dark-3 space-grotesk-bold-22">{name}</h2>
          <p className="text-secondary muli-bold-24">{address}</p>
        </div>
      </div>
    </div>
  );
}

export default Location

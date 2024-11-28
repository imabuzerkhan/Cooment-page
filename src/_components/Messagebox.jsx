import React from 'react';
import PublicCard from './PublicCard';
import SelectionButton from './SelectionButton';

const Messagebox = ({ title }) => {
  return (
    <div>
      <h1 className="font-semibold font-serif text-3xl">
        Feeds Matching Your Character
      </h1>

      <div className="selection-button flex items-center gap-2 py-4 ">
        <SelectionButton title = "Public" />
        <SelectionButton title = "Private" />


      </div>

      <PublicCard />
    </div>
  );
};

export default Messagebox;

"use client"


import React, { useState } from 'react';
import PublicCard from './PublicCard';
import SelectionButton from './SelectionButton';
import Privatecard from './Privatecard';

const Messagebox = ({ title }) => {

 const [Selectedcard , Setselectedcard] = useState("public")
   


  return (
    <div>
      <h1 className="font-semibold font-serif text-3xl">
        Feeds Matching Your Character
      </h1>

      <div className="selection-button flex items-center gap-2 py-4 ">
        <SelectionButton  title = "Public" 
        onclick={() => Setselectedcard("public") }

        />
        <SelectionButton title = "Private"
        onclick={() => Setselectedcard("private") }
        />


      </div>
{Selectedcard === "public" &&  <PublicCard /> }

{Selectedcard === "private" &&  <Privatecard/> }

    

    
    </div>
  );
};

export default Messagebox;

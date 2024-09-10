import React from "react";
import Entry from "./entry";
import Emojipedia from "../emojipedia";
function createEntry(Emojipedia) {
  return <Entry key={Emojipedia.id} emoji={Emojipedia.emoji} name={Emojipedia.name} message={Emojipedia.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emojipedia.map(createEntry)}



      </dl>
    </div>
  );
}

export default App;

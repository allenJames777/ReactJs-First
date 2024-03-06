import { useState } from "react";

const AddNote = ({ handleAdd }) => {
    const [titleValue, setTitleValue] = useState("");
    const [authorValue, setAuthorValue] = useState("");
  
    const handleClick = () => {
      console.log("Button clicked");
      handleAdd(titleValue, authorValue);
    };
  
    return (

      <div className="float-right w-1/4">
        <form className="flex flex-col gap-2">
          <input
            type="text"
            className="w-64 h-12 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-300"
            placeholder="Title"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
          />
          <input
            type="text"
            className="w-64 h-12 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-300"
            placeholder="Author"
            value={authorValue}
            onChange={(e) => setAuthorValue(e.target.value)}
          />
          <button
            id="button"
            className="w-64 h-12 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded-md shadow-md"
            onClick={handleClick}
          >
            Add
          </button>
        </form>
      </div>
    );
  };
  
  export default AddNote;
  
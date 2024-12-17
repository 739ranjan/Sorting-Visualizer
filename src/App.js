import MyArray from "./components/MyArray";
import BubbleSort from "./pages/BubbleSort";
import { useState } from "react";
import InsertionSort from "./pages/InsertionSort";
import QuickSort from "./pages/QuickSort";
import SelectionSort from "./pages/SelectionSort";

function App() {
  const [arr, setArr] = useState([12, 4, 1, 8, 5, 2, 3, 7]);
  const [sorting, setSorting] = useState("select");
  const handleChange = (e) => {
    let value = e.target.value;
    setSorting(value);
  }
  
  return (
    <div className="flex flex-col justify-center items-center my-2">
      <h1 className="text-3xl font-bold text-red-600 my-5">Sorting Visualization</h1>
      <div className="flex flex-col w-[80%]">
        
      <div className="flex flex-col w-full mt-5 md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <MyArray ar={arr} />
        <select
          className="w-full md:w-auto border-2 p-2 rounded-md text-sm"
          onChange={handleChange}
        >
          <option value="select">Select Sorting Technique</option>
          <option value="bubble">Bubble Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="selection">Selection Sort</option>
          {/* <option value="quick">Quick Sort</option> */}
        </select>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-5 border-4 p-8 py-4 rounded-xl">
        {
          sorting === "bubble" ? (<BubbleSort ar={arr} />) :
          (sorting === "insertion" ? (<InsertionSort ar={arr}/>) :
          (sorting === "quick" ? (<QuickSort ar={arr} />) :
          (sorting === "selection" ? (<SelectionSort ar={arr} />) : 
          (<div className="w-full h-80 flex flex-col justify-center items-center mt-5 border-4 p-10 rounded-xl">
            <h1 className="text-3xl text-gray-500 text-center">Select one of the sorting algorithm</h1>
          </div>))))
        }
        
      </div>
      </div>
    </div>
  );
}

export default App;

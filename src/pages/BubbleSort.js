import GraphLine from '../components/GraphLine';
import MyArray from '../components/MyArray';
import {max} from '../functions/max';
import { useState, useEffect } from "react";


const BubbleSort = ({ar}) => {
  const [arr, setArr] = useState(ar);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swapIndex, setSwapIndex] = useState(0); 
  const [isSorting, setIsSorting] = useState(true); 

  useEffect(() => {
    // to prevent execution when array is sorted
    if (!isSorting) return;

    // delay process of execution for 2ms to make the sorting visual proper
    const interval = setInterval(() => {
      let array = [...arr];
      let swapped = false;

      // one pass at a time
        if (swapIndex < array.length - currentIndex - 1) {
          if (array[swapIndex] > array[swapIndex + 1]) {
            // swap
            let temp = array[swapIndex];
            array[swapIndex] = array[swapIndex + 1];
            array[swapIndex + 1] = temp;
            swapped = true;
          }
          setSwapIndex((prev) => prev + 1);
        } else {
          setSwapIndex(0);
          setCurrentIndex((prev) => prev + 1);

          // stops sorting if no swaps
          if (!swapped || currentIndex >= array.length - 1) {
            clearInterval(interval);
          }
        }

      setArr(array);
    }, 200);

    return () => clearInterval(interval);
  }, [arr, swapIndex, currentIndex, isSorting]);

    const maximum = max(arr);

  return (
    <>
        <div className='mt-0 text-xl'>
            <h1>Bubble Sort</h1>
        </div>
        <div className="w-full border-gray-400 border-l-4 border-b-4 mb-0 p-1 pl-0 pr-10 pt-5">
            {arr.map((num, index) => {
              let colour = "";
              if(swapIndex === index)
                colour = "red";
                return <GraphLine key={index} num={num} max={maximum} colour={colour} />
            })}
        </div>
        <div className='mt-4 w-full'>
          <MyArray ar={arr} />
      </div>
    </>
  )
}

export default BubbleSort;
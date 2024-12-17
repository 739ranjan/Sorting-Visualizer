import GraphLine from '../components/GraphLine';
import MyArray from '../components/MyArray';
import { max } from '../functions/max';
import { useState, useEffect } from "react";

const SelectionSort = ({ ar }) => {
  const [arr, setArr] = useState(ar);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [minIndex, setMinIndex] = useState(0);
  const [isSorting, setIsSorting] = useState(true);

  useEffect(() => {
    // if sorting is completed
    if (!isSorting) return;

    //  set delay to make sorting visible
    const interval = setInterval(() => {
      let array = [...arr];
      let tempMinIndex = minIndex;

      // Find the smallest element in the unsorted portion
      for (let j = currentIndex + 1; j < array.length; j++) {
        if (array[j] < array[tempMinIndex]) {
          tempMinIndex = j;
        }
      }

      // If we've checked the entire unsorted part, swap the elements
      if (minIndex <= tempMinIndex) {
        // swap
        let temp = array[currentIndex];
        array[currentIndex] = array[tempMinIndex];
        array[tempMinIndex] = temp;

        setArr(array);
        setCurrentIndex((prev) => prev + 1);

        // Stop sorting if the entire array is sorted
        if (currentIndex >= array.length - 1) {
          setIsSorting(false);
          clearInterval(interval);
        } else {
          setMinIndex(currentIndex + 1);
        }
      }
    }, 500); 

    return () => clearInterval(interval);
  }, [arr, currentIndex, minIndex, isSorting]);

  const maximum = max(arr);
  return (
    <>
      <div className="text-xl mt-0">
        <h1>Selection Sort</h1>
      </div>
      <div className="w-full border-gray-400 border-l-4 border-b-4 mb-0 p-1 pl-0 pr-10 pt-5">
        {arr.map((num, index) => {
          let colour = "";
          // if (index === currentIndex) colour = "green";
          if (index === minIndex) colour = "red";
          return <GraphLine key={index} num={num} max={maximum} colour={colour} />;
        })}
      </div>
      <div className='mt-4 w-full'>
          <MyArray ar={arr} />
      </div>
      </>
  );
};

export default SelectionSort;

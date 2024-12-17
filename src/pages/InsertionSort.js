import GraphLine from '../components/GraphLine';
import MyArray from '../components/MyArray';
import { max } from '../functions/max';
import { useState, useEffect } from "react";

const InsertionSort = ({ ar }) => {
  const [arr, setArr] = useState(ar);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [sortedIndex, setSortedIndex] = useState(0);
  const [isSorting, setIsSorting] = useState(true);

  useEffect(() => {
    // stops when sorting is completed
    if (!isSorting) return;

    // set delay to make sorting visible
    const interval = setInterval(() => {
      let array = [...arr];

      // Check if we need to perform insertion
      if (sortedIndex >= 0 && array[sortedIndex] > array[sortedIndex + 1]) {
        // swap
        let temp = array[sortedIndex];
        array[sortedIndex] = array[sortedIndex + 1];
        array[sortedIndex + 1] = temp;
        
        setSortedIndex((prev) => prev - 1);
      } else {
        setSortedIndex(currentIndex - 1);
        setCurrentIndex((prev) => prev + 1);

        if (currentIndex >= array.length) {
          setIsSorting(false);
          clearInterval(interval);
        }
      }

      setArr(array); 
    }, 500);

    return () => clearInterval(interval);
  }, [arr, sortedIndex, currentIndex, isSorting]);

  const maximum = max(arr);

  return (
    <>
      <div className="text-xl mt-0">
        <h1>Insertion Sort</h1>
      </div>
      <div className="w-full border-gray-400 border-l-4 border-b-4 mb-0 p-1 pl-0 pr-10 pt-5">
        {arr.map((num, index) => {
          let colour = "";
          if (index === currentIndex) colour = "red";
        //   if (index === sortedIndex) colour = "blue"; 
          return <GraphLine key={index} num={num} max={maximum} colour={colour} />;
        })}
      </div>
      <div className='mt-4 w-full'>
          <MyArray ar={arr} />
      </div>
    </>
  );
};

export default InsertionSort;

import GraphLine from '../components/GraphLine';
import MyArray from '../components/MyArray';
import { max } from '../functions/max';
import { useState, useEffect } from 'react';

const QuickSort = ({ ar }) => {
  const [arr, setArr] = useState(ar);
  const [pivotIndex, setPivotIndex] = useState(null);
  const [lowIndex, setLowIndex] = useState(0);
  const [highIndex, setHighIndex] = useState(0);
  const [stack, setStack] = useState([[0, ar.length - 1]]);
  const [isSorting, setIsSorting] = useState(true);

  useEffect(() => {
    if (!isSorting || stack.length === 0) return;

    const interval = setInterval(() => {
      let array = [...arr];
      let currentStack = [...stack];

      if (pivotIndex === null) {
        // Start a new partition
        const [start, end] = currentStack.pop();
        setStack(currentStack);
        if (start < end) {
          setPivotIndex(end);
          setLowIndex(start);
          setHighIndex(start);
        } else {
          if (currentStack.length === 0) {
            setIsSorting(false);
          }
        }
        
      } else {
        // Perform partitioning
        if (highIndex < pivotIndex) {
          if (arr[highIndex] < arr[pivotIndex]) {
            [array[lowIndex], array[highIndex]] = [array[highIndex], array[lowIndex]];
            setLowIndex((prev) => prev + 1);
          }
          setHighIndex((prev) => prev + 1);
        } else {
          // Swap pivot into the correct position
          [array[lowIndex], array[pivotIndex]] = [array[pivotIndex], array[lowIndex]];

          // Push the subarrays into the stack
          currentStack.push([0, lowIndex - 1]);
          currentStack.push([lowIndex + 1, pivotIndex - 1]);
          setStack(currentStack);
          // Reset indices
          setPivotIndex(null);
          setLowIndex(0);
          setHighIndex(0);

          if (currentStack.length === 0) {
            setIsSorting(false);
          }
        }
        
      }
      setArr(array);
    }, 500);

    return () => clearInterval(interval);
  }, [arr, pivotIndex, lowIndex, highIndex, stack, isSorting]);

  const maximum = max(arr);

  return (
    <>
      <h1>Working on it.......................</h1>
      <div className="w-full border-gray-400 border-l-4 border-b-4 mb-5 p-1 pl-0 pr-10 pt-5">
        {arr.map((num, index) => {
          let colour = "";
          if (index === pivotIndex) colour = "blue";
          else if (index === lowIndex || index === highIndex) colour = "red";
          return <GraphLine key={index} num={num} max={maximum} colour={colour} />;
        })}
      </div>
      <div className='mt-4 w-full flex justify-center items-center'>
        <div>
          <MyArray ar={arr} />
        </div>
      </div>
    </>
  );
};

export default QuickSort;

const GraphLine = ({max, num, colour}) => {
    const width = Math.floor((num / max) * 100);
  return (
    <div className='h-6 my-1 bg-blue-500 flex justify-center items-center text-white' style={{ width: `${width}%`, background:`${colour}`}}>{num}</div>
  )
}

export default GraphLine;
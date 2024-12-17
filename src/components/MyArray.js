import ArrayItem from '../components/ArrayItem'

const MyArray = ({ar}) => {
    let arr = [12, 34, 1, 34, 5, 12, 3, 7];
    if (ar) {
        arr = [...ar];
    }
    return (
        <div className='w-full flex justify-center items-center space-x-1'>
            {arr.map((item, index) => 
                <ArrayItem key={index} item={item} />
            )}
        </div>
    )
}

export default MyArray;
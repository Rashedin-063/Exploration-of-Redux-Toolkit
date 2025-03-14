const Stats = ({count}) => {
  return (
    <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded-md shadow-md w-[450px]">
      <h3 className="text-2xl font-semibold">Total Count: {count}</h3>
    </div>
  )
}
export default Stats
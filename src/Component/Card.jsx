import ShowOrder from "../Component/ShowOrder";

const Card = () => {
  return (
    <div>
    <div className=" mx-auto mt-20 flex gap-5">
        <div className=" shadow rounded w-40 lg:w-80 lg:h-32 h-28 text-center ms-5 py-5">
            <h1 className=" text-[#E93BED] text-4xl font-bold">0</h1>
            <p className=" text-sm">Created Order</p>
        </div>
        <div className=" shadow rounded w-40 lg:w-80 lg:h-32 h-28 text-center py-5">
            <h1 className=" text-[#0BCE83] text-4xl font-bold">0</h1>
            <p className=" text-sm">Accepted Order</p>
        </div>
        <div className=" shadow rounded w-40 lg:w-80 lg:h-32 h-28 text-center me-5 py-5 ">
            <h1 className=" text-[#001B87] text-4xl font-bold">0</h1>
            <p className=" text-sm">Completed Order</p>
        </div>
    </div>
    <ShowOrder/>
    </div>
  )
};

export default Card;

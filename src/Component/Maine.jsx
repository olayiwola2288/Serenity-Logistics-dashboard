import { Sidebar } from "flowbite-react";
import { useState } from "react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { TiTimesOutline } from "react-icons/ti";

const Maine = () => {
  const [visible, setVisible] = useState(true);

  const handleToggle = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <button
        onClick={handleToggle}
        className=" text-green-700 hover:text-green-600 mt-4 fixed right-[150px] lg:right-[1145px]"
      >
        <TiTimesOutline />
      </button>
      {visible && (
        <Sidebar className=" sidebar h-screen w-64">
          <div className=" bg-green-800 h-full overflow-y-auto overflow-x-hidden rounded px-3 py-4">
            <Sidebar.Items className="">
              <Sidebar.ItemGroup className=" ">
                <Sidebar.Item
                  href="#"
                  className=" text-white hover:text-green-700"
                >
                  <div className=" flex gap-5">
                    <p className=" text-3xl"> <HiChartPie /></p>
                    <p >Dashboard </p>
                  </div>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  className=" text-white hover:text-green-700"
                >
                  <div className=" flex gap-5">
                     <p className=" text-3xl"><HiInbox /></p>
                    <p > Inbox </p>
                  </div>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  className="text-white hover:text-green-700"
                >
                  <div className=" flex gap-5">
                    <p className=" text-3xl"><HiUser /></p>
                    <p > Users </p>
                  </div>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  className="text-white hover:text-green-700"
                >
                  <div className=" flex gap-5 ">
                   <p className=" text-3xl"><HiShoppingBag /></p>
                    <p > Products </p>
                  </div>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  className="text-white hover:text-green-700"
                >
                  <div className=" flex gap-5">
                    <p className=" text-3xl"><HiArrowSmRight /></p>
                    <p > Sign In </p>
                  </div>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  className="text-white hover:text-green-700"
                >
                  <div className=" flex gap-5">
                    <p className=" text-3xl"><HiTable /></p>
                    <p> Sign Up </p>
                  </div>
                </Sidebar.Item>
                <Sidebar.Item
                  href="/"
                  className="text-green-900 hover:text-green-700 text-center mt-11 bg-gray-50"
                >
                  <div className=" flex gap-5 ">
                    <HiOutlineArrowNarrowRight />
                    <p > Logout </p>
                  </div>
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </div>
        </Sidebar>
      )}
    </div>
  );
};

export default Maine;

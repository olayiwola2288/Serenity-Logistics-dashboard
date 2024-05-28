import { Sidebar } from "flowbite-react";
import { useState } from "react";
import img1 from "../../public/logo-removebg-preview.png";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { FiAlignJustify } from "react-icons/fi";

const Maine = () => {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <div className="flex justify-between px-8 py-2 bg-green-800 lg:bg-white lg:py-0 lg:px-0">
        <img src={img1} alt="" className=" w-[20%] lg:hidden" />
        <button
          onClick={handleToggle}
          className=" text-white hover:text-green-600  lg:hidden"
        >
          <FiAlignJustify />
        </button>
      </div>
      {visible && (
        <Sidebar className=" sidebar h-screen w-64">
          <div className=" bg-green-800 h-full overflow-y-auto overflow-x-hidden rounded px-3 py-4">
            <Sidebar.Items className="">
              <Sidebar.ItemGroup className=" ">
                <img src={img1} alt="" className=" hidden lg:block" />
                <Sidebar.Item
                  href="#"
                  className=" text-white hover:text-green-700"
                >
                  <div className=" flex gap-5">
                    <p className=" text-3xl">
                      {" "}
                      <HiChartPie />
                    </p>
                    <p>Dashboard </p>
                  </div>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  className=" text-white hover:text-green-700"
                >
                  <div className=" flex gap-5">
                    <p className=" text-3xl">
                      <HiInbox />
                    </p>
                    <p> Inbox </p>
                  </div>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  className="text-white hover:text-green-700"
                >
                  <div className=" flex gap-5">
                    <p className=" text-3xl">
                      <HiUser />
                    </p>
                    <p> Users </p>
                  </div>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  className="text-white hover:text-green-700"
                >
                  <div className=" flex gap-5 ">
                    <p className=" text-3xl">
                      <HiShoppingBag />
                    </p>
                    <p> Products </p>
                  </div>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  className="text-white hover:text-green-700"
                >
                  <div className=" flex gap-5">
                    <p className=" text-3xl">
                      <HiArrowSmRight />
                    </p>
                    <p> Sign In </p>
                  </div>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  className="text-white hover:text-green-700"
                >
                  <div className=" flex gap-5">
                    <p className=" text-3xl">
                      <HiTable />
                    </p>
                    <p> Sign Up </p>
                  </div>
                </Sidebar.Item>
                <Sidebar.Item
                  href="https://logistic-azure.vercel.app/"
                  className="text-green-900 hover:text-green-700 text-center mt-11 bg-gray-50"
                >
                  <div className=" flex gap-5 ">
                    <HiOutlineArrowNarrowRight />
                    <p> Logout </p>
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

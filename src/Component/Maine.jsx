import { Sidebar } from "flowbite-react";
import { useState, useEffect } from "react";
import img1 from "../../public/logo-removebg-preview.png";
import { HiChartPie, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FiAlignJustify } from "react-icons/fi";
import { ImUserPlus, ImUser } from "react-icons/im";
import { FaWallet } from "react-icons/fa";
import { ImBubble2 } from "react-icons/im";
import { CgMediaLive } from "react-icons/cg";
import { CiDeliveryTruck } from "react-icons/ci";

const Maine = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1024) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      if (newScreenWidth < 1024) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <FiAlignJustify className=" text-2xl" />
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
                  <div className=" flex gap-5 my-4">
                    <p className=" text-3xl">
                      {" "}
                      <CiDeliveryTruck />
                    </p>
                    <p> Order </p>
                  </div>
                </Sidebar.Item>

                <Sidebar.Item
                  href="#"
                  className=" text-white hover:text-green-700"
                >
                  <div className=" flex gap-5 my-4">
                    <p className=" text-2xl">
                      <ImBubble2 />
                    </p>
                    <p> Chat </p>
                  </div>
                </Sidebar.Item>

                <Sidebar.Item
                  href="#"
                  className="text-white hover:text-green-700"
                >
                  <div className=" flex gap-5 my-4">
                    <p className=" text-2xl">
                      <CgMediaLive />
                    </p>
                    <p>Pricing </p>
                  </div>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  className="text-white hover:text-green-700"
                >
                  <div className=" flex gap-5 my-4 ">
                    <p className=" text-2xl">
                      <FaWallet />
                    </p>
                    <p> Wallet </p>
                  </div>
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  className="text-white hover:text-green-700"
                >
                  <div className=" flex gap-5 my-4">
                    <p className=" text-2xl">
                      <ImUserPlus />
                    </p>
                    <p> Referral </p>
                  </div>
                </Sidebar.Item>

                <Sidebar.Item
                  href="#"
                  className="text-white hover:text-green-700"
                >
                  <div className=" flex gap-5 my-4">
                    <p className=" text-2xl">
                      <ImUser />
                    </p>
                    <p> Profile</p>
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

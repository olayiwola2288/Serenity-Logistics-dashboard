import { Button, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";

const ShowOrder = () => {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef < HTMLInputElement > null;

  return (
    <div className=" mt-10">
      <div className=" flex justify-end me-4">
        <Button
          onClick={() => setOpenModal(true)}
          className=" bg-green-800 hover:bg-red-800"
        >
          Make Order
        </Button>
      </div>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
        initialFocus={emailInputRef}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Create Order
            </h3>
            <div>
              <TextInput
                id="pickName"
                placeholder="pick up full name"
                required
              />
              <label htmlFor="pickName">
                <small>Name of the person we are picking item from</small>
              </label>
            </div>
            <div>
              <TextInput
                id="pickAddress"
                placeholder="pick up address"
                required
              />
              <label htmlFor="pickAddress">
                <small>
                  Kindly give detailed address, please select from the available
                  dropdown landmark option that will appear as you type
                </small>
              </label>
            </div>
            <div>
              <TextInput
                id="pickPhoneNumber"
                placeholder="pick up phone number"
                required
              />
              <label htmlFor="pickPhoneNumber">
                <small>Provide phone number and other line</small>
              </label>
            </div>
            <div>
              <TextInput id="item" placeholder="pick up item" required />
            </div>
            <div>
              <TextInput
                id="dropOff"
                placeholder="Drop off wight in kg (optional)"
                required
              />
            </div>

            <div className=" flex gap-4 justify-center">
              <div>
                <input
                  type="radio"
                  id="Bicycle"
                  name="deliveryMode"
                  value="bicycle"
                />
                <label htmlFor="Bicycle">
                  <small> Bicycle </small>{" "}
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Bike"
                  name="deliveryMode"
                  value="Bike"
                />
                <label htmlFor="Bike">
                  {" "}
                  <small> Bike </small>{" "}
                </label>
              </div>
              <div>
                <input type="radio" id="Car" name="deliveryMode" value="car" />
                <label htmlFor="Car">
                  {" "}
                  <small> Car </small>{" "}
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Truck"
                  name="deliveryMode"
                  value="truck"
                />
                <label htmlFor="Truck">
                  <small> Truck </small>{" "}
                </label>
              </div>
            </div>
            <div>
              <textarea
                name=""
                id=""
                className=" rounded w-full h-20 px-5"
                placeholder="note"
              ></textarea>
            </div>
            <div></div>
            <TextInput
              id="receiverName"
              placeholder="Drop off full name"
              required
            />
            <label htmlFor="receiverName">
              <small>Receiver name</small>
            </label>
            <TextInput
              id="receiverName"
              placeholder="Drop off Address"
              required
            />
            <label htmlFor="receiverName">
              <small>
                Receiver address, please select from the available dropdown
                landmark option that will appear as you type
              </small>
            </label>
            <TextInput
              id="receiverName"
              placeholder="Drop off phone number"
              required
            />
            <label htmlFor="receiverName">
              <small>Kindly provide main line and other line</small>
            </label>
            <div>
              <small>Delivery Type</small>
              <div>
                <input
                  type="radio"
                  id="sameCity"
                  name="deliveryType"
                  value="sameCity"
                  title="sameCity"
                />
                <label htmlFor="SameCity">
                  <small> City (delivery within same state or city) </small>
                </label>

                <div>
                  <input
                    type="radio"
                    id="interState"
                    name="deliveryType"
                    value="interState"
                    title="interState"
                  />
                  <label htmlFor="interState">
                    <small> Inter-State </small>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="interCountry"
                    name="deliveryType"
                    value="interCountry"
                    title="interCountry"
                  />
                  <label htmlFor="interCountry">
                    <small> Inter-Country </small>
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex justify-end">
              <Button className=" bg-green-800 "><small>Add</small></Button>
            </div>
            <div className=" flex justify-center">
              <Button className=" bg-green-800 py-1 px-6">Preview </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ShowOrder;

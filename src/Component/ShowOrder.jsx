import { Button, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";

const ShowOrder = () => {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef < HTMLInputElement > null;

  return (
    <div className=" mt-10">
      <div className=" flex justify-end me-4">
        <Button onClick={() => setOpenModal(true)}>Make Order</Button>
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
                  dropdown landmark option that'll appear as you type
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

            <div>
              <div>
                <input
                  type="radio"
                  id="Bicycle"
                  name="deliveryMode"
                  value="bicycle"
                />
                <label htmlFor="Bicycle"> Bicycle </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Bike"
                  name="deliveryMode"
                  value="Bike"
                />
                <label htmlFor="Bike"> Bike </label>
              </div>
              <div>
                <input type="radio" id="Car" name="deliveryMode" value="car" />
                <label htmlFor="Car"> Car </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Truck"
                  name="deliveryMode"
                  value="truck"
                />
                <label htmlFor="Truck"> Truck </label>
              </div>
            </div>

            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a
                href="#"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ShowOrder;

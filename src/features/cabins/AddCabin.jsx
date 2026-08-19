import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleClose() {
    console.log("Close Clicked.....");
    setIsOpenModal((showForm) => !showForm);
  }
  return (
    <>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add New Cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default AddCabin;

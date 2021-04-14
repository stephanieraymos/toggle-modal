import { useState } from "react";
const toggleModal = (openModal, closeModal) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  export const openModal = () => {
    setIsModalOpen(true);
  };
  export const closeModal = () => {
    setIsModalOpen(false);
  };

  if (isModalOpen) {
    return openModal();
  } else {
    return closeModal();
  }
};

//Used to import into projects
module.exports.toggleModal = toggleModal;

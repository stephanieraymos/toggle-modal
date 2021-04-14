import { useState } from "react";
const toggleModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
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

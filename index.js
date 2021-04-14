import { useState } from "react";

export function toggleModal(openModal, closeModal) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  export const openModal = () => {
    setIsModalOpen(true);
  };
  export const closeModal = () => {
    setIsModalOpen(false);
  };

  return openModal, closeModal;
}

//Used to import into projects
module.exports.toggleModal = toggleModal;

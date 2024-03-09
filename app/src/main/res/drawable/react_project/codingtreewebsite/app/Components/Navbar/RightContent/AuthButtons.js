import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import React, { useState } from "react";

const AuthButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalView, setModalView] = useState("login");

  const openModal = (view) => {
    setIsModalOpen(true);
    setModalView(view);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        variant="solid"
        display={"none"}
        backgroundColor="#ff4500"
        color="#fff"
        _hover={{ backgroundColor: "#dd3700" }}
        height="40px"
        width="120px"
        borderRadius="20px"
        fontSize="16px"
        marginTop="12px"
        boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        onClick={() => openModal("login")}
        border="none" 

      >
        Log In
      </Button>
      <Button
         variant="solid"
         display={"none"}
         backgroundColor="#ff4500"
         color="#fff"
         _hover={{ backgroundColor: "#dd3700" }}
         height="40px"
         width="120px"
         borderRadius="20px"
         fontSize="16px"
         marginTop="12px"
         boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        onClick={() => openModal("signup")}
        border="none"
      >
        Sign Up
      </Button>

      {/* Render inline modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalView === "login" ? "Log In" : "Sign Up"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {modalView === "login" ? <p>Login form goes here</p> : <p>Sign-up form goes here</p>}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthButtons;

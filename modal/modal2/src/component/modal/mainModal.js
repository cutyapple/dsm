import {
  mainModalClassName,
  deleteCheckModalClassName,
} from "../../../constant/class.js";

import { makeElement } from "../../feature/modal/makeElement.js";
import { createModalHeader } from "../../feature/modal/modalHeader.js";
import {
  showModal,
  hideModal,
  createModal,
} from "../../feature/modal/createModal.js";

const onClickModifyButton = (modalOverlayClassName) => {
  hideModal("." + modalOverlayClassName);
};
const onClickDeleteCheckModalButton = (
  modalOverlayClassName,
  deleteCheckOverlayClassName
) => {
  hideModal("." + modalOverlayClassName);
  showModal("." + deleteCheckOverlayClassName);
};

const createMainModalContent = ({ className }) => {
  const {
    deleteCheckOverlayClassName,
    modalOverlayClassName,
    modifyButtonClassName,
    deleteButtonClassName,
  } = className;

  const mainModalContent = document.createElement("div");

  const modifyButtonInfo = {
    element: "button",
    innerText: "수정",
    classNameArray: [modifyButtonClassName],
    addEvent: {
      eventName: "click",
      func: () => {
        onClickModifyButton(modalOverlayClassName);
      },
    },
  };
  const deleteButtonInfo = {
    element: "button",
    innerText: "삭제",
    classNameArray: [deleteButtonClassName],
    addEvent: {
      eventName: "click",
      func: () => {
        onClickDeleteCheckModalButton(
          modalOverlayClassName,
          deleteCheckOverlayClassName
        );
      },
    },
  };
  const modifyButton = makeElement(modifyButtonInfo);
  const deleteButton = makeElement(deleteButtonInfo);

  mainModalContent.append(modifyButton, deleteButton);

  return mainModalContent;
};

const createMainModal = (mainModal) => {
  const { overlay, wrapper } = mainModalClassName;

  const modalClassinfo = {
    overlayClass: overlay,
    modalWrapperClass: wrapper,
  };

  const modal = createModal({
    classObject: modalClassinfo,
    children: mainModal,
  });

  return modal;
};

export const setMainModal = (parent) => {
  const mainModal = document.createElement("div");
  const {
    overlay,
    header,
    title,
    modifyButton,
    deleteButton,
  } = mainModalClassName;
  const { overlay: deleteCheckOverlay } = deleteCheckModalClassName;

  const mainModalHeaderInfoObj = {
    title: "게시글 수정/삭제",
    className: {
      modalHeaderClassName: header,
      modalTextClassName: title,
    },
  };
  const mainModalHeader = createModalHeader(mainModalHeaderInfoObj);

  const mainModalContentInfoObj = {
    className: {
      deleteCheckOverlayClassName: deleteCheckOverlay,
      modalOverlayClassName: overlay,
      modifyButtonClassName: modifyButton,
      deleteButtonClassName: deleteButton,
    },
  };
  const mainModalContent = createMainModalContent(mainModalContentInfoObj);

  mainModal.append(mainModalHeader, mainModalContent);

  const modal = createMainModal(mainModal);

  parent.append(modal);
};

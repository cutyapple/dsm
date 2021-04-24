import { deleteCheckModalClassName } from "../../../constant/class.js";

import { makeElement } from "../../feature/modal/makeElement.js";
import { createModalHeader } from "../../feature/modal/modalHeader.js";
import { createModal, hideModal } from "../../feature/modal/createModal.js";

const onClickConfirmButton = (modalOverlayClassName) => {
  alert("게시물 삭제");
  hideModal("." + modalOverlayClassName);
};
const onClickCancleButton = (modalOverlayClassName) => {
  alert("게시물 삭제 취소");
  hideModal("." + modalOverlayClassName);
};
const createDeleteCheckModal = (mainModal) => {
  const { overlay, wrapper } = deleteCheckModalClassName;

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

const createDeleteCheckModalContent = ({ className }) => {
  const {
    modalOverlayClassName,
    confirmButtonClassName,
    cancleButtonClassName,
  } = className;

  const checkDeleteModalContent = document.createElement("div");

  const confirmButtonInfo = {
    element: "button",
    innerText: "확인",
    classNameArray: [confirmButtonClassName],
    addEvent: {
      eventName: "click",
      func: () => {
        onClickConfirmButton(modalOverlayClassName);
      },
    },
  };
  const cancleButtonInfo = {
    element: "button",
    innerText: "취소",
    classNameArray: [cancleButtonClassName],
    addEvent: {
      eventName: "click",
      func: () => {
        onClickCancleButton(modalOverlayClassName);
      },
    },
  };

  const confirmButton = makeElement(confirmButtonInfo);
  const cancleButton = makeElement(cancleButtonInfo);

  checkDeleteModalContent.append(confirmButton, cancleButton);

  return checkDeleteModalContent;
};

export const setDeleteCheckModal = (parent) => {
  const deleteCheckModal = document.createElement("div");
  const {
    overlay,
    header,
    title,
    confirmButton,
    cancleButton,
  } = deleteCheckModalClassName;

  const deleteCheckModalHeaderInfoObj = {
    title: "게시글을 삭제합니다.",
    className: {
      modalHeaderClassName: header,
      modalTextClassName: title,
    },
  };
  const deleteCheckModalHeader = createModalHeader(
    deleteCheckModalHeaderInfoObj
  );

  const deleteCheckModalContentInfoObj = {
    className: {
      modalOverlayClassName: overlay,
      confirmButtonClassName: confirmButton,
      cancleButtonClassName: cancleButton,
    },
  };
  const deleteCheckModalContent = createDeleteCheckModalContent(
    deleteCheckModalContentInfoObj
  );

  deleteCheckModal.append(deleteCheckModalHeader, deleteCheckModalContent);

  const modal = createDeleteCheckModal(deleteCheckModal);

  parent.appendChild(modal);
};

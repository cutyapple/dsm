import { setMainModal } from "./src/component/modal/mainModal.js";
import { setDeleteCheckModal } from "./src/component/modal/deleteModal.js";

const modalClassObj = (() => {
  const mainModalOverlayClassName = "main__modal--overlay";
  const mainModalWrapperClassName = "main__modal--wrapper";
  const deleteCheckModalOverlayClassName = "delete-check__modal--overlay";
  const deleteCheckModalWrapperClassName = "delete-check__modal--wrapper";

  return {
    getMainModalOverlayClassName: () => mainModalOverlayClassName,
    getMainModalWrapperClassName: () => mainModalWrapperClassName,
    getDeleteCheckModalOverlayClassName: () => deleteCheckModalOverlayClassName,
    getDeleteCheckModalWrapperClassName: () => deleteCheckModalWrapperClassName,
  };
})();
const modalDomObj = (() => {
  const $mainModalButton = document.querySelector("#main-modal--button");
  const $parentOfMainModal = document.querySelector("#modal");

  return {
    getMainModalButtonElement: () => $mainModalButton,
    getParentOfMainModalElement: () => $parentOfMainModal,
  };
})();

const buttonSet = () => {
  const $mainModalButton = modalDomObj.getMainModalButtonElement();

  $mainModalButton.addEventListener("click", onClickMainModalButton);
};
const onClickMainModalButton = () => {
  const mainModalOverlayClassName = modalClassObj.getMainModalOverlayClassName();
  const mainModalOverlay = document.querySelector(
    `.${mainModalOverlayClassName}`
  );

  mainModalOverlay.classList.toggle("hide");
};

(() => {
  const $parentOfMainModal = modalDomObj.getParentOfMainModalElement();

  setMainModal($parentOfMainModal);
  setDeleteCheckModal($parentOfMainModal);
  buttonSet();
})();

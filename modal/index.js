/*
일반 함수와 화살표 함수의 차이
이벤트 버블링
dom js
IIFE
BEM 방법론
*

/* modal.js */
function onClickOverlay() {
  this.classList.add("hide");
}
const onClickModalBox = (e) => {
  e.stopPropagation();
};

const createOverlay = (className) => {
  const overlay = document.createElement("div");

  overlay.addEventListener("click", onClickOverlay);

  overlay.classList.add(className);
  overlay.classList.add("hide");

  return overlay;
};

const createModalBox = (className) => {
  const modalWrapper = document.createElement("div");

  modalWrapper.addEventListener("click", onClickModalBox);

  modalWrapper.classList.add(className);

  return modalWrapper;
};

const createModal = (classObject, children) => {
  const { overlayClass, modalWrapperClass } = classObject;

  const overlay = createOverlay(overlayClass);
  const modalBox = createModalBox(modalWrapperClass);

  modalBox.appendChild(children);
  overlay.appendChild(modalBox);

  return overlay;
};

/* modal을 사용하고 싶은 js 파일 */
const modalClassObj = (() => {
  const mainModalOverlayClassName = "main__modal--overlay";
  const logininModalOverlayClassName = "login__modal--overlay";

  return {
    getMainModalOverlayClassName: () => mainModalOverlayClassName,
    getLogininModalOverlayClassName: () => logininModalOverlayClassName,
  };
})();
const modalDomObj = (() => {
  const $mainModalButton = document.querySelector("#main-modal--button");
  const $loginModalButton = document.querySelector("#login-modal--button");
  const $parentOfMainModal = document.querySelector("body");

  return {
    getMainModalButtonElement: () => $mainModalButton,
    getLoginModalButtonElement: () => $loginModalButton,
    getParentOfMainModalElement: () => $parentOfMainModal,
  };
})();

const createMainModalContent = () => {
  const inputButton = document.createElement("input");
  inputButton.type = "button";
  inputButton.value = "버튼";

  const text = document.createTextNode("login modal");

  const modalContent = document.createElement("div");
  modalContent.appendChild(inputButton);
  modalContent.appendChild(text);

  return modalContent;
};
const setMainModal = (parentModal) => {
  const mainModalContent = createMainModalContent();
  const mainModal = createModal(
    {
      overlayClass: "main__modal--overlay",
      modalWrapperClass: "main__modal--wrapper",
    },
    mainModalContent
  );

  parentModal.appendChild(mainModal);
};

const createLoginModalContent = () => {
  const inputButton = document.createElement("input");
  inputButton.type = "button";
  inputButton.value = "로그인";

  const text = document.createTextNode("login modal");

  const modalContent = document.createElement("div");
  modalContent.appendChild(inputButton);
  modalContent.appendChild(text);

  return modalContent;
};
const setLoginModal = (parentModal) => {
  const loginModalContent = createLoginModalContent();
  const loginModal = createModal(
    {
      overlayClass: "login__modal--overlay",
      modalWrapperClass: "login__modal--wrapper",
    },
    loginModalContent
  );

  parentModal.appendChild(loginModal);
};

/**/

const buttonSet = () => {
  const $mainModalButton = modalDomObj.getMainModalButtonElement();
  const $loginModalButton = modalDomObj.getLoginModalButtonElement();

  $mainModalButton.addEventListener("click", onClickMainModalButton);
  $loginModalButton.addEventListener("click", onClickLoginModalButton);
};
const onClickMainModalButton = () => {
  const mainModalOverlayClassName = modalClassObj.getMainModalOverlayClassName();
  const mainModalOverlay = document.querySelector(
    `.${mainModalOverlayClassName}`
  );

  mainModalOverlay.classList.toggle("hide");
};
const onClickLoginModalButton = () => {
  const LoginModalOverlayClassName = modalClassObj.getLogininModalOverlayClassName();
  const loginModalOverlay = document.querySelector(
    `.${LoginModalOverlayClassName}`
  );

  loginModalOverlay.classList.toggle("hide");
};

(() => {
  const $parentOfMainModal = modalDomObj.getParentOfMainModalElement();

  setMainModal($parentOfMainModal);
  setLoginModal($parentOfMainModal);

  buttonSet();
})();

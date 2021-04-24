export const hideModal = (targetQuery) => {
  const target = document.querySelector(targetQuery);

  target.classList.add("hide");
};
export const showModal = (targetQuery) => {
  const target = document.querySelector(targetQuery);

  target.classList.remove("hide");
};

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

export const createModal = ({ classObject, children }) => {
  const { overlayClass, modalWrapperClass } = classObject;

  const overlay = createOverlay(overlayClass);
  const modalBox = createModalBox(modalWrapperClass);

  modalBox.appendChild(children);
  overlay.appendChild(modalBox);

  return overlay;
};

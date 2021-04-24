export const createModalHeader = ({ title, className }) => {
  const { modalHeaderClassName, modalTextClassName } = className;

  const modalHeader = document.createElement("header");

  const modalText = document.createElement("p");

  modalText.innerText = title;
  modalText.classList.add(modalTextClassName);
  modalHeader.classList.add(modalHeaderClassName);
  modalHeader.appendChild(modalText);

  return modalHeader;
};

import { isNullOrUndefined } from "../../library/library.js";

export const makeElement = ({
  element = "div",
  innerText,
  classNameArray = [],
  addEvent,
}) => {
  const newElement = document.createElement(element);

  if (!isNullOrUndefined(innerText)) {
    newElement.innerText = innerText;
  }

  if (!isNullOrUndefined(addEvent)) {
    const { eventName, func } = addEvent;
    newElement.addEventListener(eventName, func);
  }

  for (const className of classNameArray) {
    newElement.classList.add(className);
  }

  return newElement;
};

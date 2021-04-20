import { RADIO_BUTTON_POP, RADIO_BUTTON_PUSH } from '../utils/Constants';

export const push = (
  element,
  classType,
  compare,
  popClassArray,
  pushClassArray
) => {
  // Pop Ordered List Class - keep array sorted
  if (classType === RADIO_BUTTON_POP) {
    // Array is empty or last array element is bigger then insert element
    if (
      popClassArray.current.length === 0 ||
      !compare(element, popClassArray.current[popClassArray.current.length - 1])
    ) {
      popClassArray.current.push(element);
    }
    // Array is not empty and last array element is not bigger then insert element
    else {
      for (let i = 0; i < popClassArray.current.length; i++) {
        // If current element in array is smaller then insert element
        if (compare(element, popClassArray.current[i])) {
          popClassArray.current.splice(i, 0, element);
          // console.log('Finish function');
          break;
        }
      }
    }
  }

  // Push Ordered List Class - push element to first index
  else if (classType === RADIO_BUTTON_PUSH) {
    pushClassArray.current.push(element);
  }
  // console.log(`pushClassArray = ${pushClassArray.current}`);
  // console.log(`popClassArray = ${popClassArray.current}`);
};

export const pop = (
  classType,
  compare,
  popClassArray,
  pushClassArray,
  popClassCounter
) => {
  // Pop Ordered List Class - array already sorted, pick the first element
  if (classType === RADIO_BUTTON_POP) {
    let result = popClassArray.current[popClassCounter.current];

    // Raise pop counter if counter not equal to array length
    if (popClassCounter.current < popClassArray.current.length - 1) {
      popClassCounter.current++;
    }
    return result;
  }
  // Push Ordered List Class - check all elements and pick the bigger
  else if (classType === RADIO_BUTTON_PUSH) {
    let resulValue;
    let resultIndex;

    resulValue = pushClassArray.current[0];

    // Loop over all elements and find the bigger
    for (let i = 1; i < pushClassArray.current.length; i++) {
      if (compare(pushClassArray.current[i], resulValue)) {
        resulValue = pushClassArray.current[i];
        resultIndex = i;
      }
    }

    // Remove the bigger element from array
    if (pushClassArray.current.length > 1) {
      pushClassArray.current.splice(resultIndex, 1);
    }

    return resulValue;
  }
};

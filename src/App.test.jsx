import { RADIO_BUTTON_POP, RADIO_BUTTON_PUSH } from './utils/Constants';
import { push, pop } from './utils/Utility';
import { compare } from './pages/home-page/HomePage';

test('Check performance O(1) in pushClass for push function', () => {
  // Create big array and small array
  const bigArray = { current: new Array(1000) };
  const smallArray = { current: new Array(10) };

  // Initial small array
  let smallArrayIndex = 0;
  for (let i = smallArray.current.length - 1; i >= 0; i--) {
    smallArray.current[smallArrayIndex] = i;
    smallArrayIndex++;
  }

  // Initial big array
  let bigArrayIndex = 0;
  for (let i = bigArray.current.length - 1; i >= 0; i--) {
    bigArray.current[bigArrayIndex] = i;
    bigArrayIndex++;
  }

  // Push element to big array and mesure push execution time
  let start1 = new Date().getTime();

  push(2, RADIO_BUTTON_PUSH, compare, null, bigArray);

  let end1 = new Date().getTime();

  let time1 = end1 - start1;

  // Push element to small array and mesure push execution time
  let start2 = new Date().getTime();

  push(2, RADIO_BUTTON_PUSH, compare, null, smallArray);

  let end2 = new Date().getTime();

  let time2 = end2 - start2;
  if (time1 > time2) {
    time1 = time1 - time2;
  } else {
    time1 = time2 - time1;
  }

  expect(time1).toBeLessThanOrEqual(1);
});

test('Check performance O(1) in popClass for pop function', () => {
  // Create big array and small array
  const bigArray = { current: new Array(1000) };
  const smallArray = { current: new Array(10) };
  const counter = { current: 0 };

  // Initial small array
  let smallArrayIndex = 0;
  for (let i = smallArray.current.length - 1; i >= 0; i--) {
    smallArray.current[smallArrayIndex] = i;
    smallArrayIndex++;
  }

  // Initial big array
  let bigArrayIndex = 0;
  for (let i = bigArray.current.length - 1; i >= 0; i--) {
    bigArray.current[bigArrayIndex] = i;
    bigArrayIndex++;
  }

  // Push element to big array and mesure push execution time
  let start1 = new Date().getTime();

  pop(2, RADIO_BUTTON_POP, compare, bigArray, null, counter);

  let end1 = new Date().getTime();

  let time1 = end1 - start1;

  // Push element to small array and mesure push execution time
  let start2 = new Date().getTime();

  push(2, RADIO_BUTTON_POP, compare, smallArray, null, counter);

  let end2 = new Date().getTime();

  let time2 = end2 - start2;
  if (time1 > time2) {
    time1 = time1 - time2;
  } else {
    time1 = time2 - time1;
  }

  expect(time1).toBeLessThanOrEqual(1);
});

/**
 * @return {Generator<number>}
 */
var fibGenerator = function() {
  let callCount = 0;
  let value;
  let lastValue = 1;
  let secondLastValue = 0;

  return {
    next: () => {
      callCount++;
      if (callCount === 1) return { value: 0 };
      if (callCount === 2) return { value: 1 };
      else {
        value = lastValue + secondLastValue;
        secondLastValue = lastValue;
        lastValue = value;
        return { value: value };
      }
    },
  };
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
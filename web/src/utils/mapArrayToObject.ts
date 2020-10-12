export const mapArrayToObject = (arr: Array<any>, key: string) => {
  const result = arr.reduce((acc, el) => {
    if (!(key in el)) {
      throw new Error("Key is not in array");
    }
    return {
      ...acc,
      [el[key]]: el,
    };
  }, {});
  return result;
};

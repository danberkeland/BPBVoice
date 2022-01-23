

export const sortAtoZDataByIndex = (data: [], index: string) => {
  data.sort(function (a, b) {
    return a[index] > b[index] ? 1 : -1;
  });
  return data;
};

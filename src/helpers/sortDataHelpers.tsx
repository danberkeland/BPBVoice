

export const sortAtoZDataByIndex = (data: any, index: string) => {
  data.sort(function (a: any, b: any) {
    return a[index] > b[index] ? 1 : -1;
  });
  return data;
};

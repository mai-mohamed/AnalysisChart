export const strArrToObjArr = (strArr: string[]) => {
    return strArr.map((ele) => ({
      value: ele,
      label: ele,
    }));
  };

  export const getUniqueSet = (arr: any, key: string) => {
    //@ts-ignore
    return [...new Set(arr.map((data) => {
          return data[key];
        })
      ),
    ];
  };

  export const getURLParams=(paramName:string)=> {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(paramName);
  }
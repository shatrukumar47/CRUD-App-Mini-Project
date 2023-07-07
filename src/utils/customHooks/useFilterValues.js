

export const useFilterValues = (value,state)=>{
    let newState = [...state]
    if(newState.includes(value)){
      newState = newState.filter((item)=>{
        return item !== value
      })
    }else{
      newState.push(value);
    }
    return newState;
}
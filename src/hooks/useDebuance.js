function useDebounce(cb,delay=2000){
   let timeid
   return((...args)=>{
    clearTimeout(timeid)
    timeid=setTimeout(()=>{
       cb(...args)
    },delay)
   })
}

export default useDebounce
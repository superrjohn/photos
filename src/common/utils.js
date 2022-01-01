export function	queue(func, delay){
   setTimeout(() => {
   
    func.apply(this)
    console.log('1')
   
  
  },delay)
}

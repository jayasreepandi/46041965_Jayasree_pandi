import React from 'react'
const Hello1 = () => {
    //return (
      //  <div className='dummyClass'>
        //    <h1>Hello Jayasree</h1>
        //</div>
    //)
  return React.createElement('div',{id: 'hello', className: 'dummyClass'},React.createElement('h1',null,'Hello vishwas'))
}
export default Hello1
import React from 'react';
import Message from './Message';

// function Person(props) {
//   console.log(props) ;
//   return (
//     <div>
//     <Message/>
//     <h2>{props.name}
//     <img src={props.img} alt="" />
//     <h3>{props.tel}</h3>
//     </h2>

//     </div>
//   )
// }

// export default Person


function Person({name, img,tel}) {
    // const { name, img , tel}= props;
    return (
      <div>
     <Message ad={name}/>
      <h2>{name}</h2>
      <img src={img} alt="" />
      <h3>{tel}</h3>
      </div>
    );
  }

export default Person;
import { useState,Component } from 'react';
import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component{
   constructor(){
    this.state = {
      showUsers:true,
      more:'Test'
    };
   }
     
  toggleUsersHandler(){
    this.setState((currentState)=>{
      return {showUsers:!currentState.showUsers}
    })
  }
  render(){ 
      const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );
let color = 'yellow'
    
    return(
    <div className={classes.users}>
    <button onClick={toggleUsersHandler} style={{color:showUsers?color:'white', 
    background:showUsers?'red':'green',
    borderBlockColor:showUsers?'red':'green',outline:'none'}}>
      {this.state.showUsers ? 'Hide' : 'Show'} Users
    </button>
    {this.state.showUsers && usersList}
  </div>
  )
  }
}
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   let color = 'yellow'

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler} style={{color:showUsers?color:'white', 
//       background:showUsers?'red':'green',
//       borderBlockColor:showUsers?'red':'green',outline:'none'}}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;

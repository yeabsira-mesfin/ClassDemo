import { Component } from 'react';
import User from './User';
import classes from './Users.module.css';

class Users extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      showUsers: true,
      more: 'Test'
    };
    this.toggleUsersHandler = this.toggleUsersHandler.bind(this);
  }
  
  toggleUsersHandler() {
    this.setState((currentState) => {
      return { showUsers: !currentState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    
    let color = 'yellow';

    return (
      <div className={classes.users}>
        <button
          onClick={this.toggleUsersHandler}
          style={{
            color: this.state.showUsers ? color : 'white',
            background: this.state.showUsers ? 'red' : 'green',
            borderColor: this.state.showUsers ? 'red' : 'green', 
            outline: 'none',
          }}
        >
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;

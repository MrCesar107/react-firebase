import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const AuthElements = (props) => {
  const logInButton = () => {
    if(props.userLoggedIn) {
      return(
        [<Avatar src={ props.photoUrl } />, (<IconButton color="inherit" onClick={ props.logout }><ExitToApp /></IconButton>)]
      );
    } else {
      return(
        <Button variant="contained" onClick={ props.login }>
          Iniciar sesión
        </Button>
      );
    }
  }

  return(
    <div className={props.classes.container} >
      { logInButton() }
    </div>
  );
}

export default withStyles({
  container: {
    display: 'flex',
    flexDirection: 'row'
  }
})(AuthElements);
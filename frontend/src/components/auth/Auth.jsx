// import React, { useState } from 'react';
// import { Button, Col, Container, Row } from 'reactstrap';
// import Logout from '../auth/logout/Logout';
// import Register from './register/Register'; // Import the Signup component
// import Login from './login/Login'; // Import the Login component
// import './auth.css';

// function Auth(props) {
//   const [button, setButton] = useState('To Login'); // Change the initial state
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   const toggleForm = () => {
//     console.log('Toggling form...');
//     setButton(button === 'To Register' ? 'To Login' : 'To Register');
//   };

//   const handleLogin = (token, admin) => {
//     console.log('User logged in with token:', token);
//     setIsLoggedIn(true);
//     setIsAdmin(admin);
//     props.updateToken(token);
//   };

//   const handleLogout = () => {
//     console.log('Logging out user...');
//     setIsLoggedIn(false);
//     setIsAdmin(false);
//     props.updateToken('');
//   };

//   const displayForm = () => {
//     console.log('Displaying form:', button);
//     return button === 'To Login' ? <Register updateToken={props.updateToken} /> : <Login updateToken={handleLogin} />;
//   };

//   return (
//     <Container className="auth-container">
//       <Row>
//         <Col>
//           {isAdmin ? (
//             <Logout onLogout={handleLogout} onAdminUpdate={setIsAdmin} />
//           ) : (
//             <div className="auth-content">
//               <Button color="primary" onClick={toggleForm} className="toggle-button">
//                 {button}
//               </Button>
//               {displayForm()}
//             </div>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Auth;


import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import Logout from '../auth/logout/Logout';
import Register from './register/Register'; // Import the Signup component
import Login from './login/Login'; // Import the Login component
import './auth.css';

function Auth(props) {
  const [button, setButton] = useState('To Login'); // Change the initial state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleForm = () => {
    console.log('Toggling form...');
    setButton(button === 'To Register' ? 'To Login' : 'To Register');
  };

  const handleLogin = (token, admin) => {
    console.log('User logged in with token:', token);
    setIsLoggedIn(true);
    setIsAdmin(admin);
    props.updateToken(token);
  };

  const handleLogout = () => {
    console.log('Logging out user...');
    setIsLoggedIn(false);
    setIsAdmin(false);
    props.updateToken('');
  };

  const displayContent = () => {
    if (isLoggedIn) {
      return (
        <div className="auth-content">
          <Logout onLogout={handleLogout} onAdminUpdate={setIsAdmin} />
        </div>
      );
    } else {
      return (
        <div className="auth-content">
          <Button color="primary" onClick={toggleForm} className="toggle-button">
            {button}
          </Button>
          {button === 'To Login' ? <Register updateToken={props.updateToken} /> : <Login updateToken={handleLogin} />}
        </div>
      );
    }
  };

  return (
    <Container className="auth-container">
      <Row>
        <Col>
          {isAdmin ? <Logout onLogout={handleLogout} onAdminUpdate={setIsAdmin} /> : displayContent()}
        </Col>
      </Row>
    </Container>
  );
}

export default Auth;

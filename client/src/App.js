import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Whatspap from './components/Whatspap';
import ContextManager from './components/user-context/UserLoginState';
import ProfileDetailsDrawer, { DrawerProvider } from './components/messageScreen/LeftChatProfiles/profile-drawer-manager/ProfileDetailsContext.jsx';
function App() {
  return (


    <GoogleOAuthProvider clientId="2073746106-hi8uuv9iir5585bnsn2qpdvjq5p6gqjj.apps.googleusercontent.com">

    <ContextManager>
      <DrawerProvider>

    {/* Whatspap is a prop(child) of ContextManager */}
      <Whatspap/>
    
      </DrawerProvider>
    </ContextManager>
  
    </GoogleOAuthProvider>

  );
}

export default App;

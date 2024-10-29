import { auth } from "configs/firebase";

import Header from "features/header/Header";
import RedirectPage from "features/redirect/RedirectPage";
import LoadingScreen from "components/LoadingScreen";
import ToastNotification from "components/ToastNotification";

import useReduxData from "hooks/useReduxData";
import useInitiateApp from "hooks/useInitiateApp";
import useAuthState from "hooks/useAuthState";
import AppRouter from "components/AppRouter";
import Popup from "components/Popup";

function App() {
  const { products } = useReduxData();

  useAuthState();

  useInitiateApp(auth.currentUser);

  if (!window.navigator.onLine)
    return (
      <>
        <Header />
        <RedirectPage image={"offline.png"} message={"retry"} destination={0}>
          It seems you are offline
        </RedirectPage>
      </>
    );

  if (products.length === 0) return <LoadingScreen />;

  if (window.navigator.onLine)
    return (
      <div className="App">
        <Header />
        <div style={{ width: "100%", height: "calc(85vh - 51px)" }}>
          <AppRouter />
          <ToastNotification />
          <Popup />
        </div>
      </div>
    );
}

export default App;

import Header from "features/header/Header";
import RedirectPage from "features/redirect/RedirectPage";
import ToastNotification from "components/ToastNotification";

import useInitializeApp from "hooks/useInitializeApp";
import useAuthListener from "hooks/useAuthListener";
import AppRouter from "components/AppRouter";
import Modal from "components/modal/Modal";

function App() {
  useAuthListener();

  useInitializeApp();

  if (!window.navigator.onLine)
    return (
      <>
        <Header />
        <RedirectPage redirectionType={"offline"} />
      </>
    );

  return (
    <div className="App">
      <Header />
      <div style={{ width: "100%", height: "calc(85vh - 51px)" }}>
        <AppRouter />
        <ToastNotification />
        <Modal />
      </div>
    </div>
  );
}

export default App;

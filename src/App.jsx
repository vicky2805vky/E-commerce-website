import Header from "features/header/Header";
import RedirectPage from "features/redirect/RedirectPage";
import LoadingScreen from "components/LoadingScreen";
import ToastNotification from "components/ToastNotification";

import useStoreData from "hooks/useStoreData";
import useInitializeApp from "hooks/useInitializeApp";
import useAuthListener from "hooks/useAuthListener";
import AppRouter from "components/AppRouter";
import Modal from "components/modal/Modal";

function App() {
  const { products } = useStoreData();

  useAuthListener();

  useInitializeApp();

  if (!window.navigator.onLine)
    return (
      <>
        <Header />
        <RedirectPage redirectionType={"offline"} />
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
          <Modal />
        </div>
      </div>
    );
}

export default App;

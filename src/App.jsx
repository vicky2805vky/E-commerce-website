import { auth } from "configs/firebase";
RedirectPage;

import Header from "features/header/Header";
import RedirectPage from "features/redirect/RedirectPage";
import LoadingScreen from "components/LoadingScreen";
import ToastNotification from "components/ToastNotification";

import useStoreData from "hooks/useStoreData";
import useInitializeApp from "hooks/useInitializeApp";
import useAuthListener from "hooks/useAuthListener";
import AppRouter from "components/AppRouter";
import Modal from "components/Modal";

function App() {
  const { products } = useStoreData();

  useAuthListener();

  useInitializeApp(auth.currentUser);

  if (!window.navigator.onLine)
    return (
      <>
        <Header />
        <RedirectPage
          imageName={"offline"}
          buttonText={"retry"}
          destination={0}
          iconName={"HiStatusOffline"}
        >
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
          <Modal />
        </div>
      </div>
    );
}

export default App;

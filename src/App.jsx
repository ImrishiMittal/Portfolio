import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
function App() {

  return (

    <>

      <LoadingScreen />
      <ScrollProgress/>

      <Home />

    </>

  );

}

export default App;
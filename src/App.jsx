import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Kids from "./sections/Kids";
import Mobile from "./sections/Mobile";
import Tvcontainer from "./sections/Tvcontainer";
import WatchAny from "./sections/WatchAny";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <main className="h-[87vh]">
        <Home />
        <div className="w-full h-2 bg-gray-500"></div>
        <Tvcontainer />
        <div className="w-full h-2 bg-gray-500"></div>
        <Mobile />
        <div className="w-full h-2 bg-gray-500"></div>
        <WatchAny />
        <div className="w-full h-2 bg-gray-500"></div>
        <Kids />
        <div className="w-full h-2 bg-gray-500"></div>
        <Faq />
        <div className="w-full h-2 bg-gray-500"></div>
        <Footer />
      </main>
    </div>
  );
}

export default App;

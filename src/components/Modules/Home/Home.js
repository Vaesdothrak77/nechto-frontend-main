import AudioComponent from "../Audio/Audio";
import ButtonSupport from "../Module1/Buttons/ButtonSupport";
import Header from "../Header/Header";
import Library from "../Library/Library";
import Modules from "../Modules";
import Rating from "../Raiting/Rating";
import style from "../Home/style.css"

function Home() {
  return (
    <>
      <Header />
      <Modules />
      <Library />
      <Rating />
      <AudioComponent />
      <ButtonSupport />
    </>
  );
}

export default Home;

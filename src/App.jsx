import Pick from "/src/pages/Pick"
import Name from "/src/pages/Name"
import NavBar from "/src/components/NavBar"

export default function App() {

  // function getRandomInt() {
  //   return Math.floor(Math.random() * 255);
  // }

  let getColors = {
    red: {
      random: Math.floor(Math.random() * 255),
      api: 20
    },
    green: {
      random: Math.floor(Math.random() * 255),
      api: 250
    },
    blue: {
      random: Math.floor(Math.random() * 255),
      api: 200
    }
  }

  return (
    <>
      <main>
        <div className="theme_color" style={{ background: "rgb(" + getColors.red.api + ", " + getColors.green.api + ", " + getColors.blue.api + ")" }}></div>
        <Pick
          getColors={getColors}
        />
        <Name
          getColors={getColors}
        />
        {/* <NavBar /> */}
      </main>
    </>
  )
}
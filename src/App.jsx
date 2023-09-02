import Wrapper from "./components/Wrapper";
import Screen from "./components/Wrapper";
import ButtonBox from "./components/Wrapper";
import Button from "./components/Wrapper";

function App() {

  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        <Button className=""
          value="0"
          onClick={() => {
            console.log("button clicked")
          }}
        >
        </Button>
      </ButtonBox>
    </Wrapper>
  )
}

export default App

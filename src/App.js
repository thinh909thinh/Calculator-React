import { useState } from "react";
import { Box, Container } from "@mui/material";
import CustomButton from "./components/custom-buttom/CustomButtom";
function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.innerText));
    console.log(e.target.innerText);
  };
  console.log(result);
  const clear = () => {
    setResult("");
  };
  const back = () => {
    setResult(result.slice(0, -1));
  };
  const caculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <Box backgroundColor="#F5F5F5">
      <Container maxWidth="lg">
        <Box>
          <Box
            margin="100px auto 0 auto"
            minHeight="100px"
            maxWidth={"480px"}
            backgroundColor="gray"
            color="white"
            fontSize="36px"
            display="flex"
            justifyContent="flex-end"
            overflow="hidden"
          >
            {{ result } ? result : ""}
          </Box>
          <Box
            margin="0 auto 0 auto"
            minHeight="50px"
            maxWidth={"480px"}
            backgroundColor="gray"
            color="white"
            fontSize="36px"
            display="flex"
            justifyContent="flex-end"
          >
            0
          </Box>
          <Box backgroundColor="#F8F8FF" maxWidth={"480px"} margin="0 auto">
            <Box display="flex" justifyContent="space-between">
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                +
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                -
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                *
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                /
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={back}
                sx={{
                  backgroundColor: "#00ffce",
                }}
              >
                C
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={clear}
                sx={{
                  backgroundColor: "red",
                }}
              >
                Delete
              </CustomButton>
            </Box>
            <Box
              maxWidth={"480px"}
              margin="0 auto"
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                1
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                2
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                3
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                4
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                5
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                6
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                7
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                8
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                9
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                0
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                .
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={caculate}
              >
                =
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default App;

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Box, Button, Grid, Modal, Typography } from '@mui/material';

// Red: #E61849,  Orange: #F68131,  Yellow: #FEE018, YellowGreen: #BFEF44, 
// Green: #3CB34A, LightBlue: #41D3F4, Blue: #4162D8, Purple: #911DB3, Pink: #F031E6
// A counter to track correct button color pressed and for comparing the colors in the list with the buttons and swatches.
let counter = 0;
let colorList: string[] = []; // A string list to push or add colors for comparison
// Color index numbers are 0 to 8, as there are 9 buttons and 9 colors;
var colors = ["#E61849", "#F68131", "#FEE018", "#BFEF44", "#3CB34A", "#41D3F4", "#4162D8", "#911DB3", "#F031E6"];
var colorsShuffle = ["#E61849", "#F68131", "#FEE018", "#BFEF44", "#3CB34A", "#41D3F4", "#4162D8", "#911DB3", "#F031E6"];

function shuffleArray(array: any) { // Function accepts an array to be randomed
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

let codeBoxColor = shuffleArray(colors); // Shuffle the colors of the color swatch boxes and assigned to codeBoxColor variable
let buttonColor = shuffleArray(colorsShuffle); // Shuffle the colors of the buttons

function reshuffle() { // Shuffles the colors again if the combination is correct
  shuffleArray(colors);
  shuffleArray(colorsShuffle);
}

export default function ColorSequence() {
  // Using useState to set the colors for the button
  const [btnColor1, setBtnColor1] = useState(false);
  const [btnColor2, setBtnColor2] = useState(false);
  const [btnColor3, setBtnColor3] = useState(false);
  const [btnColor4, setBtnColor4] = useState(false);
  const [btnColor5, setBtnColor5] = useState(false);
  const [btnColor6, setBtnColor6] = useState(false);
  const [btnColor7, setBtnColor7] = useState(false);
  const [btnColor8, setBtnColor8] = useState(false);
  const [btnColor9, setBtnColor9] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

  function resetColors() { // Function resets all buttons if combination is wrong
    setBtnColor1(false)
    setBtnColor2(false)
    setBtnColor3(false)
    setBtnColor4(false)
    setBtnColor5(false)
    setBtnColor6(false)
    setBtnColor7(false)
    setBtnColor8(false)
    setBtnColor9(false)
  }

  function checkColor1() {
    // Button color is pushed or added to the list colorList
    colorList.push(buttonColor[0])
    // Compares if the box index matches with the color in the list and if the boxes combination match the colors in the list
    if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length === colorList.length) {
      setTimeout(function () { setOpen(true); }, 500);
      counter = 0;
      setTimeout(function () { resetColors(); }, 250);
      colorList = [];
      reshuffle();
    }
    // Compares if the box index matches with the color in the list but the combination is not complete yet
    else if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length !== colorList.length) {
      counter++;
      setBtnColor1(true)
    } else {
      setTimeout(function () { resetColors(); }, 250);
      counter = 0;
      colorList = [];
    }
  }

  function checkColor2() {
    colorList.push(buttonColor[1])
    if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length === colorList.length) {
      setTimeout(function () { setOpen(true); }, 500);
      counter = 0;
      setTimeout(function () { resetColors(); }, 250);
      colorList = [];
      reshuffle();
    }
    else if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length !== colorList.length) {
      setBtnColor2(true)
      counter++;
    } else {
      setTimeout(function () { resetColors(); }, 250);
      counter = 0;
      colorList = [];
    }
  }

  function checkColor3() {
    colorList.push(buttonColor[2])
    console.log(colorList);
    if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length === colorList.length) {
      setTimeout(function () { setOpen(true); }, 500);
      counter = 0;
      setTimeout(function () { resetColors(); }, 250);
      colorList = [];
      reshuffle();
    }
    else if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length !== colorList.length) {
      counter++;
      setBtnColor3(true)
    } else {
      setTimeout(function () { resetColors(); }, 250);
      counter = 0;
      colorList = [];
    }
  }

  function checkColor4() {
    colorList.push(buttonColor[3])
    if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length === colorList.length) {
      setTimeout(function () { setOpen(true); }, 500);
      counter = 0;
      setTimeout(function () { resetColors(); }, 250);
      colorList = [];
      reshuffle();
    }
    else if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length !== colorList.length) {
      setBtnColor4(true)
      counter++;
    } else {
      setTimeout(function () { resetColors(); }, 250);
      counter = 0;
      colorList = [];
    }
  }

  function checkColor5() {
    colorList.push(buttonColor[4])
    if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length === colorList.length) {
      setTimeout(function () { setOpen(true); }, 500);
      counter = 0;
      setTimeout(function () { resetColors(); }, 250);
      colorList = [];
      reshuffle();
    }
    else if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length !== colorList.length) {
      setBtnColor5(true)
      counter++;
    } else {
      setTimeout(function () { resetColors(); }, 250);
      counter = 0;
      colorList = [];
    }
  }

  function checkColor6() {
    colorList.push(buttonColor[5])
    if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length === colorList.length) {
      setTimeout(function () { setOpen(true); }, 500);
      counter = 0;
      setTimeout(function () { resetColors(); }, 250);
      colorList = [];
      reshuffle();
    }
    else if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length !== colorList.length) {
      setBtnColor6(true)
      counter++;
    } else {
      setTimeout(function () { resetColors(); }, 250);
      counter = 0;
      colorList = [];
    }
  }

  function checkColor7() {
    colorList.push(buttonColor[6])
    if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length === colorList.length) {
      setTimeout(function () { setOpen(true); }, 500);
      counter = 0;
      setTimeout(function () { resetColors(); }, 250);
      colorList = [];
      reshuffle();
    }
    else if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length !== colorList.length) {
      setBtnColor7(true)
      counter++;
    } else {
      setTimeout(function () { resetColors(); }, 250);
      counter = 0;
      colorList = [];
    }
  }

  function checkColor8() {
    colorList.push(buttonColor[7])
    if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length === colorList.length) {
      setTimeout(function () { setOpen(true); }, 500);
      counter = 0;
      setTimeout(function () { resetColors(); }, 250);
      colorList = [];
      reshuffle();
    }
    else if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length !== colorList.length) {
      setBtnColor8(true)
      counter++;
    } else {
      setTimeout(function () { resetColors(); }, 250);
      counter = 0;
      colorList = [];
    }
  }

  function checkColor9() {
    colorList.push(buttonColor[8])
    if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length === colorList.length) {
      setTimeout(function () { setOpen(true); }, 500);
      counter = 0;
      setTimeout(function () { resetColors(); }, 250);
      colorList = [];
      reshuffle();
    }
    else if (codeBoxColor[counter] === colorList[counter] && codeBoxColor.length !== colorList.length) {
      setBtnColor9(true)
      counter++;
    } else {
      setTimeout(function () { resetColors(); }, 250);
      counter = 0;
      colorList = [];
    }
  }

  return (
    <React.Fragment>

      <Link className="Links" to="/works">
        <Button variant="contained" sx={{ marginTop: 8 }}>Back to Works</Button>
      </Link>

      <Box sx={{ bgcolor: '#FFFFFF', width: 800, height: 400, marginTop: 2, p: 5, borderRadius: 5 }}>
        <Typography variant="h6" component="h2" align="center" sx={{ color: "#2C2C2C", marginBottom: 3}}>Find the Color Sequence!</Typography>
        {/* A group of boxes to create the randomized color swatch code */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gridTemplateColumns: 'repeat(9, 1fr)' }}>
          {/* Assigned color swatch box color is based on codeBoxColor [index] number*/}
          <Box sx={{ p: 2, m: 0, bgcolor: codeBoxColor[0] }}></Box>
          <Box sx={{ p: 2, m: 0, bgcolor: codeBoxColor[1] }}></Box>
          <Box sx={{ p: 2, m: 0, bgcolor: codeBoxColor[2] }}></Box>
          <Box sx={{ p: 2, m: 0, bgcolor: codeBoxColor[3] }}></Box>
          <Box sx={{ p: 2, m: 0, bgcolor: codeBoxColor[4] }}></Box>
          <Box sx={{ p: 2, m: 0, bgcolor: codeBoxColor[5] }}></Box>
          <Box sx={{ p: 2, m: 0, bgcolor: codeBoxColor[6] }}></Box>
          <Box sx={{ p: 2, m: 0, bgcolor: codeBoxColor[7] }}></Box>
          <Box sx={{ p: 2, m: 0, bgcolor: codeBoxColor[8] }}></Box>
        </Box>

        {/* Box and Grid for Buttons with numbers 1-9 for the color code reference */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 3 }}>
          <Grid rowSpacing={2} columnSpacing={{ xs: 5, sm: 5, md: 10 }}>

            {/* Assigned button color is based on buttonColor [index] number and set the useState of btnColor to true*/}
            <Grid item xs={1}>
              <Button variant="contained" sx={{ width: 160, p: 4.2, m: 0.7, bgcolor: `${(btnColor1 === true) ? buttonColor[0] : '#46998F'}` }} onClick={checkColor1}></Button>
              <Button variant="contained" sx={{ width: 160, p: 4.2, m: 0.7, bgcolor: `${(btnColor2 === true) ? buttonColor[1] : '#46998F'}` }} onClick={checkColor2}></Button>
              <Button variant="contained" sx={{ width: 160, p: 4.2, m: 0.7, bgcolor: `${(btnColor3 === true) ? buttonColor[2] : '#46998F'}` }} onClick={checkColor3}></Button>
            </Grid>

            <Grid item xs={1}>
              <Button variant="contained" sx={{ width: 160, p: 4.2, m: 0.7, bgcolor: `${(btnColor4 === true) ? buttonColor[3] : '#46998F'}` }} onClick={checkColor4}></Button>
              <Button variant="contained" sx={{ width: 160, p: 4.2, m: 0.7, bgcolor: `${(btnColor5 === true) ? buttonColor[4] : '#46998F'}` }} onClick={checkColor5}></Button>
              <Button variant="contained" sx={{ width: 160, p: 4.2, m: 0.7, bgcolor: `${(btnColor6 === true) ? buttonColor[5] : '#46998F'}` }} onClick={checkColor6}></Button>
            </Grid>

            <Grid item xs={1}>
              <Button variant="contained" sx={{ width: 160, p: 4.2, m: 0.7, bgcolor: `${(btnColor7 === true) ? buttonColor[6] : '#46998F'}` }} onClick={checkColor7}></Button>
              <Button variant="contained" sx={{ width: 160, p: 4.2, m: 0.7, bgcolor: `${(btnColor8 === true) ? buttonColor[7] : '#46998F'}` }} onClick={checkColor8}></Button>
              <Button variant="contained" sx={{ width: 160, p: 4.2, m: 0.7, bgcolor: `${(btnColor9 === true) ? buttonColor[8] : '#46998F'}` }} onClick={checkColor9}></Button>
            </Grid>

          </Grid>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" align="center">GOOD JOB!</Typography>
        </Box>
      </Modal>

      <br></br>
    </React.Fragment>
  );

}
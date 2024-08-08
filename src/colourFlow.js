import "./style.css";
// Note: Color flow is blue green red ....

class DivOneClass {
  constructor() {
    this.divOne = document.querySelector(".div1");
  }
  getDivOne() {
    return this.divOne;
  }
}

class DivTwoClass {
  constructor() {
    this.divTwo = document.querySelector(".div2");
  }
  getDivTwo() {
    return this.divTwo;
  }
}

class DivThreeClass {
  constructor() {
    this.divThree = document.querySelector(".div3");
  }
  getDivThree() {
    return this.divThree;
  }
}

const rightImg = document
  .querySelector(".right")
  .addEventListener("click", (event) => {
    console.log("right clicked");
     divOneColorChange(event);
     divTwoColorChange(event); 
    divThreeColorChange(event);
  });
const leftImg = document
  .querySelector(".left")
  .addEventListener("click", (event) => {
    console.log("left clicked");
     divOneColorChange(event);
     divTwoColorChange(event);
     divThreeColorChange(event);
});

  const firstDiv = new DivOneClass().getDivOne();
  const secondDiv = new DivTwoClass().getDivTwo();
  const thirdDiv = new DivThreeClass().getDivThree();
  const counter ={
    indexOne:0,
    indexTwo:0,
    indexThree:0,
  }
  function divOneColorChange(event) {
    if (event.target.className==='right'){
      const colors = ['blue', 'green', 'red'];
    firstDiv.style.backgroundColor = colors[counter.indexOne];
    counter.indexOne = (counter.indexOne + 1) % colors.length;
    } else if (event.target.className === 'left'){
        const colors = ['blue', 'red', 'green'];
        firstDiv.style.backgroundColor = colors[counter.indexOne];
        counter.indexOne = (counter.indexOne + 1) % colors.length;
    }
}


function divTwoColorChange(event) {
  //Div two  is Green by Default.
  if (event.target.className==='right'){
    const colors = ['red', 'blue', 'green'];
  secondDiv.style.backgroundColor = colors[counter.indexTwo];
  counter.indexTwo = (counter.indexTwo + 1) % colors.length;
  } else if (event.target.className === 'left'){
      const colors = ['red', 'green', 'blue'];
      secondDiv.style.backgroundColor = colors[counter.indexTwo];
      counter.indexTwo = (counter.indexTwo + 1) % colors.length;
  }
}

function divThreeColorChange(event) {
  // div Three  is blue by default.
  if (event.target.className==='right'){
    const colors = ['green', 'red', 'blue'];
  thirdDiv.style.backgroundColor = colors[counter.indexThree];
  counter.indexThree = (counter.indexThree + 1) % colors.length;
  } else if (event.target.className === 'left'){
      const colors = ['green', 'blue', 'red'];
      thirdDiv.style.backgroundColor = colors[counter.indexThree];
      counter.indexThree = (counter.indexThree + 1) % colors.length;
  }
}


export { rightImg, leftImg };

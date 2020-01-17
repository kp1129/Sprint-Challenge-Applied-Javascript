// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  // create
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("header");
  const date = document.createElement("span");
  date.classList.add("date");
  date.textContent = `MARCH 28, 2019`;
  const title = document.createElement("h1");
  title.textContent = "Lambda Times";
  const temp = document.createElement("span");
  temp.classList.add("temp");
  temp.textContent = `98°`;
  // assemble
  mainDiv.append(date);
  mainDiv.append(title);
  mainDiv.append(temp);
  // return
  return mainDiv;
}

document.querySelector(".header-container").append(Header());

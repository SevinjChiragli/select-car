const carsArr = [
  { brand: "Ford", model: "Mustang", year: 2022 },
  { brand: "Ford", model: "F-150", year: 2023 },
  { brand: "BMW", model: "X5", year: 2022 },
  { brand: "BMW", model: "3 Series", year: 2023 },
  { brand: "Mazda", model: "CX-5", year: 2022 },
  { brand: "Mazda", model: "Mazda3", year: 2023 },
  { brand: "Toyota", model: "Camry", year: 2022 },
  { brand: "Toyota", model: "RAV4", year: 2023 },
];
let year
let brand
let cars=document.getElementById('cars')

const show=()=>{
  let filteredCar=carsArr.filter((item)=>{
     return item.brand===brand&&item.year==year
  })
  cars.innerHTML=''
  filteredCar.forEach((item)=>{
    let li=document.createElement('li')
    li.innerText=`${item.brand}-${item.model} - ${item.year}`
   cars.appendChild(li)
  })
}
show()

const spanShow = () => {
  let spans = document.querySelectorAll("span");
  spans.forEach((span) => {
    span.addEventListener("click", (ev) => {
      console.log(ev.target.innerText);
    });
  });
};
spanShow();

let selectYear = document.getElementById("selectYear");
let selectCar = document.getElementById("selectCar");
const showCar = () => {
  selectCar.addEventListener("click", () => {
    let selectCarChild = document.getElementById("selectCarChild");
    selectCarChild.style = `display:flex`;
    selectCarChild.style.flexDirection = `column`;
  });
};
showCar();

const showYear = () => {
  selectYear.addEventListener("click", () => {
    let selectYearChild = document.getElementById("selectYearChild");
    selectYearChild.style.display = `flex`;
    selectYearChild.style.flexDirection = `column`;
  });
};
showYear();



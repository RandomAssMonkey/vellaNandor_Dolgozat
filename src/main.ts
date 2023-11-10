import './style.css'
import { Statue } from './statue';

var statues : Artwork[] = [];
const english = /^[A-Za-z, ]*$/;
const date = new Date();
let checkCounter = 0;
let priceCounter = 0;

function Init(){
  document.getElementById('SubmitButton')!.addEventListener('click', DataCheckandToList);
}

function DataCheckandToList(){
  const title = ((document.getElementById('Ititle') as HTMLInputElement).value).toString();
  const year = parseInt((document.getElementById('Iyear') as HTMLInputElement).value);
  const price = parseInt((document.getElementById('Iprice') as HTMLInputElement).value);
  const height = parseInt((document.getElementById('Iheight') as HTMLInputElement).value);
  const nowYear = date.getFullYear();
  
  if(title != null && english.test(title) && title.length != 0){
    console.log(title);
    checkCounter++;
  }
  else{
    alert("Hibás a szobor neve!");
    checkCounter = 0;
  }

  if(year < nowYear){
    console.log(year);
    checkCounter++;
  }
  else{
    alert("Hibás készítési évet adott meg!")
    checkCounter = 0;
  }

  if(price >= 5){
    console.log(price)
    checkCounter++;
  }
  else{
    alert("Hibás árat adott meg!")
    checkCounter = 0;
  }

  if(height >= 15){
    console.log(height)
    checkCounter++;
  }
  else{
    alert("Hibás magasságot adott meg!")
    checkCounter = 0;
  }
  
  if(checkCounter == 4){
    checkCounter = 0;
    const s = new Statue(title, year, price, height)
    statues.push(s);
    for(let i = 0; i < statues.length; i++){
      priceCounter += statues[i].price;
    }

    ((document.getElementById('Pnumberofstatue') as HTMLInputElement).innerText) = "Összes szobor darbszáma: " + statues.length;
    ((document.getElementById('Pallprice') as HTMLInputElement).innerText) = "A szobrok összára:" + priceCounter;

    ((document.getElementById('Ititle') as HTMLInputElement).value) = "";
    ((document.getElementById('Iyear') as HTMLInputElement).value) = "";
    ((document.getElementById('Iprice') as HTMLInputElement).value) = "";
    ((document.getElementById('Iheight') as HTMLInputElement).value) = "";
  }
}

document.addEventListener('DOMContentLoaded', Init);
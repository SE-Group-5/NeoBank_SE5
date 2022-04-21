import './App.css';
import Card from './CardManagement/Card';
import Reward from './CardManagement/Reward';

function App() {
  return (
    <>
    <Card cardCvv={1245} cardBrand={"VISA"} cardNumber={"4 4 0 2 1 2 3 4 5 5 4 2 1 3 2 1"} 
      cardExpiry={"12/2021"}/> 
    <Reward rewardTitle={"Reward"} rewardPoints={512} ></Reward>
    </>
  );
}

export default App;

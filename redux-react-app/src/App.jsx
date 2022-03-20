import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./asyncActions/customers";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";

function App() {

  const buttonStyle = {
    padding: 15,
    cursor: 'pointer',
    backgroundColor: 'orange',
    color: '#fff',
    border: 'none',
    marginRight: '10px',
    fontSize: 16,
    borderRadius: 4
  }

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers?.customers)
  const [userSum, setUserSum] = useState('');
  const [lastEction, setLastEction] = useState(null);
  const [lastSum, setLastSum] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const clearInput = () => {
    setUserSum('');
  }
  
  const addCash = () => {
    if (isNaN(userSum)) {
      clearInput();
      return
    }
    dispatch({type: "ADD_CASH", payload: Number(userSum)});
    setLastSum(Number(userSum));
    setLastEction(0);
    clearInput();
  }

  const getCash = () => {
    if (isNaN(userSum)) {
      clearInput();
      return
    }
    dispatch({type: "GET_CASH", payload: Number(userSum)});
    setLastSum(Number(userSum) > cash ? cash : Number(userSum));
    setLastEction(1);
    clearInput();
  }

  const compareSums = (sum) => {
    if (Number(sum) > cash) {
        setIsDisabled(true);
    } else {
        setIsDisabled(false);
    }
  }

  const addCustomer = (name) => {
    let customer = {
        name: name,
        id: Date.now()
    }
    dispatch(addCustomerAction(customer));
  }

  const removeCustomer = (customerID) => {
      dispatch(removeCustomerAction(customerID));
  }

  return (
    <div className="App">
      <div className="container" style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <div className="cash-info">

          <h3 style={{textAlign: 'center'}}>
            Количество денег на счету в банке: 
          </h3>
          <h3 className="cash-info-summ" style={{marginBottom: 30, fontSize: '24px', textAlign: 'center'}}>
            {cash}
          </h3>

          <div className="input-container" style={{textAlign: 'center'}}>
            <span>
              Введите сумму, которую хотите положить на счет/снять со счета
            </span>
            <input 
              type="text/" 
              onChange={(e) => { 
                setUserSum(e.target?.value);
                compareSums(e.target?.value);
              }}
              value={userSum}
              style={{marginLeft: 10}}/>
          </div>
          <div className="last-transactions-container" style={{textAlign: 'center', marginTop: '20px'}}>
            <span>
              Последние транзакции:
            </span>
            {(lastEction === 1) ? 
            <div>
              Со счёты было снято: {lastSum}
            </div> :
            lastEction === 0 ?
            <div>
              На счёт было добавлено: {lastSum}
            </div> :
            null
          }
          </div>
          <div className="button-container" style={{display: 'flex', justifyContent: 'center', marginTop: '10%'}}>
            <button 
              style={buttonStyle}
              onClick={addCash}
            >
              Добавить сумму
            </button>
            <button 
              style={buttonStyle}
              onClick={getCash}
              disabled={isDisabled}
            >
              Снять сумму
            </button>
          </div>

          <div className="customers" style={{marginTop: 90}}>
                <h3 style={{textAlign: 'center'}}>Клиенты банка: </h3>
                
                <div className="button-container" style={{display: 'flex', justifyContent: 'center', marginTop: '10%'}}>
                <button 
                    style={buttonStyle}
                    onClick={() => { addCustomer(prompt()) }}
                >
                    Добавить клиента
                </button>
                
                <button 
                    style={buttonStyle}
                    onClick={() => { dispatch(fetchCustomers()) }}
                >
                    Получить список клиентов банка из база данных
                </button>
                </div>
                
              {customers?.length > 0 ?
                <div>
                    {customers?.map((customer, index) => {
                        return (
                            <p 
                                key={index * 3} 
                                style={{textAlign: 'center', border: '1px solid orange', padding: 10, marginBottom: 10, position: 'relative', borderRadius: 10}}
                            >
                                {customer?.name}
                                <span 
                                    style={{position: 'absolute', right: 5, top: 0, fontSize: 20, cursor: 'pointer'}}
                                    onClick={() => { removeCustomer(customer?.id) }}
                                >
                                    &times;
                                </span>
                            </p>
                        )
                    })}
                </div> :
                <div style={{textAlign: 'center', marginTop: 30}}>
                    Список клиентов пуст!
                </div>
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

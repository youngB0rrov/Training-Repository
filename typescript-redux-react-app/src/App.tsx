import React from 'react';

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

  return (
    <div className="App">\
      <div className="container" style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <div className="cash-info">
          <h3 className="cash-info-summ" style={{marginBottom: 30}}>

          </h3> 
          <div className="button-container" style={{display: 'flex', justifyContent: 'center', marginTop: '10%'}}>
            <button 
              style={buttonStyle}
            >
              Add cash
            </button>
            <button 
              style={buttonStyle}
            >
              Get cash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

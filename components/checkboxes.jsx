import React from 'react';


class Check extends React.Component {

render(){
  return(
    <div>
      <div className="form1">
    <form id="checkapp1">
         <p>How many rooms you want</p>
          <label>1 room
            <input
              name="room1"
              type="checkbox"
              value = "checked"
              checked={console.log('')}
              onChange={console.log('')} />
          </label>
          <label>2 rooms
            <input
              name="isGoing"
              type="checkbox"
              checked={console.log('')}
              onChange={console.log('Hi')} />
          </label>
          <label>3 rooms
            <input
              name="isGoing"
              type="checkbox"
              checked={console.log('')}
              onChange={console.log('Hi')} />
          </label>
          <label>4 rooms
            <input
              name="isGoing"
              type="checkbox"
              checked={console.log('')}
              onChange={console.log('Hi')} />
          </label>
          <label>5 rooms
            <input
              name="isGoing"
              type="checkbox"
              checked={console.log('')}
              onChange={console.log('Hi')} />
          </label>
        </form>
      </div>
      <div className="form2">
        <form id="checkapp2">
             <p>Choose price</p>
              <label> less than 300 Eur
                <input
                  name="isGoing"
                  type="checkbox"
                  checked={console.log('')}
                  onChange={console.log('Hi')} />
              </label>
              <label>300 - 600 Eur
                <input
                  name="isGoing"
                  type="checkbox"
                  checked={console.log('')}
                  onChange={console.log('Hi')} />
              </label>
              <label>600 - 800 Eur
                <input
                  name="isGoing"
                  type="checkbox"
                  checked={console.log('')}
                  onChange={console.log('Hi')} />
              </label>
              <label>800 - 1000 Eur
                <input
                  name="isGoing"
                  type="checkbox"
                  checked={console.log('')}
                  onChange={console.log('Hi')} />
              </label>
              <label>more than 1000 Eur
                <input
                  name="isGoing"
                  type="checkbox"
                  checked={console.log('')}
                  onChange={console.log('Hi')} />
              </label>
            </form>
          </div>
          <div className="form3">
            <form id="checkapp3">
                 <p>How many people will live</p>
                  <label> 1
                    <input
                      name="isGoing"
                      type="checkbox"
                      checked={console.log('')}
                      onChange={console.log('Hi')} />
                  </label>
                  <label>2
                    <input
                      name="isGoing"
                      type="checkbox"
                      checked={console.log('')}
                      onChange={console.log('Hi')} />
                  </label>
                  <label>3
                    <input
                      name="isGoing"
                      type="checkbox"
                      checked={console.log('')}
                      onChange={console.log('Hi')} />
                  </label>
                  <label>4
                    <input
                      name="isGoing"
                      type="checkbox"
                      checked={console.log('')}
                      onChange={console.log('Hi')} />
                  </label>
                  <label>5
                    <input
                      name="isGoing"
                      type="checkbox"
                      checked={console.log('')}
                      onChange={console.log('Hi')} />
                  </label>
                </form>
              </div>
      </div>
  );

}

}
export default Check;

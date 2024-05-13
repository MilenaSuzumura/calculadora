import React from 'react';

export default class View extends React.Component {
    constructor(props) {
        super(props);
      }

      render() {
        const { number, allNumber, resultCalc } = this.props;
          return (
              <div id="view">
                <p>{resultCalc}</p>
                <p id="value">{allNumber.length === 0 ?
                  number : allNumber.map((num, i) => <p key={i}>{num.toString()}</p>)
                }
                <p>{allNumber.length === 0 ?
                  "" : number}</p></p>
              </div>
          )
      }
}
import React from 'react'
import SwipeableViews from 'react-swipeable-views';

// const App = () => (
//   <SwipeableViews>
//     <div style={Object.assign({}, styles.slide, styles.slide1)}>
//       slide n°1
//     </div>
//     <div style={Object.assign({}, styles.slide, styles.slide2)}>
//       slide n°2
//     </div>
//     <div style={Object.assign({}, styles.slide, styles.slide3)}>
//       slide n°3
//     </div>
//   </SwipeableViews>
// )

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeindex = this.changeindex.bind(this);
  }

  changeindex(index,indexLatest) {
    console.log(index + '--' + indexLatest);
  }

  render() {

    return (
      <SwipeableViews onChangeIndex={this.changeindex}>
        <div className="slide slide1">
          slide n°1
        </div>
        <div className="slide slide2">
          slide n°2
        </div>
        <div className="slide slide3">
          slide n°3
        </div>
      </SwipeableViews>
    );

  }

}

// const styles = {
//   slide: {
//     padding: 15,
//     minHeight: 100,
//     color: '#fff',
//   },
//   slide1: {
//     background: '#FEA900',
//   },
//   slide2: {
//     background: '#B3DC4A',
//   },
//   slide3: {
//     background: '#6AC0FF',
//   },
// };



export default App;
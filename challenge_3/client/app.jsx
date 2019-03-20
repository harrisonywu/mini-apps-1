import Form1 from "./f1.js"
/* 
What do I want to do?
I want to initially only show a checkout button
if the button is pressed, show F1. it should also show a next button
if next is pressed, show F2, also with a next button
if next is pressed, show F3


*/

class App extends React.Component {
  constructor(props) {
    super(props);
    // correct this state so it references the correct state
    this.state = {
    }
  }
  render() {
    return (
      <Form1 />
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'))


class Form1 extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <form method="post">
        Name: <input type="text" name="name"/><br />
        Email: <input type="email" name="email"/><br />
        Password: <input type="password" name="password"/>
        <button onClick="">Next</button>
      </form>
    )
  }

}

export default Form1;
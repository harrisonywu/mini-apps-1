

class Form1 extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <form method="post">
              <input type="text" name="name" value="Insert Name"/><br />
              <input type="email" name="email" value="Insert Email" /><br />
              <input type="password" name="password"/>
              <button onclick="">Next</button>
            </form>
        )
    }

}

export default Form1;
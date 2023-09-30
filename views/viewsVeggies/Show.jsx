const React = require("react")
const DefaultLayout = require('../layout/default');
class Show extends React.Component {
  render() {
    const veggie = this.props.veggie
    console.log(veggie)
    return (
      <DefaultLayout title={"Veggies Show Page"}>
        The {veggie.name} is {veggie.color}.{" "}
        {veggie.readyToEat
          ? "It is ready to eat"
          : "It is not ready to eat... Cant touch this"}
      <br/>
      <a href='/veggies'>Home</a>
      </DefaultLayout>
    )
  }
}
module.exports = Show
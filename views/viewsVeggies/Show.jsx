const React = require('react')
    class Show extends React.Component {
       render () {
        const veggie = this.props.veggie
        return (
            <div>
          <h1> Show Page </h1>
          The {veggie.name} is {veggie.color}.
          {veggie.readToEat? "It is ready to eat" : "It is not ready to eat"}
          </div>
         );
        }
     }
     module.exports  = Show;
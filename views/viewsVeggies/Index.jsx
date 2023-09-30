const React = require('react');
const DefaultLayout = require('..layout/default');
    class Index extends React.Component {
      render() {
          const veggies = this.props.veggies;
          return (
            <DefaultLayout title={"Veggies Index Page"}>
                  <nav>
                      <a href="/veggies/new">Create a New Veggie</a>
                      </nav>
                      <ul>
                          {/* {veggies.map((veggie, i) => {
                              return (
                                  <li>
                                      The{' '}
                                      <a href={`/veggies/${i}`}>
                                          {veggie.name}
                                      </a>{' '}
                                      is {veggie.color} <br></br>
                                      {veggie.readyToEat
                                          ? `It is ready to eat`
                                          : `It is not ready to eat`}
                                      <br />
                                  </li>
                              );
                          })} */}
                              {this.props.veggies.map((veggie,i) => {
                                    return <li key={i}>
                                        <a href={`/veggies/${veggie.id}`}>{veggie.name}</a>
                                         is { veggie.readyToEat? <span>It is ready to eat</span>: <span> It is not ready to eat </span>}
                                        {/* Your Delete Form Goes Here  It's incomplete we will fix below*/}
                                        <form action={`/veggies/${veggie._id}?_method=DELETE`} method="POST">
                                            <input type="submit" value="DELETE"/>
                                        </form>
                                 </li>
                             })}
                      </ul>
                    </DefaultLayout>
          );
      }
    }
    module.exports = Index;
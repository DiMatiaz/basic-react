const EVENTS = [
  {
    name: "Vihaan",
    date: "Oct 27,2017 - Oct 28, 2017",
    place: "Delhi Technological University",
    description: "Vihaan is a Hackathon organised by IEEE WIE DTU. It is aimed at encouraging the love for innovation, coding and technology, especially, among women. IEEE WIE believes in encouraging talent that is no...",
    category: "Upcoming Hackathons",
    img: "https://scontent.fdel5-1.fna.fbcdn.net/v/t1.0-9/22089945_869759003188297_4395915044911243354_n.jpg?oh=6cacd07440ff47af7c599a2e3b92df90&oe=5A6FD810"
  },
  {
    name: "DevFest'17 - GDG VIT",
    date: "Oct 27,2017 - Oct 28, 2017",
    place: "VIT University",
    description: "DevFest’17 is back to bring innovators, thinkers and entrepreneurs under one roof for its third season. This time around, the brain-wracking challenges, the entrepreneur’s dream-come- true pitches, an...",
    category: "Upcoming Hackathons",
    img: "https://scontent.fdel5-1.fna.fbcdn.net/v/t1.0-9/22050277_1579943718732960_4042843996841731312_n.jpg?oh=4f6b5d8a8619a1b1a475998cb8cf8f54&oe=5A43E624"

  },
  {
    name: "HackData",
    date: "Oct 7,2017 - Oct 8, 2017",
    place: "Greater Noida",
    description: "HackData is one-of-a kind Data Hackathon organized by ACM SNU Chapter in association with Hack Society. It’s a 30 hours event packed with sessions, workshops, networking activities, hacking and pitchi...",
    category: "Hall Of Fame",
    img: "http://clashhacks.in/assets/img/events/HackData.jpg"

  }
];

class HeaderTitle extends React.Component {

}
class IntroHeader extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div className="row wrapper">
        <div className="col">
          <h1>HackSociety</h1>
        </div>
        <div className="col login">
          <a href="#">Login</a>
        </div>
      </div>
    );
  }
}
class MenuItem extends React.Component {
  constructor(props){
    super(props);
    this.onHoverInput = this.onHoverInput.bind(this);
  }

  onHoverInput(){
    this.props.onHover(this.props.index);
  }
  render(){

    let item;
    if ( this.props.hoverIndex == this.props.index){
      item = <li className="selected" onMouseOver={this.onHoverInput}>{this.props.name}</li>;
    }
    else {
      item = <li onMouseOver={this.onHoverInput}>{this.props.name}</li>;
    }

    return (
      item
    );
  }
}
class Menu extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div className="row wrapper">
        <MenuItem onHover={this.props.onHover} index={0} name="Listing" hoverIndex={this.props.hoverIndex} />
        <MenuItem onHover={this.props.onHover} index={1} name="Profile" hoverIndex={this.props.hoverIndex} />
        <MenuItem onHover={this.props.onHover} index={2} name="Dashboard" hoverIndex={this.props.hoverIndex} />
      </div>
    );
  }
}
class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      hoverIndex: 0
    };
    this.handleOnHover = this.handleOnHover.bind(this);
  }

  handleOnHover(index){
    this.setState({hoverIndex: index});
  }

  render(){
    return (
      <header>
        <IntroHeader />
        <Menu hoverIndex={this.state.hoverIndex} onHover={this.handleOnHover}/>
      </header>
    );
  }
}

class List extends React.Component {
  constructor(){
    super();
  }

  render(){
    let list = [<div key="1" className="row category">
                <h2>{EVENTS[0].category}</h2>
            </div>];
    let lastCat = EVENTS[0].category;
    let id = 2;
    for (let i=0; i<EVENTS.length;i++){
      if (EVENTS[i].category != lastCat){
        list.push( <div key={id.toString()} className="row category">
            <h2>{EVENTS[i].category}</h2>
        </div>);
      }
      list.push(<div key = {id.toString()} className="row card">
              <div className="card-image col">
                <img src={EVENTS[i].img}/>
              </div>
              <div className="card-info col">
                <h3>{EVENTS[i].name}</h3>
                <div>
                  <div className="inline">
                    <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRxsbUOzKFhjW3MYETVhdK2lNSwEgNQUVcUkMqSRkMVrH1Wm5iw"/>
                  </div>
                  <div className="inline">
                      <p>{EVENTS[i].date}</p>
                  </div>
                </div>
                <div className="top" >
                  <div className="inline">
                    <img className="icon" src="https://image.flaticon.com/icons/png/512/33/33622.png"/>
                  </div>
                  <div className="inline">
                    <p>{EVENTS[i].place}</p>
                  </div>
                </div>
                <div className="top" >
                  <p>{EVENTS[i].description}</p>
                </div>
              </div>
            </div>);
      lastCat = EVENTS[i].category;
      id++;
    }
    return (
        <div className="wrapper">
          <div className="col">
            {list}
          </div>
        </div>
    );
  }
}
class Main extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <main>
        <List/>
      </main>
    );
  }
}
class Page extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

ReactDOM.render(<Page/>, document.getElementById('body'));

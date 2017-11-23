"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EVENTS = [{
  name: "Vihaan",
  date: "Oct 27,2017 - Oct 28, 2017",
  place: "Delhi Technological University",
  description: "Vihaan is a Hackathon organised by IEEE WIE DTU. It is aimed at encouraging the love for innovation, coding and technology, especially, among women. IEEE WIE believes in encouraging talent that is no...",
  category: "Upcoming Hackathons",
  img: "https://scontent.fdel5-1.fna.fbcdn.net/v/t1.0-9/22089945_869759003188297_4395915044911243354_n.jpg?oh=6cacd07440ff47af7c599a2e3b92df90&oe=5A6FD810"
}, {
  name: "DevFest'17 - GDG VIT",
  date: "Oct 27,2017 - Oct 28, 2017",
  place: "VIT University",
  description: "DevFest’17 is back to bring innovators, thinkers and entrepreneurs under one roof for its third season. This time around, the brain-wracking challenges, the entrepreneur’s dream-come- true pitches, an...",
  category: "Upcoming Hackathons",
  img: "https://scontent.fdel5-1.fna.fbcdn.net/v/t1.0-9/22050277_1579943718732960_4042843996841731312_n.jpg?oh=4f6b5d8a8619a1b1a475998cb8cf8f54&oe=5A43E624"

}, {
  name: "HackData",
  date: "Oct 7,2017 - Oct 8, 2017",
  place: "Greater Noida",
  description: "HackData is one-of-a kind Data Hackathon organized by ACM SNU Chapter in association with Hack Society. It’s a 30 hours event packed with sessions, workshops, networking activities, hacking and pitchi...",
  category: "Hall Of Fame",
  img: "http://clashhacks.in/assets/img/events/HackData.jpg"

}];

var HeaderTitle = function (_React$Component) {
  _inherits(HeaderTitle, _React$Component);

  function HeaderTitle() {
    _classCallCheck(this, HeaderTitle);

    return _possibleConstructorReturn(this, (HeaderTitle.__proto__ || Object.getPrototypeOf(HeaderTitle)).apply(this, arguments));
  }

  return HeaderTitle;
}(React.Component);

var IntroHeader = function (_React$Component2) {
  _inherits(IntroHeader, _React$Component2);

  function IntroHeader() {
    _classCallCheck(this, IntroHeader);

    return _possibleConstructorReturn(this, (IntroHeader.__proto__ || Object.getPrototypeOf(IntroHeader)).call(this));
  }

  _createClass(IntroHeader, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row wrapper" },
        React.createElement(
          "div",
          { className: "col" },
          React.createElement(
            "h1",
            null,
            "HackSociety"
          )
        ),
        React.createElement(
          "div",
          { className: "col login" },
          React.createElement(
            "a",
            { href: "#" },
            "Login"
          )
        )
      );
    }
  }]);

  return IntroHeader;
}(React.Component);

var MenuItem = function (_React$Component3) {
  _inherits(MenuItem, _React$Component3);

  function MenuItem(props) {
    _classCallCheck(this, MenuItem);

    var _this3 = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

    _this3.onHoverInput = _this3.onHoverInput.bind(_this3);
    return _this3;
  }

  _createClass(MenuItem, [{
    key: "onHoverInput",
    value: function onHoverInput() {
      this.props.onHover(this.props.index);
    }
  }, {
    key: "render",
    value: function render() {

      var item = void 0;
      if (this.props.hoverIndex == this.props.index) {
        item = React.createElement(
          "li",
          { className: "selected", onMouseOver: this.onHoverInput },
          this.props.name
        );
      } else {
        item = React.createElement(
          "li",
          { onMouseOver: this.onHoverInput },
          this.props.name
        );
      }

      return item;
    }
  }]);

  return MenuItem;
}(React.Component);

var Menu = function (_React$Component4) {
  _inherits(Menu, _React$Component4);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this));
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row wrapper" },
        React.createElement(MenuItem, { onHover: this.props.onHover, index: 0, name: "Listing", hoverIndex: this.props.hoverIndex }),
        React.createElement(MenuItem, { onHover: this.props.onHover, index: 1, name: "Profile", hoverIndex: this.props.hoverIndex }),
        React.createElement(MenuItem, { onHover: this.props.onHover, index: 2, name: "Dashboard", hoverIndex: this.props.hoverIndex })
      );
    }
  }]);

  return Menu;
}(React.Component);

var Header = function (_React$Component5) {
  _inherits(Header, _React$Component5);

  function Header() {
    _classCallCheck(this, Header);

    var _this5 = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this5.state = {
      hoverIndex: 0
    };
    _this5.handleOnHover = _this5.handleOnHover.bind(_this5);
    return _this5;
  }

  _createClass(Header, [{
    key: "handleOnHover",
    value: function handleOnHover(index) {
      this.setState({ hoverIndex: index });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "header",
        null,
        React.createElement(IntroHeader, null),
        React.createElement(Menu, { hoverIndex: this.state.hoverIndex, onHover: this.handleOnHover })
      );
    }
  }]);

  return Header;
}(React.Component);

var List = function (_React$Component6) {
  _inherits(List, _React$Component6);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this));
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var list = [React.createElement(
        "div",
        { className: "row category" },
        React.createElement(
          "h2",
          null,
          EVENTS[0].category
        )
      )];
      var lastCat = EVENTS[0].category;
      for (var i = 0; i < EVENTS.length; i++) {
        if (EVENTS[i].category != lastCat) {
          list.push(React.createElement(
            "div",
            { className: "row category" },
            React.createElement(
              "h2",
              null,
              EVENTS[i].category
            )
          ));
        }
        list.push(React.createElement(
          "div",
          { className: "row card" },
          React.createElement(
            "div",
            { className: "card-image col" },
            React.createElement("img", { src: EVENTS[i].img })
          ),
          React.createElement(
            "div",
            { className: "card-info col" },
            React.createElement(
              "h3",
              null,
              EVENTS[i].name
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "div",
                { className: "inline" },
                React.createElement("img", { className: "icon", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRxsbUOzKFhjW3MYETVhdK2lNSwEgNQUVcUkMqSRkMVrH1Wm5iw" })
              ),
              React.createElement(
                "div",
                { className: "inline" },
                React.createElement(
                  "p",
                  null,
                  EVENTS[i].date
                )
              )
            ),
            React.createElement(
              "div",
              { className: "top" },
              React.createElement(
                "div",
                { className: "inline" },
                React.createElement("img", { className: "icon", src: "https://image.flaticon.com/icons/png/512/33/33622.png" })
              ),
              React.createElement(
                "div",
                { className: "inline" },
                React.createElement(
                  "p",
                  null,
                  EVENTS[i].place
                )
              )
            ),
            React.createElement(
              "div",
              { className: "top" },
              React.createElement(
                "p",
                null,
                EVENTS[i].description
              )
            )
          )
        ));
        lastCat = EVENTS[i].category;
      }
      return React.createElement(
        "div",
        { className: "wrapper" },
        React.createElement(
          "div",
          { className: "col" },
          list
        )
      );
    }
  }]);

  return List;
}(React.Component);

var Main = function (_React$Component7) {
  _inherits(Main, _React$Component7);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "main",
        null,
        React.createElement(List, null)
      );
    }
  }]);

  return Main;
}(React.Component);

var Page = function (_React$Component8) {
  _inherits(Page, _React$Component8);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, null),
        React.createElement(Main, null)
      );
    }
  }]);

  return Page;
}(React.Component);

ReactDOM.render(React.createElement(Page, null), document.getElementById('body'));

var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      id: 0,
      firstname: "",
      lastname: "",
      activity: "Science Lab",
      a: false,
      b: false,
      c: false,
      tableData: [] };


    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
    _this.removeEntry = _this.removeEntry.bind(_this);return _this;
  }

  // updates the state object with input data
  _createClass(App, [{ key: "handleInputChange", value: function handleInputChange(event) {
      var target = event.target;
      var name = target.name;
      var value = target.type === 'checkbox' ? target.checked : target.value;

      this.setState(_defineProperty({},
      name, value));

    }

    // adds a copy of input data to the tableData array
    // updates the form to initial empty state
  }, { key: "handleFormSubmit", value: function handleFormSubmit(event) {
      event.preventDefault();

      var entry = {
        id: this.state.id,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        activity: this.state.activity,
        a: this.state.a,
        b: this.state.b,
        c: this.state.c };


      this.setState(function (prevState) {return {
          id: prevState.id + 1,
          firstname: "",
          lastname: "",
          activity: "Science Lab",
          a: false,
          b: false,
          c: false,
          tableData: [].concat(_toConsumableArray(prevState.tableData), [entry]) };});

    } }, { key: "removeEntry",

    // removes entry of interest with the help of its passed id
    value: function removeEntry(event) {
      var dataCopy = this.state.tableData;
      var newCopy = dataCopy.filter(function (element) {return element.id != event.target.value;});
      this.setState({ tableData: newCopy });
    }

    // form is static so rendered it altogether
  }, { key: "render", value: function render() {
      return (
        React.createElement("div", { className: "container" },
          React.createElement("h3", null, "Registration System"),
          React.createElement("form", { onSubmit: this.handleFormSubmit },
            React.createElement("div", { className: "form-group" },
              React.createElement("label", { "for": "firstname" }, "First Name"),
              React.createElement("input", { name: "firstname", id: "firstname", className: "form-control", type: "text", value: this.state.firstname, onChange: this.handleInputChange })),

            React.createElement("div", { className: "form-group" },
              React.createElement("label", { "for": "lastname" }, "Last Name"),
              React.createElement("input", { name: "lastname", id: "lastname", className: "form-control", type: "text", value: this.state.lastname, onChange: this.handleInputChange })),

            React.createElement("div", { className: "form-group" },
              React.createElement("label", { "for": "activity" }, "Select Activity:"),
              React.createElement("select", { name: "activity", id: "activity", className: "form-control", value: this.state.activity, onChange: this.handleInputChange },
                React.createElement("option", { value: "Science Lab" }, "Science Lab"),
                React.createElement("option", { value: "Swimming" }, "Swimming"),
                React.createElement("option", { value: "Cooking" }, "Cooking"),
                React.createElement("option", { value: "Painting" }, "Painting"))),


            React.createElement("div", { className: "form-group" },
              React.createElement("p", null, "Check all that apply:"),
              React.createElement("div", { className: "form-check" },
                React.createElement("input", { name: "a", type: "checkbox", className: "form-check-input", id: "a", checked: this.state.a, onChange: this.handleInputChange }),
                React.createElement("label", { className: "form-check-label", "for": "a" }, "a) Dietary Restrictions")),

              React.createElement("div", { className: "form-check" },
                React.createElement("input", { name: "b", type: "checkbox", className: "form-check-input", id: "b", checked: this.state.b, onChange: this.handleInputChange }),
                React.createElement("label", { className: "form-check-label", "for": "b" }, "b) Physical Disabilities")),

              React.createElement("div", { className: "form-check" },
                React.createElement("input", { name: "c", type: "checkbox", className: "form-check-input", id: "c", checked: this.state.c, onChange: this.handleInputChange }),
                React.createElement("label", { className: "form-check-label", "for": "c" }, "c) Medical Needs"))),


            React.createElement("button", { "class": "btn btn-info", type: "submit" }, "Submit")),

          React.createElement(RegTable, { entryList: this.state.tableData,
            remove: this.removeEntry })));


    } }]);return App;}(React.Component);


function RegTable(props) {
  return (
    React.createElement("table", { className: "table" },
      React.createElement("thead", null,
        React.createElement("tr", null,
          React.createElement("th", null, "Remove"),
          React.createElement("th", null, "First Name"),
          React.createElement("th", null, "Last Name"),
          React.createElement("th", null, "Activity"),
          React.createElement("th", null, "Restrictions"))),


      props.entryList.map(function (entry, index) {return (
          React.createElement(Entry, { key: index,
            id: entry.id,
            remove: props.remove,
            firstname: entry.firstname,
            lastname: entry.lastname,
            activity: entry.activity,
            restrictions: [{ displayValue: 'a',
              ifChecked: entry.a },
            { displayValue: 'b',
              ifChecked: entry.b },
            { displayValue: 'c',
              ifChecked: entry.c }] }));})));



}

function Entry(props) {
  var restrictionsList = props.restrictions;
  var display = restrictionsList.filter(function (e) {return !!e.ifChecked;}).map(function (element) {return element.displayValue;});

  return (
    React.createElement("tbody", null,
      React.createElement("tr", null,
        React.createElement("td", null, React.createElement("button", { onClick: props.remove, value: props.id, className: "brn btn-danger" }, "X")),
        React.createElement("td", null, props.firstname),
        React.createElement("td", null, props.lastname),
        React.createElement("td", null, props.activity),
        React.createElement("td", null, display))));



}

ReactDOM.render(
React.createElement(App, null),
document.getElementById("root"));
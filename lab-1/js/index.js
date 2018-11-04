var cars = [
{ year: 2013, model: "A", price: 32000 },
{ year: 2011, model: "B", price: 4400 },
{ year: 2016, model: "B", price: 15500 }];

var trucks = [
{ year: 2014, model: "D", price: 18000 },
{ year: 2013, model: "E", price: 5200 }];

var convertibles = [
{ year: 2009, model: "F", price: 2000 },
{ year: 2010, model: "G", price: 6000 },
{ year: 2012, model: "H", price: 12500 },
{ year: 2017, model: "M", price: 50000 }];

function Welcome(props) {
  return React.createElement("div", { className: "container jumbotron" },
    React.createElement("h2", { className: "display-4" }, props.welcomeText),
    React.createElement("p", { className: "lead" }, props.description));

}

function VehicleOptions(props) {
  return React.createElement("option", { value: props.value }, props.value);
}

function Choose(props) {
  return React.createElement("div", { className: "container" },
    React.createElement("h2", null, "Choose Options"),
    React.createElement("div", { className: "form-check" },
      React.createElement("input", { className: "form-check-input", type: "checkbox", id: "coding", name: "interest", value: "coding" }),
      React.createElement("label", { className: "form-check-label", "for": "coding" }, "New Only")),

    React.createElement("div", { className: "form-group" },
      React.createElement("label", { "for": "typeSelect" }, "Select Type"),
      React.createElement("select", { className: "form-control", id: "typeSelect" },
        React.createElement(VehicleOptions, { value: "All" }),
        React.createElement(VehicleOptions, { value: "Cars" }),
        React.createElement(VehicleOptions, { value: "Trucks" }),
        React.createElement(VehicleOptions, { value: "Convertibles" }))));



}

function TableTitle(props) {
  return React.createElement("div", { className: "container" },
    React.createElement("h2", { className: "display-4" }, props.tableName),
    props.data.map(function (v, i) {
      return React.createElement(TableItem, { data: v, key: i });
    }));

}

function TableItem(props) {
  return React.createElement("table", { className: "table" },
    React.createElement("thead", { className: "thead-light" },
      React.createElement("tr", null,
        React.createElement("th", null, "Year"),
        React.createElement("th", null, "Model"),
        React.createElement("th", null, "Price"),
        React.createElement("th", null, "Buy"))),


    React.createElement("tr", null,
      React.createElement("td", null, props.data.year),
      React.createElement("td", null, props.data.model),
      React.createElement("td", null, "$", props.data.price),
      React.createElement("td", null, React.createElement("button", { className: "btn btn-success" }, "Buy Now"))));


}

function CarsApp(props) {
  return React.createElement("div", null,
    React.createElement(Welcome, { welcomeText: "Welcome to React Transportation", description: "The best place to buy vehicles online" }),
    React.createElement(Choose, null),
    React.createElement("div", null,
      React.createElement(TableTitle, { tableName: "Cars", data: cars }),
      React.createElement(TableTitle, { tableName: "Trucks", data: trucks }),
      React.createElement(TableTitle, { tableName: "Convertibles", data: convertibles })));


}

ReactDOM.render(
React.createElement(CarsApp, null),
document.getElementById("root"));
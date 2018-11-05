var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} 

var quizQuestions = [{ question: "Sofia", answerindex: 1, answers: [{ content: "Belgium", answer: !1 }, { content: "France", answer: !1 }, { content: "Egypt", answer: !1 }, { content: "Bulgaria", answer: !0 }] }, { question: "Canberra", answerindex: 2, answers: [{ content: "Algeria", answer: !1 }, { content: "Australia", answer: !0 }, { content: "Turkey", answer: !1 }, { content: "Cameroon", answer: !1 }] }, { question: "Ottawa", answerindex: 3, answers: [{ content: "China", answer: !1 }, { content: "Canada", answer: !0 }, { content: "Czech Republic", answer: !1 }, { content: "Cuba", answer: !1 }] }, { question: "Beijing", answerindex: 4, answers: [{ content: "Netherlands", answer: !1 }, { content: "China", answer: !0 }, { content: "USA", answer: !1 }, { content: "Italy", answer: !1 }] }, { question: "Bangkok", answerindex: 5, answers: [{ content: "Colombia", answer: !1 }, { content: "Argentina", answer: !1 }, { content: "Thailand", answer: !0 }, { content: "India", answer: !1 }] }, { question: "Nicosia", answerindex: 6, answers: [{ content: "Cyprus", answer: !0 }, { content: "Russia", answer: !1 }, { content: "Costa Rica", answer: !1 }, { content: "Pakistan", answer: !1 }] }, { question: "Islamabad", answerindex: 7, answers: [{ content: "Canada", answer: !1 }, { content: "Philippines", answer: !1 }, { content: "Pakistan", answer: !0 }, { content: "Cambodia", answer: !1 }] }, { question: "Yerevan", answerindex: 8, answers: [{ content: "Egypt", answer: !1 }, { content: "Armenia", answer: !0 }, { content: "Bangladesh", answer: !1 }, { content: "Thailand", answer: !1 }] }, { question: "Luanda", answerindex: 9, answers: [{ content: "Spain", answer: !1 }, { content: "Cuba", answer: !1 }, { content: "Azerbaijan", answer: !1 }, { content: "Angola", answer: !0 }] }, { question: "Santiago", answerindex: 10, answers: [{ content: "Japan", answer: !1 }, { content: "Chile", answer: !0 }, { content: "Cuba", answer: !1 }, { content: "Dominica", answer: !1 }] }];

// question title
function Question(props) {
  return (
    React.createElement("h2", null, props.question, " is the capital of which country?"));

}

// green button setting next question
function Button(props) {
  return (
    React.createElement("button", { className: "btn next btn-success btn-large", onClick: props.onClick }, "Next"));

}

// blue plate with info about questions and answers
function GameInfo(props) {
  return (
    React.createElement("div", { className: "alert alert-info" }, "Question No. ",
      React.createElement("strong", null, props.quesNo), " / 10 ", React.createElement("br", null), "Correct answers: ",
      React.createElement("strong", null, props.correct), " ", React.createElement("br", null), "Wrong answers: ",
      React.createElement("strong", null, props.wrong)));


}

// informs about correct / wrong response, changes green / red respectively
function AnswerAlert(props) {
  var validateAnswer = props.ifCorrect;
  var quesNo = props.quesNo;
  if (validateAnswer) {
    return React.createElement("div", { className: props.shouldHide ? 'hidden alert alert-success' : 'alert alert-success' }, "Correct!");
  }
  return React.createElement("div", { className: props.shouldHide ? 'hidden alert alert-danger' : 'alert alert-danger' }, "Wrong!");
}

// sets buttons with answer options
var Board = function (_React$Component) {_inherits(Board, _React$Component);function Board() {_classCallCheck(this, Board);return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));}_createClass(Board, [{ key: "renderVariant",
    // not sure if it's the most efficient way to set each option (perhaps 'for loop' would be better), but followed the example in original React tutorial
    // on click becomes disabled and reports if the answer was correct / wrong
    value: function renderVariant(i) {var _this2 = this;
      return (
        React.createElement("button", { className: "options btn btn-info btn-large",
            onClick: function onClick() {return _this2.props.onClick(i);}, disabled: this.props.dis },
          this.props.options[i].content));


    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          this.renderVariant(0),
          this.renderVariant(1),
          this.renderVariant(2),
          this.renderVariant(3)));


    } }]);return Board;}(React.Component);var


Quiz = function (_React$Component2) {_inherits(Quiz, _React$Component2);
  function Quiz(props) {_classCallCheck(this, Quiz);var _this3 = _possibleConstructorReturn(this, (Quiz.__proto__ || Object.getPrototypeOf(Quiz)).call(this,
    props));
    _this3.state = {
      counter: 0,
      question: '',
      options: [],
      quesNo: 1,
      correct: 0,
      wrong: 0,
      ifCorrect: true,
      disabled: false,
      shouldHide: true };return _this3;

  }_createClass(Quiz, [{ key: "componentWillMount", value: function componentWillMount()

    {
      this.setState({
        question: quizQuestions[0].question,
        options: quizQuestions[0].answers,
        quesNo: quizQuestions[0].answerindex });

    }

    // response to click: counts correct/wrong answers and disables option buttons
  }, { key: "handleClick", value: function handleClick(i) {
      var counter = this.state.counter,
      answer = quizQuestions[counter].answers[i].answer;
      if (answer) {
        this.setState(function (state, props) {return {
            correct: state.correct + 1,
            ifCorrect: true,
            disabled: true,
            shouldHide: false };});

      } else {
        this.setState(function (state, props) {return {
            wrong: state.wrong + 1,
            ifCorrect: false,
            disabled: true,
            shouldHide: false };});

      }
    }

    // sets next question by updating counter
  }, { key: "jumpTo", value: function jumpTo() {
      var counter = this.state.counter + 1;
      this.setState({
        counter: counter,
        quesNo: quizQuestions[counter].answerindex,
        question: quizQuestions[counter].question,
        options: quizQuestions[counter].answers,
        disabled: false,
        shouldHide: true });

    } }, { key: "render", value: function render()

    {var _this4 = this;
      return (
        React.createElement("div", { className: "container" },
          React.createElement(GameInfo, { quesNo: this.state.quesNo, correct: this.state.correct, wrong: this.state.wrong }),
          React.createElement("div", { className: "board" },
            React.createElement(AnswerAlert, { ifCorrect: this.state.ifCorrect, shouldHide: this.state.shouldHide }),
            React.createElement(Question, { question: this.state.question }),
            React.createElement(Board, { options: this.state.options,
              onClick: function onClick(i) {return _this4.handleClick(i);}, dis: this.state.disabled }),
            React.createElement(Button, { onClick: function onClick() {return _this4.jumpTo();} }))));



    } }]);return Quiz;}(React.Component);


ReactDOM.render(
React.createElement(Quiz, null),
document.getElementById("root"));

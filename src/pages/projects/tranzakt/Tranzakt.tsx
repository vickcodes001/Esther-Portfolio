import Context from "./component/Context";
import Design from "./component/Design";
import Header from "./component/Header";
import Problem from "./component/Problem";
import ReadMore from "./component/ReadMore";
import Solution from "./component/Solution";

const Tranzakt = () => {
  return (
    <div>
      <Header />
      <Problem />
      <Context />
      <Design />
      <Solution />
      <ReadMore />
    </div>
  );
};

export default Tranzakt;

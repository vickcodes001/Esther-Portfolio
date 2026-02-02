import Context from "./component/Context";
import Design from "./component/Design";
import Goal from "./component/Goal";
import Header from "./component/Header";
import ReadMore from "./component/ReadMore";
import Solution from "./component/Solution";

const Vuno = () => {
  return (
    <div>
      <Header />
      <Goal />
      <Context />
      <Design />
      <Solution />
      <ReadMore />
    </div>
  );
};

export default Vuno;

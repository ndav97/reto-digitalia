import InterestNetworkItem from "./InterestNetworkitem";
import "../styles/InterestNetworkContainer.css";

function InterestNetworkContainer() {
  let items = [];
  for (let index = 0; index < 10; index++) {
    items.push(<InterestNetworkItem key={index} />);
  }
  return (
    <div className="red-container flex flex-col bg-gray-200 px-4 pt-4">
      <span>Red de interés</span>
      {items}
    </div>
  );
}

export default InterestNetworkContainer;

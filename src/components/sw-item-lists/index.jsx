import { useContext, useState } from "react";
import { DefaultContext } from "../../Context";

export const ItemLists = ({ item, children, type }) => {
  const { handleCreateFan } = useContext(DefaultContext);
  const [click, setClick] = useState(false)
  const handleClick = () => {
    document.activeElement.style = click ? "background: #17e104" : "background: rgb(50, 43, 122)"
    setClick(!click)
  }
  return (
    <div key={item.firstName || item.name} className="item-list-layout">
      <div>
        <p>name: {item.firstName || item.name}</p>
        {children}
      </div>
      <div className="item-image-layout">
        {type === "chars" && (
          <button
            className="favorite-button"
            onClick={() => handleClick()}
          >
            I am your fan!!
          </button>
        )}
        <img className="item-image" src={item.image || item.url} alt="asd" />
      </div>
    </div>
  );
};

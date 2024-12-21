import "./styles.css";
import { useState } from "react";

export default function App() {
  const [arr, setArr] = useState([
    {
      name: "India",
      checked: false,
    },
    {
      name: "Pakistan",
      checked: false,
    },
    {
      name: "Srilanka",
      checked: false,
    },
    {
      name: "India",
      checked: false,
    },
    {
      name: "Pakistan",
      checked: false,
    },
    {
      name: "Srilanka",
      checked: false,
    },
  ]);
  const handleClick = (index) => {
    const updatedArray = arr.map((item, i) => {
      return i === index ? { ...item, checked: !item.checked } : item;
    });
    setArr(updatedArray);
  };
  // const handleClick = (index) => {
  //   arr[index].checked = !arr[index].checked;
  //   setArr([...arr]);
  // };

  const deletearray = (index) => {
    arr.splice(index, 1);
    setArr([...arr]);
  };
  return (
    <div className="App">
      <ul style={{ listStyle: "none" }}>
        {arr.map((item, index) => {
          return (
            <div style={{ display: "flex", gap: "5px" }}>
              <input
                style={{ cursor: "pointer" }}
                type="checkbox"
                checked={item.checked}
                onClick={() => handleClick(index)}
              />
              <li style={{ cursor: "pointer" }}>
                {item.name}{" "}
                {item.checked ? (
                  <span
                    onClick={() => deletearray(index)}
                    style={{ cursor: "pointer" }}
                  >
                    ❌
                  </span>
                ) : (
                  ""
                )}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

import React, { useTransition } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { dataForFilter } from "../../exampleData/dataFilter";

export default function SearchComponent() {
  const [value, setValue] = useState("");
  const [filteredValue, setFilteredValue] = useState("");
  const [items, setItems] = useState(dataForFilter);
  const [isPending, startsTransition] = useTransition();

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.title.toLowerCase().includes(filteredValue)
    );
  }, [filteredValue]);

  const onChangeValue = (e) => {
    setValue(e.target.value);
    startsTransition(() => {
      setFilteredValue(e.target.value);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Searching..."
        onChange={(e) => onChangeValue(e)}
        className="outline-none border-2 border-black border-solid rounded-lg pl-2"
      />
      {isPending && <h1>Loading...</h1>}
      {filteredItems &&
        filteredItems.map((el) => (
          <div key={el.id}>
            <p>{el.title}</p>
          </div>
        ))}
    </div>
  );
}

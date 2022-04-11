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
      item.color.toLowerCase().includes(filteredValue)
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
      />
      {isPending && <h1>Loading...</h1>}
      {filteredItems &&
        filteredItems.map((el, i) => (
          <div key={i}>
            <p>{el.color}</p>
            <p>{el.value}</p>
          </div>
        ))}
    </div>
  );
}

import { useState } from "react";
import styled from "styled-components";

// this returns the react component.

const List = styled.ul`
  list-style: none;
  padding-left: 0%;
`;

type ListItemProp = {
  active: boolean;
};

const ListItem = styled.li<ListItemProp>`
  padding: 5px 0;
  background: ${(prop) => (prop.active ? "blue" : "none")};
`;

type Props = {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
};

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={selectedIndex === index}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;

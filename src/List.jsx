import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
  const category = props.category;
  const fruits = props.items;
  const ListItems = fruits.map((item) => (
    <li key={item.id}>
      Name :{item.name} , Color: {item.color}
    </li>
  ));

  return (
    <>
      <h3>{category}</h3>
      <ol>{ListItems}</ol>
    </>
  );
};

List.defaultProps = {
  category: "category",
  items: [],
};
List.defaultProps = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      color: PropTypes.string,
    })
  ),
};

export default List;

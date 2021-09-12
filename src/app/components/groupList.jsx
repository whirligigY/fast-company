import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem,
  isArrayTrue,
}) => {
  console.log(isArrayTrue, selectedItem, valueProperty, contentProperty);
  return (
    <ul className="list-group">
      {isArrayTrue
        ? items
        : Object.keys(items).map((item) => (
            <li
              key={
                isArrayTrue ? item[valueProperty] : items[item][valueProperty]
              }
              className={
                "list-group-item" +
                (items[item] === selectedItem || item === selectedItem
                  ? " active"
                  : "")
              }
              onClick={() =>
                isArrayTrue ? onItemSelect(item) : onItemSelect(items[item])
              }
              role="button"
            >
              {isArrayTrue
                ? item[contentProperty]
                : items[item][contentProperty]}
            </li>
          ))}
    </ul>
  );
};

GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name",
};
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object,
  isArrayTrue: PropTypes.bool,
};
export default GroupList;

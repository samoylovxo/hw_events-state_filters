import styled from "./Toolbar.module.css";

const Toolbar = (props) => {
  const { filters, selected, onSelectFilter } = props;

  return (
    <div className={styled.filterList}>
      {filters.map((filter, index) => {
        const isSelected = selected.toLowerCase() === filter.toLowerCase();

        return (
          <button
            key={index}
            className={`${styled.filter} ${isSelected && styled.active}`}
            onClick={() => onSelectFilter(filter)}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default Toolbar;

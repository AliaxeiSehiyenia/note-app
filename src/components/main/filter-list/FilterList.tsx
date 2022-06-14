import type { filter } from '../Main';
import Filter from '../filter-list-item/Filter';

type filterListProps = {
  data: filter[];
  onDelete: (id: number) => void;
};

const FilterList = ({ data, onDelete }: filterListProps) => {
  const elements = data.map((item) => {
    const { value, id } = item;
    return <Filter key={id} id={id} value={value} onDelete={() => onDelete(id)} />;
  });

  return (
    <section className="section-filters">
      <ul className="filters-list">{elements}</ul>
    </section>
  );
};

export default FilterList;

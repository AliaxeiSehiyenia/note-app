import type { tag } from '../Main';
import Tag from '../tag-list-item/Tag';

type TagListProps = {
  data: tag[];
  onDelete: (id: number) => void;
};

const TagList = ({ data, onDelete }: TagListProps) => {
  const elements = data.map((item) => {
    const { value, id } = item;
    return <Tag key={id} id={id} tag={value} onDelete={() => onDelete(id)} />;
  });

  return (
    <section className="section-tags">
      <ul className="tags-list">{elements}</ul>
    </section>
  );
};

export default TagList;

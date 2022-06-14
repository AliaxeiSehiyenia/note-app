import type { tag } from '../Main';
import Tag from '../tag-list-item/Tag';

type TagListProps = {
  data: tag[];
};

const TagList = ({ data }: TagListProps) => {
  const elements = data.map((item) => {
    const { value, id } = item;
    return <Tag key={id} id={id} tag={value} />;
  });

  return (
    <section className="section-tags">
      <ul className="tags-list">{elements}</ul>
    </section>
  );
};

export default TagList;

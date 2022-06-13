import Tag from '../tag-list-item/Tag';

type TagListProps = {
  data: string[];
};

const TagList = ({ data }: TagListProps) => {
  const elements = data.map((item, i) => {
    return <Tag key={i} tag={item} />;
  });

  return (
    <section className="section-tags">
      <ul className="tags-list">{elements}</ul>
    </section>
  );
};

export default TagList;

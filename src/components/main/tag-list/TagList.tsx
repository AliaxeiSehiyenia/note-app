import Tag from '../tag-list-item/Tag';

type TagListProps = {
  data: string[];
};

const TagList = ({ data }: TagListProps) => {
  const elements = data.map((item, i) => {
    return <Tag key={i} tag={item} />;
  });

  return <section className="section-tags">{elements}</section>;
};

export default TagList;

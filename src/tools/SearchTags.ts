export function SearchTags(str: string) {
  let arrTags: string[] | [] = [];
  const arrStrings = str.split('#');
  if (arrStrings.length === 1) {
    return;
  } else {
    arrStrings
      .filter((item) => !item.startsWith(' '))
      .map((item) => {
        const matches = item.match(/([a-zа-яё]+)/i);
        if (matches) {
          arrTags = [...arrTags].concat(matches[1]);
        }
      });
  }
  return arrTags;
}

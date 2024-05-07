export const showDate = (s: string): string => {
  const date = new Date(s);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};

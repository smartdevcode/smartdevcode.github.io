import { useSelector } from 'react-redux';
import { selectHighlightedNames } from './elementSlice';

export const useElementHighlight = () => {
  const names = useSelector(selectHighlightedNames);
  return names;
};

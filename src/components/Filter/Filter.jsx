import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name or number
      <Input
        type="text"
        name="filter"
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </Label>
  );
};

export { Filter };

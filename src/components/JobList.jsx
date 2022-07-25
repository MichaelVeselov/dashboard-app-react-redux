import { useSelector, useDispatch } from 'react-redux';
import { selectVisiblePositions } from 'store/positions/positionSelectors';

import { selectFilters } from 'store/filters/filterSelector';

import { JobPosition } from './JobPosition';

import { addFilter } from 'store/filters/filterActions';

const JobList = () => {
  const dispatch = useDispatch();
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };
  const currentFilters = useSelector(selectFilters);

  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  return (
    <div className='job-list'>
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  );
};

export { JobList };

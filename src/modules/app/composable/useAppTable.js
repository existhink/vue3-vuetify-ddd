import { ref } from 'vue';

const useAppTable = () => {
  const appTable_data = ref({
    filter: {},
    options: {},
  });

  /**
   * Update filter data
   * @param val
   */
  const appTable_updateFilter = val => {
    appTable_data.value.filter = { ...appTable_data.value.filter, ...val };
  };

  /**
   * Change sort params
   * @param mapping
   * @returns {{sort: null}}
   */
  const appTable_mapSort = (mapping = {}) => {
    const { sortBy, sortType } = appTable_data.value.options;

    let actualSort = null;

    if (sortBy && sortType) {
      const mappedField = mapping?.[sortBy] ?? sortBy;
      actualSort = `${mappedField}|${sortType}`;
    }

    return { sort: actualSort };
  };

  /**
   * Change filter params
   * @param mapping
   * @returns {{}}
   */
  const appTable_mapFilter = (mapping = {}) => {
    return Object.keys(appTable_data.value.filter).reduce((acc, key) => {
      acc[mapping?.[key] ?? key] = appTable_data.value.filter[key];
      return acc;
    }, {});
  };

  /**
   * Combine options and filter
   * @param mappingSort
   * @param mappingFilter
   * @returns {{}}
   */
  const appTable_buildParams = ({ mappingFilter = {}, mappingSort = {} }) => {
    const filter = appTable_mapFilter(mappingFilter);
    const options = appTable_mapSort(mappingSort);
    return { ...options, ...filter };
  };

  return {
    appTable_data,
    appTable_updateFilter,
    appTable_mapSort,
    appTable_mapFilter,
    appTable_buildParams,
  };
};

export default useAppTable;

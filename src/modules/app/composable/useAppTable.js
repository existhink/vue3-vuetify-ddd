import { reactive } from 'vue';

const useAppTable = () => {
  const appTable_data = reactive({
    filter: {},
    options: {},
  });

  /**
   * Update filter data
   * @param val
   */
  const appTable_updateFilter = val => {
    appTable_data.filter = { ...appTable_data.filter, ...val };
  };

  /**
   * Change sort params
   * @param mapping
   * @returns {{sort: null}}
   */
  const appTable_mapSort = (mapping = {}) => {
    const { sortBy, sortType } = appTable_data.options;

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
    return Object.keys(appTable_data.filter).reduce((acc, key) => {
      acc[mapping?.[key] ?? key] = appTable_data.filter[key];
      return acc;
    }, {});
  };

  /**
   * Combine options and filter
   * @param mappingSort
   * @param mappingFilter
   * @returns {{}}
   */
  const appTable_buildParams = (mappingSort = {}, mappingFilter = {}) => {
    const options = mappingSort ?? appTable_data.options;
    const filter = mappingFilter ?? appTable_data.filter;
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

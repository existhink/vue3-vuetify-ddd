import { useDashboardStore } from '@/modules/dashboard/store/dashboard.store';
import { storeToRefs } from 'pinia';
import useHttpAbort from '@/modules/app/composable/useHttpAbort';
import { DASHBOARD_REQUEST } from '@/modules/dashboard/constants/dashboard.constant';

const useDashboard = () => {
  const store = useDashboardStore();
  const { httpAbort_registerAbort, httpAbort_clearAllRequest } = useHttpAbort();
  const { dashboard_loading, dashboard_posts } = storeToRefs(store);

  const dashboard_fetchPosts = async (params = {}) => {
    try {
      const data = await store.dashboard_fetchPosts({
        params,
        ...httpAbort_registerAbort(DASHBOARD_REQUEST.FETCH_POSTS),
      });
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const dashboard_fetchPost = async id => {
    try {
      const data = await store.dashboard_fetchPost(id, {
        ...httpAbort_registerAbort(DASHBOARD_REQUEST.FETCH_POST),
      });
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return {
    dashboard_store: store,
    dashboard_posts,
    dashboard_loading,
    dashboard_fetchPosts,
    dashboard_fetchPost,
    dashboard_clearAllRequest: httpAbort_clearAllRequest,
  };
};

export default useDashboard;

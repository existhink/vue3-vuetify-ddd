import { defineStore } from 'pinia';
import http from '@/plugins/axios';
import { DASHBOARD_API } from '@/modules/dashboard/constants/dashboard.constant';

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    dashboard_loading: false,
    dashboard_posts: [],
    dashboard_post: {},
  }),
  actions: {
    async dashboard_fetchPosts(options = {}) {
      try {
        this.dashboard_loading = true;
        const { data } = await http.get(DASHBOARD_API.FETCH_POSTS_API, options);
        this.dashboard_posts = data;
        return Promise.resolve(data);
      } catch (err) {
        return Promise.reject(err);
      } finally {
        this.dashboard_loading = false;
      }
    },

    async dashboard_fetchPost(id, options = {}) {
      try {
        const { data } = await http.get(DASHBOARD_API.FETCH_POST.params({ id }), options);
        this.dashboard_post = data;
        return Promise.resolve(data);
      } catch (err) {
        return Promise.reject(err);
      }
    },
  },
});

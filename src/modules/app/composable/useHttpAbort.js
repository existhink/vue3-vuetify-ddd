import { ref } from 'vue';

const useHttpAbort = () => {
  const httpAbort_request = ref({});

  const httpAbort_clearAllRequest = () => {
    if (Object.keys(httpAbort_request.value).length > 0) {
      Object.values(httpAbort_request.value).forEach(controller => {
        if (!controller.signal.aborted) controller.abort();
      });
      httpAbort_request.value = {};
    }
  };

  const httpAbort_clearRequest = id => {
    if (httpAbort_request.value[id]) delete httpAbort_request.value[id];
  };

  const httpAbort_abortRequest = id => {
    const request = httpAbort_request.value[id] ?? null;
    if (request) {
      if (!request.signal.aborted) request.abort();
      httpAbort_clearRequest(id);
    }
  };

  const httpAbort_setAbortController = id => {
    const abortController = new AbortController();
    httpAbort_request.value[id] = abortController;
    return { signal: abortController.signal };
  };

  const httpAbort_registerAbort = id => {
    if (httpAbort_request.value[id]) httpAbort_abortRequest(id);
    return httpAbort_setAbortController(id);
  };

  return {
    httpAbort_abortRequest,
    httpAbort_clearRequest,
    httpAbort_clearAllRequest,
    httpAbort_registerAbort,
    httpAbort_setAbortController,
  };
};

export default useHttpAbort;

import { useLocation, useNavigate, useParams } from "react-router-dom";
import qs from "qs";
import lodash from "lodash";
import { QueryClient } from "@tanstack/react-query";
const useHooks = () => {
  const queryClient = new QueryClient();
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  return { queryClient, params, navigate, location, query, ...lodash };
};

export default useHooks;

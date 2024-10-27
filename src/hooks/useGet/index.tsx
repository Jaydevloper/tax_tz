import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";
import api from "services/api";
import QueryBuilder from "services/queryBuilder";
import { TParams } from "services/types/index.type";

interface IProps {
  name: string;
  url: string;
  onSuccess?: boolean;
  onError?: boolean;
  successMessage?: string;
  errorMessage?: string;
  params?: TParams | undefined;
  queryOptions?: UseQueryOptions<unknown, unknown, unknown>;
}

// eslint-disable-next-line react-refresh/only-export-components
const GetData = async (url: string, params?: TParams) => {
  const response = await api.get(QueryBuilder({ url, params: params || {} }));
  return response.data;
};

const useGet = (props: IProps) => {
  const {
    name,
    url,
    queryOptions,
    params,
    onSuccess = false,
    onError = false,
    successMessage = "",
    errorMessage = "",
  } = props;

  const data = useQuery({
    queryKey: [`${name}`, url],
    queryFn: () => GetData(url, params),
    ...queryOptions,
  });
  const { error, isSuccess, data: success, isError } = data;
  useEffect(() => {
    if (isSuccess && onSuccess) {
      if (successMessage) {
        toast.success(successMessage);
      }
      toast.success((success as { message: string }).message);
    } else if (isError && onError) {
      if (errorMessage) {
        toast.error(errorMessage);
      }
      toast.success((error as { message: string }).message);
    }
  }, [
    isSuccess,
    isError,
    error,
    success,
    onSuccess,
    onError,
    successMessage,
    errorMessage,
  ]);

  return { ...data };
};

export default useGet;

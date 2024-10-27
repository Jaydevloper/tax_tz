import { IQueryProps } from "./queryBuilder.type";

const QueryBuilder = (props: IQueryProps) => {
  const { url, params, extraParams } = props;

  const combinedParams = { ...params, ...extraParams };

  const extraParamsRecord: Record<string, string> = Object.fromEntries(
    Object.entries(extraParams || {}).map(([key, value]) => [
      key,
      String(value),
    ])
  );
  const queryParams = { ...combinedParams, ...extraParamsRecord };

  const queryParamsRecord: Record<string, string> = Object.fromEntries(
    Object.entries(queryParams).map(([key, value]) => [key, String(value)])
  );
  const queryString = new URLSearchParams(queryParamsRecord).toString();

  return url + (queryString ? `?${queryString}` : "");
};

export default QueryBuilder;

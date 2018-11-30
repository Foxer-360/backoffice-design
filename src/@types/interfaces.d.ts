interface QueryData<T> {
  loading: boolean;
  error?: Error;
  data: T;
}

interface LooseObject {
  [key: string]: any
}
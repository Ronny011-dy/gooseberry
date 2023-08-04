type contextProps = {
  type: string;
  data?: string[];
};

const setDYContext = ({ type, data }: contextProps): void => {
  (window as any).DY = (window as any).DY || {};
  (window as any).DY.recommendationContext = data
    ? { type: type, data: data }
    : { type: type };
};

export { setDYContext };

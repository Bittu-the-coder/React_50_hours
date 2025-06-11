import React from "react";

interface WithLoadingProps<P = any> {
  isLoading: boolean;
}

export const withLoading = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return function WithLoadingComponent({
    isLoading,
    ...props
  }: P & WithLoadingProps) {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return <Component {...(props as P)} />;
  };
};

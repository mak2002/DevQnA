import React from "react";

export const GradientLine: React.FC<{ className?: string }> = ({
  className,
}) => {
  return <div className={className || 'h-1 w-full bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-700'} >&nbsp;</div>;
};

import { useRef, useEffect } from "react";

function ValueDisplay({ value }) {
  const prevValueRef = useRef(null);

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return (
    <div>
      <p>Current Value: {value}</p>
      <p>Previous Value: {prevValueRef.current}</p>
    </div>
  );
}

export default ValueDisplay;

import React from "react";

export const WidgetHeader = async ({ city }: { city: string }) => {
  return (
    <p className="panel-heading">
      Weather in <b style={{ textTransform: "capitalize" }}>{city}</b>
    </p>
  );
};

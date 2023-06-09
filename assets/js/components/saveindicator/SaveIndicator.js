import React from "react";
import CircleIndicator from "./CircleIndicator";

export default function SaveIndicator({ saveStatus }) {
  let color;
  let status;
  switch (saveStatus) {
    case "saved":
      color = "green";
      status = "All changes saved";
      break;
    case "saving":
      color = "yellow";
      status = "Saving...";
      break;
    case "error":
      color = "red";
      status = "Error saving";
      break;
    default:
      color = "green";
  }

  return (
    <div className="items-center inline-flex">
      <span className="text-sm select-none text-gray-400">{status}</span>
      <CircleIndicator color={color} />
    </div>
  );
}

import { Server } from "./server";

export const CreateSmalProject = (
  data,
  setCreatingStatus,
  setcreatedStatus
) => {
  fetch(Server + "/create/smallproject", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    setCreatingStatus(false);
    response.status == 200
      ? setcreatedStatus("successfully Created")
      : setcreatedStatus("Faild to Create");
  });
};
export const CreateMegaProject = (
  data,
  setCreatingStatus,
  setcreatedStatus
) => {
  fetch(Server + "/create/megaproject", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    setCreatingStatus(false);
    response.status == 200
      ? setcreatedStatus("successfully Created")
      : setcreatedStatus("Faild to Create");
  });
};

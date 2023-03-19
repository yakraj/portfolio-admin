import { Server } from "./server";

export const CreateSmalProject = (
  data,
  setCreatingStatus,
  setcreatedStatus,
  clearAfterInput
) => {
  fetch(Server + "/create/smallproject", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    setCreatingStatus(false);

    if (response.status == 200) {
      clearAfterInput();
      setcreatedStatus("successfully Created");
    } else {
      setcreatedStatus("Faild to Create");
    }
  });
};
export const CreateMegaProject = (
  data,
  setCreatingStatus,
  setcreatedStatus,
  clearAfterInput
) => {
  fetch(Server + "/create/megaproject", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    setCreatingStatus(false);
    if (response.status == 200) {
      clearAfterInput();
      setcreatedStatus("successfully Created");
    } else {
      setcreatedStatus("Faild to Create");
    }
  });
};

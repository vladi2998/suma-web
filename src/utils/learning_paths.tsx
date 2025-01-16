import axiosConfigInstance from "@/config/axiosCofig";

export const getLearningPathById = async (id: string) => {
  try {
    const request = await axiosConfigInstance.get(`/learning_paths/${id}/`);
    if (request.status === 200) {
      return request.data;
    } else {
      return null;
    }
  } catch (err: any) {
    // console.log('Error al crear la Ruta: ', err.response);
    throw err;
  }
};

export const createLearningPath = async (data: any) => {
  try {
    const request = await axiosConfigInstance.post("/learning_paths/", data);
    if (request.status === 201) {
      return request.data;
    } else {
      return null;
    }
  } catch (err: any) {
    // console.log('Error al crear la Ruta: ', err.response);
    throw err;
  }
};

export const createStep = async (data: any) => {
  try {
    const request = await axiosConfigInstance.post("/steps/", data);
    if (request.status === 201) {
      return request.data;
    }
    throw new Error("Error al crear el capítulo");
  } catch (err: any) {
    console.log("error al crear el capítulo: ", err.response);
    throw err;
  }
};

export const deleteStep = async (id: number) => {
  try {
    const request = await axiosConfigInstance.delete(`/steps/${id}/`);
    if (request.status === 204) {
      return true;
    } else {
      return false;
    }
  } catch (err: any) {
    console.log("error al eliminar el capítulo: ", err.response);
    return false;
  }
};

export const updateLearningPath = async (id: number, data: any) => {
  try {
    const request = await axiosConfigInstance.put(
      `/learning_paths/${id}/`,
      data
    );
    if (request.status === 200) {
      return request.data;
    } else {
      return null;
    }
  } catch (err: any) {
    console.log("Error al actualizar la Ruta: ", err.response);
    throw err;
  }
};

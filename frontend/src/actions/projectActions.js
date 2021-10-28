import axios from 'axios';
import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_DETAILS_FAIL,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
  PROJECT_UPLOAD_IMAGE_REQUEST,
  PROJECT_UPLOAD_IMAGE_SUCCESS,
  PROJECT_UPLOAD_IMAGE_FAIL,
} from '../constants/projectConstants';
import getError from '../utils/getError';

export const listProjects = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PROJECT_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${userInfo.key}`,
      },
    };

    const { data } = await axios.get('/api/v1/review/projects/', config);

    dispatch({
      type: PROJECT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_LIST_FAIL,
      payload: getError(error),
    });
  }
};

export const listProjectDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROJECT_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${userInfo.key}`,
      },
    };

    const { data } = await axios.get(`/api/v1/review/projects/${id}`, config);

    dispatch({
      type: PROJECT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload: getError(error),
    });
  }
};

export const createProject = (project) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROJECT_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${userInfo.key}`,
      },
    };

    const { data } = await axios.post('/api/v1/review/projects/', project, config);

    dispatch({
      type: PROJECT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_CREATE_FAIL,
      payload: getError(error),
    });
  }
};

export const uploadImageProject = (file) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROJECT_UPLOAD_IMAGE_REQUEST });

    const formData = new FormData();
    formData.append('image', file);

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Token ${userInfo.key}`,
      },
    };

    const { data } = await axios.post('/api/v1/cloud/upload/image/', formData, config);

    dispatch({
      type: PROJECT_UPLOAD_IMAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_UPLOAD_IMAGE_FAIL,
      payload: getError(error),
    });
  }
};

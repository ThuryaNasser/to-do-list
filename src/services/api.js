import { forOwn } from "lodash";
import METHODS from "./methods";

// import { getItem, storageKeys } from 'util/localStorage';

const REACT_APP_BASE_URL = "https://jsonplaceholder.typicode.com";

/**
 *
 * @param {string} path
 * @param {object = {
    requireAuth: true,
    method: 'GET',
    data: null,
    pagination: null,
    filterOptions: null,
    searchOptions: null,
  }} options
 * @returns
 */
const api = async (path, options = {}) => {
  const {
    data = options.data || null,
    method = options.method || METHODS.GET,
    // Options
    pagination = options.pagination || null,
    searchOptions = options.searchOptions || null,
    filterOptions = options.filterOptions || null,
  } = options;

  const buildUrl = () => {
    let complexUrl = "";

    complexUrl += REACT_APP_BASE_URL + path;

    if (!path.includes("?") && (pagination || searchOptions || filterOptions)) {
      complexUrl += "?";
    }

    // Search
    if (searchOptions) {
      const searchArray = [];
      forOwn(searchOptions, (value, key) =>
        value ? searchArray.push(`&${key}=${value}`) : null
      );
      complexUrl += searchArray.join("");
    }

    // Filter
    if (filterOptions) {
      const filterArray = [];
      Object.entries(filterOptions).forEach(([key, value], index) => {
        if (value) {
          filterArray.push(`&filters[${index}]=${key},${value}`);
        }
      });
      complexUrl += filterArray.join("");
    }

    // Pagination
    if (pagination) {
      if (pagination.page) {
        complexUrl += `&_page=${pagination.page}`;
      }

      if (pagination.pageSize) {
        complexUrl += `&_per_page=${pagination.pageSize}`;
      }

      if (pagination.limit) {
        complexUrl += `&_limit=${pagination.limit}`;
      }
    }

    // Replace ?& with ?
    complexUrl = complexUrl.replace(/\?&/, "?");

    return complexUrl;
  };

  const config = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...(data && { data: JSON.stringify(data) }),
  };

  return (
    fetch(buildUrl(), config)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      // .then(result => result)
      .catch((error) => {
        throw error;
      })
  );
};

export default api;

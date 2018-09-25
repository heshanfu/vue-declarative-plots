import AbstractSortVars from "./AbstractSortVars";

export default class SortBy {
    /**
     * Create a SortBy object (can be passed to SortOptions component by= prop).
     * @param {string} data The key for the data.
     * @param {object} on A subclass of AbstractSortVars.
     */
    constructor(data, on) {
        this._data = data;
        this._on = on;
        console.assert(this._on instanceof AbstractSortVars);
    }

    /**
     * @returns The key for the data.
     */
    get data() {
        return this._data;
    }

    /**
     * @returns The SortVars instance.
     */
    get on() {
        return this._on;
    }
}
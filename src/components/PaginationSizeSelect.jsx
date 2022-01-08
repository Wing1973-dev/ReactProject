import React from "react";

const PaginationSizeSelect = () => {
    return (
        <div className="pagination-size-select">
            <select name="RegistryScope.Paginator.PageSize" className="pagination-size-select-input">
                <option value="10">
                    10
                </option>
                <option selected="selected" value="20">
                    20
                </option>
                <option value="40">
                    40
                </option>
                <option value="60">
                    60
                </option>
                <option value="100">
                    100
                </option>
            </select>
        </div>
    );
}

export default PaginationSizeSelect;
import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
};

const SearchProvider = ({ children }) => {
    const [globalSearchTerm, setGlobalSearchTerm] = useState("");

    const value = {
        globalSearchTerm,
        setGlobalSearchTerm,
        clearGlobalSearch: () => setGlobalSearchTerm(""),
    };

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;
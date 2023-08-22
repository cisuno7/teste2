

const setItem = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Error saving to localStorage", error);
    }
};

const getItem = (key) => {
    try {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            return JSON.parse(storedValue);
        }
        return null;
    } catch (error) {
        console.error("Error reading from localStorage", error);
        return null;
    }
};

const removeItem = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error("Error removing item from localStorage", error);
    }
};

const clearAll = () => {
    try {
        localStorage.clear();
    } catch (error) {
        console.error("Error clearing localStorage", error);
    }
};

export default {
    setItem,
    getItem,
    removeItem,
    clearAll
};

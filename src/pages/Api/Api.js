import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Fetch all employees
export const fetchEmployees = async () => {
    try {
        const response = await api.get("/employees");
        return response.data;
    } catch (error) {
        console.error("Error fetching employees:", error);
        throw error;
    }
};

// Fetch employees by id
export const fetchEmployeeById = async (employeeId) => {
    try {
        const response = await api.get(`/employees/${employeeId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching employee:", error);
        throw error;
    }
};

// Add a new employee
export const addEmployee = async (employeeData) => {
    try {
        const response = await api.post("/employees", employeeData);
        return response.data;
    } catch (error) {
        console.error("Error adding employee:", error);
        throw error;
    }
};

// Update an employee
export const updateEmployee = async (employeeId, updatedData) => {
    try {
        const response = await api.put(`/employees/${employeeId}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating employee:", error);
        throw error;
    }
};

// Delete an employee
export const deleteEmployee = async (employeeId) => {
    try {
        await api.delete(`/employees/${employeeId}`);
        return employeeId;
    } catch (error) {
        console.error("Error deleting employee:", error);
        throw error;
    }
};

export default api;
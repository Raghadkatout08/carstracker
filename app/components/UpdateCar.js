import { useState } from "react";
import useResource from "../hooks/useResource";
export default function UpdateCar({ car, onClose }) {
    const { updateResource } = useResource();
    const [make, setMake] = useState(car.make);
    const [model, setModel] = useState(car.model);
    const [year, setYear] = useState(car.year);
    const [isUpdating, setIsUpdating] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsUpdating(true);
        try {
            await updateResource(car.id, { make, model, year });
            alert('Car updated successfully');
            onClose(); // Close the update form
        } catch (error) {
            alert('Error updating car');
        } finally {
            setIsUpdating(false);
        }
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-lg max-w-sm w-full">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Update Car</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-1">Make:</label>
                        <input
                            type="text"
                            value={make}
                            onChange={(e) => setMake(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-1">Model:</label>
                        <input
                            type="text"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-1">Year:</label>
                        <input
                            type="number"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={isUpdating}
                            className={`py-2 px-4 rounded-lg font-semibold text-white transition-colors ${isUpdating ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} dark:bg-blue-500 dark:hover:bg-blue-400`}
                        >
                            {isUpdating ? 'Updating...' : 'Update Car'}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="py-2 px-4 rounded-lg bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
import { useState, useContext } from 'react';
import { AuthContext } from '../context/auth';
import useResource from '../hooks/useResource';

export default function AddCarForm() {
    const { createResource } = useResource();
    const { tokens } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: '',
        image: '' // Include image field if needed
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const newCar = {
            ...formData,
            owner: tokens.user_id, // Use owner ID from tokens
        };

        try {
            await createResource(newCar);
            setFormData({ make: '', model: '', year: '', image: '' }); // Reset form
        } catch (err) {
            setError('Failed to add car');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Add a New Car</h2>
            <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Brand:</label>
                <input
                    type="text"
                    name="make"
                    value={formData.make}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Model:</label>
                <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Year:</label>
                <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
            </div>
            <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-yellow-400 text-gray-800 rounded-lg hover:bg-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-400 transition-colors"
            >
                {loading ? 'Adding...' : 'Add Car'}
            </button>
            {error && <p className="mt-4 text-red-600 dark:text-red-400">{error}</p>}
        </form>
    );
}

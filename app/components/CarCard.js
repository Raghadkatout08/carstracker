import React from "react";

export default function CarCard({ car, onUpdate, onDelete }) {
    return (
        <div className="car-card bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-600 rounded-lg shadow-lg p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {car.brand} {car.model}
            </h3>
            <p className="text-gray-800 dark:text-gray-300 mb-3">Year: {car.year}</p>
            <div className="flex space-x-3">
                {onUpdate && (
                    <button
                        onClick={() => onUpdate(car.id)}
                        className="py-2 px-4 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-400 transition-colors"
                    >
                        Edit
                    </button>
                )}
                {onDelete && (
                    <button
                        onClick={() => onDelete(car.id)}
                        className="py-2 px-4 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-400 transition-colors"
                    >
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
}

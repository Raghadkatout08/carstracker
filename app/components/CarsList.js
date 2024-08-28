import { useContext, useState } from "react";
import useResource from "../hooks/useResource";
import CarCard from "./CarCard";
import UpdateCar from "./UpdateCar";
import DeleteCar from "./DeleteCar";

export default function CarsList() {
    const { resource, isLoading, isError, updateResource, deleteResource } = useResource();
    const [editingCar, setEditingCar] = useState(null);
    const [deletingCarId, setDeletingCarId] = useState(null);

    if (isLoading) return <p className="text-center py-4">Loading...</p>;
    if (isError) return <p className="text-center py-4 text-red-500">Failed to load cars.</p>;

    const handleUpdate = (carId) => {
        const carToUpdate = resource.find(car => car.id === carId);
        setEditingCar(carToUpdate);
    };

    const handleDelete = (carId) => {
        setDeletingCarId(carId);
    };

    const closeUpdateForm = () => {
        setEditingCar(null);
    };

    const closeDeleteConfirmation = () => {
        setDeletingCarId(null);
    };

    return (
        <div className="container mx-auto p-4 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">All Cars</h2>
            <div className="cars-list grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {resource?.length > 0 ? (
                    resource.map(car => (
                        <CarCard
                            key={car.id}
                            car={car}
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-700 dark:text-gray-300">No cars available.</p>
                )}
            </div>
            {editingCar && (
                <UpdateCar
                    car={editingCar}
                    onClose={closeUpdateForm}
                    updateResource={updateResource}
                />
            )}
            {deletingCarId && (
                <DeleteCar
                    carId={deletingCarId}
                    onClose={closeDeleteConfirmation}
                    deleteResource={deleteResource}
                />
            )}
        </div>
    );
}

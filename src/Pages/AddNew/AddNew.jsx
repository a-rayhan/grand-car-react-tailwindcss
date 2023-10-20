import Swal from 'sweetalert2'

const AddNew = () => {

    const handleAddCar = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const details = form.details.value;

        console.log(name, brand, type, price, rating, photo, details);

        const newCarItem = { name, brand, type, price, rating, photo, details };
        console.log(newCarItem);

        fetch('https://grand-car-server-7hsb50j7j-abu-rayhans-projects.vercel.app/cardata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCarItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Added succesfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }


    return (
        <div className="max-w-7xl mx-auto px-6 py-28" data-aos="fade-up"
        data-aos-duration="1000">

            <div className="p-5 sm:p-10 xl:p-20 bg-[#f4f4f4] rounded">
                <div className="mb-10">
                    <h1 className="text-[#7a63f1] text-4xl font-semibold mb-4 text-center">
                        Add New Product
                    </h1>
                </div>

                <form onSubmit={handleAddCar}>
                    <div className="grid xl:grid-cols-2 gap-x-5">
                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Name
                                </label>

                                <input type="text" name="name" placeholder="Enter car name" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" required />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Brand Name
                                </label>

                                <input type="text" name="brand" placeholder="Enter car brand" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Type
                                </label>

                                <input type="text" name="type" placeholder="Enter car type" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Price
                                </label>

                                <input type="text" name="price" placeholder="Enter price" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Rating
                                </label>

                                <input type="text" name="rating" placeholder="Enter rating" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Photo
                                </label>

                                <input type="text" name="photo" placeholder="Enter photo URL" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full mx-auto mb-3">
                        <div className="flex flex-col">
                            <label className="px-4 mb-1">
                                Details
                            </label>

                            <input type="text" name="details" placeholder="Enter short description" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-7">
                        <button className="text-xl bg-[#7a63f1] py-4 w-full rounded-xl text-white font-medium">
                            Add car
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddNew;
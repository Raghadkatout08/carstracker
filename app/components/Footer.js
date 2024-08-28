function Footer() {
    return (
        <footer className="bg-gray-700 dark:bg-black text-gray-50 py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                    <a href="#" className="text-yellow-400 hover:text-yellow-300">Privacy Policy</a>
                    <a href="#" className="text-yellow-400 hover:text-yellow-300">Terms of Service</a>
                    <a href="#" className="text-yellow-400 hover:text-yellow-300">Contact Us</a>
                </div>

                <p className="mt-4 md:mt-0">© 2024 Car Tracker. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;
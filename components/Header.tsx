import Link from "next/link"

function Header(){
    return <header className="fixed  divide-y w-full divide-black my-0 bg-yellow-400">
            <div className="flex justify-between py-5 px-14">
                <div className="flex ">
                    <Link href="/">
                        <img className="pl-2 w-40 object-contain cursor-pointer" src="https://lever-client-logos.s3.us-west-2.amazonaws.com/762fd4bd-7d50-4ac3-80d3-bad44702bf87-1604363975963.png" alt="Logo" />
                    </Link>
                </div>
                <div className="flex justify-end space-x-7 mx-4">
                    <div className="hidden md:inline py-2">
                        <h1 className="text-sm cursor-pointer">Our story</h1>
                    </div>

                    <div className="hidden md:inline py-2">
                        <h1 className="text-sm cursor-pointer">Membership</h1>
                    </div>

                    <div className="hidden md:inline py-2">
                        <h1 className="text-sm cursor-pointer">Write</h1>
                    </div>

                    <div className="hidden sm:inline text-sm cursor-pointer py-2">
                        <h1 className="">Sign in</h1>
                    </div>

                    <div className="">
                        <h1 className="text-white cursor-pointer font-family-sohne-Helvetica-Neue-Helvetica-Arial-sans-serif bg-black px-3 py-2 rounded-full">Get started</h1>
                    </div>
                </div>
            </div>
            <div></div>
    </header>
}
export default Header;
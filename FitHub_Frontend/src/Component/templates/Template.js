import Navbar from "../molecules/Navbar";

export default function Template(pageContent) {
    return (
        <div className="wrapper d-flex align-items-stretch">
            <Navbar/>
            {pageContent}
        </div>
    )
}
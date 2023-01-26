import Navbar from "../molecules/Navbar";
import WorkoutData from "../atoms/WorkoutData";

const Workouts = () => {
    return(
        <div className="wrapper d-flex align-items-stretch">
            <Navbar/>
            <WorkoutData/>
        </div>
    )
}

export default Workouts
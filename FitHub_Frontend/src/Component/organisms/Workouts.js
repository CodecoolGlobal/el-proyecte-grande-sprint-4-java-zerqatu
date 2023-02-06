import Navbar from "../molecules/Navbar";
import WorkoutData from "../atoms/WorkoutData";

export default function Workouts() {
    return (
        <div className="wrapper d-flex align-items-stretch">
            <Navbar/>
            <WorkoutData/>
        </div>
    )
}
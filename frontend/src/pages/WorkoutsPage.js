import WorkoutCards from "../components/WorkoutCards";
const WorkoutsPage = () => {
    return (
      <div className="workouts-page">
        <h1>Workout Tutorials</h1>
        <WorkoutCards />  {/* Render the WorkoutCards component */}
      </div>
    );
  };
  
  export default WorkoutsPage;
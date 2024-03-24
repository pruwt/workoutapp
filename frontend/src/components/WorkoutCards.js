import React from "react";

const workouts = [
  {
    title: "Push-ups",
    description: "A classic bodyweight exercise that strengthens your chest, shoulders, triceps, and core.",
    link: "https://youtu.be/bt5b9x9N0KU?si=ovoIauwWMAQwO7I_",
    image: "https://www.byrdie.com/thmb/9jZAeJYmkBye_wiJ8EazB4as1QQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pushupbenefits-32557b4adf114b88b36d74e48f853ed0.jpg", // Replace with your image
  },
  {
    title: "Squats",
    description: "A lower body exercise that works your quads, glutes, hamstrings, and core.",
    link: "https://youtu.be/YaXPRqUwItQ?si=wx0uAF2MiLn1GuiN",
    image: "https://img.livestrong.com/640/cme-data/getty%2F1f7f06a0f80a41aa98711b2c0d2f33e5.jpg", // Replace with your image
  },
  {
    title: "Lunges",
    description: "A unilateral exercise that improves leg strength, balance, and coordination.",
    link: "https://youtu.be/wrwwXE_x-pQ?si=pG3Qyc_T23vpjbzC",
    image:"https://img.livestrong.com/375/cme-data/getty%2F59bb8dacabd94fd4b51e4414c70d5560.jpg", // Replace with your image
  },
  {
    title: "Bench Press",
    description: "A compound exercise that strengthens your chest, shoulders, and triceps. It's a foundational upper-body exercise for building strength and muscle mass.",
    link: "https://youtu.be/gRVjAtPip0Y?si=QqMukTS6qShsHYvI", // Replace with a high-quality video tutorial
    image:"https://www.dmarge.com/wp-content/uploads/2022/01/how-to-bench-press-1200x800.jpg", // Replace with an image showcasing the exercise
  },
  {
    title: "Bicep Curls",
    description: "An isolation exercise that primarily targets the biceps brachii muscles in your upper arms. It helps develop arm size and definition.",
    link: "https://youtu.be/ykJmrZ5v0Oo?si=G9JOZcOJTY4vLXBV", // Replace with a high-quality video tutorial
    image: "https://experiencelife.lifetime.life/wp-content/uploads/2021/08/f2-biceps-curl.jpg", // Replace with an image showcasing the exercise
  },
  {
    title: "Romanian Deadlifts",
    description: "A variation of the deadlift that focuses on your hamstrings and glutes. It helps improve lower body strength and posture.",
    link: "https://youtu.be/hQgFixeXdZo?si=3ZW5-xTOESuTe3aS", // Replace with a high-quality video tutorial
    image: "https://www.health.com/thmb/MR-uxMPifPBLrE7eHmeNG0H4aYM=/6720x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1289416192-7912fa9e7e3b44c79d86492d5b0ea5cf.jpg",
  },
    {
    title: "Leg Press",
    description: "A compound exercise that strengthens your quadriceps, hamstrings, and glutes. It's a machine-based exercise that allows you to isolate your lower body muscles and progressively overload them for building leg strength and muscle mass.",
    link: "https://youtu.be/8EMbB0tCn7Q?si=j2JxV4-4MgEYWwh5", // Replace with a high-quality video tutorial
    image: "https://media.istockphoto.com/id/1322650754/photo/leg-press-exercise.jpg?s=612x612&w=0&k=20&c=C04ctWxhNZ-AJ831ro8NIcdd5c_9Lr6cE0NX-89T9MQ=", // Replace with an image showcasing the exercise
  },
  {
    title: "Bent-Over Row",
    description: "A compound exercise that strengthens your upper back muscles, primarily your latissimus dorsi (lats), along with your rhomboids and traps. It's a foundational exercise for building back strength, improving posture, and aiding in pulling movements.",
    link: "https://youtu.be/knB5Q4FN4ck?si=H6iZzuqVhUnrW5mI", // Replace with a high-quality video tutorial
    image: "https://hips.hearstapps.com/hmg-prod/images/joshua-simpson-kettlebell-vs-dumbbell-kb-bent-over-alternating-row-219-1636665510.jpg?crop=0.731xw:0.530xh;0.122xw,0.353xh&resize=1200:*", // Replace with an image showcasing the exercise
  },
  // Add more workouts here
];

const WorkoutCard = ({ title, description, link, image }) => {
  return (
    <div className="workout-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="workout-card-image" />
        <div className="workout-card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
};

const WorkoutCards = () => {
  return (
    <div className="workout-cards-container">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.title} {...workout} />
      ))}
    </div>
  );
};

export default WorkoutCards;

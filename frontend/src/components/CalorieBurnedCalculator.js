import React, { useState } from 'react';
import { Chart, registerables } from 'chart.js'
import { Bar } from 'react-chartjs-2';

const activityLevels = {
  'Sedentary': 1.2,
  'Lightly active': 1.375,
  'Moderately active': 1.55,
  'Very active': 1.725,
  'Extremely active': 1.9,
};


const calculateCaloriesBurned = (weight, duration, activityLevel, reps) => {
  
  const MET = 8; // Metabolic Equivalent of the activity (adjust based on exercise)
  const totalMinutes = duration / 60;
  return (MET * weight * totalMinutes * activityLevel) + (reps * 0.05); // Add a calorie burn for reps
};

const CalorieBurnedCalculator = () => {
  const [weight, setWeight] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activityLevel, setActivityLevel] = useState('Sedentary');
  const [reps, setReps] = useState(0);
  const [exerciseType, setExerciseType] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const burnedCalories = calculateCaloriesBurned(weight, duration, activityLevels[activityLevel], reps);
    setCaloriesBurned(burnedCalories.toFixed(2));
  };
  const activityLevelData = [
    { label: 'Sedentary', calorieBurn: calculateCaloriesBurned(70, 30, activityLevels['Sedentary'], 10) }, // Replace with your calculation
    { label: 'Lightly active', calorieBurn: calculateCaloriesBurned(70, 30, activityLevels['Lightly active'], 10) }, // Replace with your calculation
    { label: 'Moderately active', calorieBurn: calculateCaloriesBurned(70, 30, activityLevels['Moderately active'], 10) }, // Replace with your calculation
    { label: 'Very active', calorieBurn: calculateCaloriesBurned(70, 30, activityLevels['Very active'], 10) }, // Replace with your calculation
    { label: 'Extremely active', calorieBurn: calculateCaloriesBurned(70, 30, activityLevels['Extremely active'], 10) }, // Replace with your calculation
  ];

  Chart.register(...registerables)
  
const chartData = {
    labels: activityLevelData.map((data) => data.label),
    datasets: [
      {
        label: 'Calories Burned',
        data: activityLevelData.map((data) => data.calorieBurn),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };



  
  return (
    <div className="calorie-calculator">
      <h2>Calorie Burned Calculator</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
  <label htmlFor="exerciseType">Exercise Type:</label>
  <input
    type="text"
    id="exerciseType"
    value={exerciseType}
    onChange={(e) => setExerciseType(e.target.value)}
  />
</div>

        <div className="form-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (minutes):</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="activityLevel">Activity Level:</label>
          <select id="activityLevel" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            {Object.keys(activityLevels).map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="reps">Reps (optional):</label>
          <input
            type="number"
            id="reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {caloriesBurned > 0 && (
        <p>You burned approximately {caloriesBurned} calories.</p>
      )}
      <div className="chart-container">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default CalorieBurnedCalculator;

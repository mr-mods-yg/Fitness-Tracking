// Sample data
const activityData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Activity (minutes)',
        data: [30, 45, 60, 30, 45, 90, 60],
        backgroundColor: 'rgba(100, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

const nutritionData = {
    labels: ['Carbs', 'Protein', 'Fat'],
    datasets: [{
        label: 'Macronutrients (grams)',
        data: [200, 150, 75],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
    }]
};

const sleepData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Sleep (hours)',
        data: [7, 6.5, 8, 7.5, 6, 9, 8],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
    }]
};

// Create charts
const activityChart = new Chart(document.getElementById('activityChart'), {
    type: 'bar',
    data: activityData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const nutritionChart = new Chart(document.getElementById('nutritionChart'), {
    type: 'pie',
    data: nutritionData
});

const sleepChart = new Chart(document.getElementById('sleepChart'), {
    type: 'line',
    data: sleepData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Quick log form submission
document.getElementById('quickLogForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const logType = document.getElementById('logType').value;
    const logValue = document.getElementById('logValue').value;
    
    // Here you would typically send this data to a server
    console.log(`Logged ${logType}: ${logValue}`);
    
    // For demonstration, we'll update the charts with the new data
    if (logType === 'activity') {
        activityData.datasets[0].data.push(parseInt(logValue));
        activityData.labels.push('New');
        activityChart.update();
    } else if (logType === 'nutrition(Carbs)') {
        nutritionData.datasets[0].data[0] += parseInt(logValue);
        nutritionChart.update();
    } else if (logType === 'nutrition(Protein)') {
        nutritionData.datasets[0].data[1] += parseInt(logValue);
        nutritionChart.update();
    } else if (logType === 'nutrition(Fat)') {
        nutritionData.datasets[0].data[2] += parseInt(logValue);
        nutritionChart.update();    
    } else if (logType === 'sleep') {
        sleepData.datasets[0].data.push(parseFloat(logValue));
        sleepData.labels.push('New');
        sleepChart.update();
    }

    // Clear the input
    document.getElementById('logValue').value = '';
});

document.getElementById('goalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const goalDescription = document.getElementById('goalDescription').value;
    
    if(goalDescription!=""){
    // Add the goal to the list
    const goalsList = document.getElementById('goalsList');
    const newGoal = `<li>${goalDescription}</li>`;
    goalsList.insertAdjacentHTML('beforeend', newGoal);
    }
    // Clear the input field
    document.getElementById('goalDescription').value = '';
});

let totalCalories = 0;

document.getElementById('nutritionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const foodItem = document.getElementById('foodItem').value;
    const calories = parseInt(document.getElementById('calories').value);

    // Update total calories
    totalCalories += calories;
    document.getElementById('totalCalories').textContent = totalCalories;

    // Add the food item to the list
    const nutritionList = document.getElementById('nutritionList');
    const newEntry = `<li>${foodItem}: ${calories} calories</li>`;
    nutritionList.insertAdjacentHTML('beforeend', newEntry);

    // Clear input fields
    document.getElementById('foodItem').value = '';
    document.getElementById('calories').value = '';
});


document.getElementById('workoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const exerciseName = document.getElementById('exerciseName').value;
    const duration = document.getElementById('duration').value;
    const reps = document.getElementById('reps').value;

    const workoutList = document.getElementById('workoutList');

    const listItem = document.createElement('li');
    listItem.textContent = `${exerciseName} - ${duration} minutes, ${reps} reps`;
    workoutList.appendChild(listItem);

    // Clear the form
    this.reset();
});


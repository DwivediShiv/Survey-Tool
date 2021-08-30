Description: Basic Survey tool app has been created. Aggregated results can be seen as pie charts.

Steps to taken:
1.Click on go to survey.
2. Enter Basic details.
3. Answer the survey questions.
4. Survey Result will show the aggregated pie chart.
5. Individual result can be seen by clicking on Individual results link on navigation bar.

Screenshots:
App working screenshots are also pasted in "Screenshots" folder.

Database:
3 collections has been created for this. Below is the test data for all:

(I) questions -> survey questions will come from here.
{
    "ques": "Where do you want to spend your vacation?",
    "option1": "Maldives",
    "option2": "Italy",
    "option3": "Spain",
    "option4": "Australia",
    "type": "Country"
}

{
    "ques": "Which of these would you prefer to buy?",
    "option1": "Tata",
    "option2": "Toyota",
    "option3": "Maruti",
    "option4": "Honda",
    "type": "Car"
}

{
    "ques": "Which one of these tv-series would you prefer to watch?",
    "option1": "Game of Thrones",
    "option2": "Friends",
    "option3": "Breaking Bad",
    "option4": "Money Heist",
    "type": "TvSeries"
}

{
    "ques": "Which one of these movies would you prefer to watch?",
    "option1": "The Lord of the Rings",
    "option2": "The Godfather",
    "option3": "The Shawshank Redemption",
    "option4": "Mission Impossible",
    "type": "Movie"
}

{
    "ques": "Which one of these would you prefer to eat?",
    "option1": "Burger",
    "option2": "Pizza",
    "option3": "Biryani",
    "option4": "Dosa",
    "type": "Dish"
}

(II) surveys -> user basic details will be stored here.
(III) surveyresults -> pie chart and aggregated result will come from here.
{
    "type": "Car",
    "option1": {
        "name": "Tata",
        "value": 0
    },
    "option2": {
        "name": "Toyota",
        "value": 0
    },
    "option3": {
        "name": "Maruti",
        "value": 0
    },
    "option4": {
        "name": "Honda",
        "value": 0
    }
}

{
    "type": "Country",
    "option1": {
        "name": "Maldives",
        "value": 0
    },
    "option2": {
        "name": "Italy",
        "value": 0
    },
    "option3": {
        "name": "Spain",
        "value": 0
    },
    "option4": {
        "name": "Australia",
        "value": 0
    }
}

{
    "type": "Dish",
    "option1": {
        "name": "Burger",
        "value": 0
    },
    "option2": {
        "name": "Pizza",
        "value": 0
    },
    "option3": {
        "name": "Biryani",
        "value": 0
    },
    "option4": {
        "name": "Dosa",
        "value": 0
    }
}

{
    "type": "Movie",
    "option1": {
        "name": "The Lord of the Rings",
        "value": 0
    },
    "option2": {
        "name": "The Godfather",
        "value": 0
    },
    "option3": {
        "name": "The Shawshank Redemption",
        "value": 0
    },
    "option4": {
        "name": "Mission Impossible",
        "value": 0
    }
}

{
    "type": "TvSeries",
    "option1": {
        "name": "Game of Thrones",
        "value": 0
    },
    "option2": {
        "name": "Friends",
        "value": 0
    },
    "option3": {
        "name": "Breaking Bad",
        "value": 0
    },
    "option4": {
        "name": "Money Heist",
        "value": 0
    }
}



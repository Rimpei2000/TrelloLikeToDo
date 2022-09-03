import { v4 as uuidv4 } from "uuid";

dummyData = [
    {
        id: uuidv4(),
        title: "Todo",
        tasks:[
            {
                id: uuidv4(),
                title: "Study",
            },
            {
                id: uuidv4(),
                title: "Sleep",
            },
            {
                id: uuidv4(),
                title: "YouTube",
            },
        ]
    },
    {
        id: uuidv4(),
        title: "Currently working on",
        tasks: [
            {
                id: uuidv4(),
                title: "StudyCurrently",
            },
            {
                id: uuidv4(),
                title: "SleepCurrently",
            },
            {
                id: uuidv4(),
                title: "YouTubeCurrently",
            },
        ]
    },
    {
        id: uuidv4(),
        title: "Completed",
        tasks: [
            {
                id: uuidv4(),
                title: "StudyCompleted",
            },
            {
                id: uuidv4(),
                title: "SleepCompleted",
            },
            {
                id: uuidv4(),
                title: "YouTubeCompleted",
            },
        ]
    }
];

export default dummyData;
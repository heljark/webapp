import { quiz } from "./questionsData";

//funtcion for testing if quiz har property questions
export const checkIfquestionsKeyExists = (
    questionList: any,
    property: any,
) => {
    return questionList.hasOwnProperty(property)
}

//function to cheking if questions is an array
export const checkIfQuestIsArray = (
    questionsList: any,
    property: string,
) => {
    return Array.isArray(questionsList[property])
}

//function to testing that there is 4 questions tot
export const checkIfThereIs4QuestionsTot = (questionsList: any) => {
    return questionsList.questions.length
}

//function for checking if questions array has the properties: title, answers and helper
export const CheckIfQuestHasProperties = (
    questionsList: any,
    title: string,
    answers: string,
    helper: string
) => {
    let titleCount = 0
    let answersCount = 0
    let helperCount = 0
    for (let i = 0; i < quiz.questions.length; i++){
        if (Object.hasOwn(questionsList.questions[i], title)) titleCount++
        if (Object.hasOwn(questionsList.questions[i], answers)) answersCount++
        if (Object.hasOwn(questionsList.questions[i], helper)) helperCount++
    }
    return [titleCount, answersCount, helperCount]
}

//function for checking if all 4 answers hav 4 alternatives
export const checkIfAll4AnswersHas4Alternatives = (questinsList: any) => {
    let numberOfAnswersAlt = 0
    for (let i = 0; i < quiz.questions.length; i++){
        if(Array.isArray(quiz.questions[i].answers)){
            if(quiz.questions[i].answers.length === 4){
                numberOfAnswersAlt++;
            }
        }
    }
    return numberOfAnswersAlt;
}
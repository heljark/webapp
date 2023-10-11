import { quiz } from "./questionsData";
import { checkIfAll4AnswersHas4Alternatives, checkIfQuestIsArray, checkIfThereIs4QuestionsTot, checkIfquestionsKeyExists, CheckIfQuestHasProperties } from "./quizFun";
import {it, expect, describe} from "vitest"

//describe block that has series of test for questions
describe("questions tests", () => {
    
    //standard test for checking if block is working
    it("should work", () => {
        expect(true).toBe(true)
    });

    // test to checking if proberty questions exist in quiz
    it("should return true if property questions exist", () => {
        expect(checkIfquestionsKeyExists(quiz, "questions").toBe(true));
    })

    //test to checking if property questions is an array
    it("should return true if property is an array", () => {
        expect(checkIfQuestIsArray(quiz, "questions")).toBe(true);
    })

    //test to see if questions array has properties: title, answers and helper, 4 of each
    it("should return [4,4,4] if 3 properties ecist in questions array", () => {
        expect(CheckIfQuestHasProperties(quiz,"title", "answers", "helper")).toStrictEqual([4,4,4]);
    })

    //test to check if all 4 answers have 4 alt each
    it("should return 4 if all answers have 4 alt", () => {
        expect(checkIfAll4AnswersHas4Alternatives(quiz)).toBe(4);
    })
})



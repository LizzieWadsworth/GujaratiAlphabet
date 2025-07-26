# Gujarati alphabet numbers quiz

This is a online quiz app to help you learn how to read in Gujarati. Based on effectiveness of Duolingo for alphabet learning (e.g. for Japanese) while Gujarati is currently not available on the app. 

View the quiz at: https://lizziewadsworth.github.io/GujaratiAlphabet/ 

Should work on any device browser, designed for nice spacing on an iPhone or Google Pixel screen. 

## Code sources

Adapted from this simple MCQ: Link: https://bijanstha7.github.io/Simple-MCQ-Quiz-Website/

Starry night background from this tutorial: https://dev.to/sobhandash/lets-build-a-night-sky-using-pure-scss-2g0n 

Button design from: https://medium.com/@lilskyjuicebytes/clone-the-ui-1-replicating-duolingos-button-in-pure-css-bd37a97edb7e 

## Pronounciation sources

Vowel pronounciation sounds from: http://www.letslearngujarati.com/vowels 

Barakhadi pronounciations clipped from Pebbles Gujarati youtube videos: https://youtu.be/qmw4EvH5ikY?si=4AsMUVwx5fsOoHJk  

Duolingo correct and incorrect sounds from: https://www.myinstants.com/en/instant/duolingo-correct-95922/ 

## File types 

The data is stored in a csv file Gujarati_letters.csv, which can be converted into questions in a javascript array using the python script generate_question.py. 

Each quiz has a set of pre-generated questions and wrong answers in a javascript array - eg. quizArray_level1 in the file questions_level1.js 

Each html page has a separate javascript file to load the correct arrays and quizzes. 

I'm a biologist not a professional programmer so open to suggestions! 
import random

with open("Gujarati_letters.csv") as f:
  lines = f.readlines()

all_letters_dict = {} 
level1 = []
level2 = []
level3 = []
level4 = []
level5 = []
level6 = []
level7 = []
level8 = []
level9 = []

for line in lines[1:]:
  guj, hind, eng, lev, aud = line.strip().split(",")
  lev = int(lev)
  all_letters_dict[guj] = [hind, eng, lev, aud]
  if lev == 1:
    level1.append(guj)
  elif lev == 2:
    level2.append(guj)
  elif lev == 3:
    level3.append(guj)
  elif lev == 4:
    level4.append(guj)
  elif lev == 5:
    level5.append(guj)
  elif lev == 6:
    level6.append(guj)
  elif lev == 7:
    level7.append(guj)
  elif lev == 8:
    level8.append(guj)
  elif lev == 9:
    level9.append(guj)

print(level1)

def create_questions(level_list, quizarrayname, newfilename):
  #for letter in level_list:
    #print(letter, all_letters_dict[letter][1])
  with open(newfilename, "w") as nf:
    nf.write("const {} = [\n".format(quizarrayname)) # start the file
    id = 0
    # number of repeats of every letter
    for number in range(100):
        # create a question for every letter 
        for number in range(len(level_list)):
            my_choice = level_list[number] # the letter for the quiz
            correct_answer = all_letters_dict[my_choice][1]
            options = [correct_answer]
            audio = all_letters_dict[my_choice][3]
            while len(options) < 4:
                wrong_answer = random.choice(level_list)
                if all_letters_dict[wrong_answer][1] not in options:
                    options.append(all_letters_dict[wrong_answer][1])
            nf.write("  {\n")
            nf.write('    id: "{}",\n'.format(id))
            nf.write('    question: "{}",\n'.format(my_choice))
            nf.write('    options: {},\n'.format(options))
            nf.write('    correct: "{}",\n'.format(correct_answer))
            nf.write('    audio_url: "./letter_pronounciations/{}.mp3",\n'.format(audio))
            nf.write("  },\n")
            id += 1
    nf.write("];\n") # end the file

# vowels quizzes
create_questions(level1, "quizArray_level1", "questions_level1.js")
create_questions(['અ','આ','ઇ','ઈ','એ'], "quizArray_level1a", "questions_level1a.js")
create_questions(['ઉ','ઊ','ઐ','ઔ','ઓ'], "quizArray_level1b", "questions_level1b.js")

# consonant quizzes
create_questions(level2, "quizArray_level2", "questions_level2.js")
create_questions(level3, "quizArray_level3", "questions_level3.js")
create_questions(level4, "quizArray_level4", "questions_level4.js")
create_questions(level5, "quizArray_level5", "questions_level5.js")
create_questions(level6, "quizArray_level6", "questions_level6.js")
create_questions(level7, "quizArray_level7", "questions_level7.js")
#create_questions(level8, "quizArray_level8", "questions_level8.js")

# numbers quiz
create_questions(level9, "quizArray_level9", "questions_level9.js")

# make groups for all consonants, all letters
create_questions(list(all_letters_dict.keys()), "quizArray_level10", "questions_level10.js")
create_questions(level2+level3+level4, "quizArray_levels2to4", "questions_level2to4.js")
create_questions(level5+level6+level7, "quizArray_levels5to7", "questions_level5to7.js")
create_questions(level2+level3+level4+level5+level6+level7, "quizArray_levels2to7", "questions_level2to7.js")

print("All levels are created")


  
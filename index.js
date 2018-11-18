'use strict'


/* ---------------------------
        R E Q U I R E
----------------------------*/ 

const colors = require('colors');
const program = require('commander');
const inquirer = require('inquirer');
const fs = require('fs');
const date = require('date-and-time');

 


/* ---------------------------
          S T Y L E
----------------------------*/

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });
  



/* ---------------------------
      V A R I A B L E S
----------------------------*/

let points = 0;



/* ------------------------------------------
    T H E M E : P R O G R A M M A T I O N
---------------------------------------------*/

let prog_q1 = '1/ Avec quel langage utilise-t-on "echo" ?'
let prog_1 = "JavaScript";
let prog_2 = "Python";
let prog_3 = "PHP";

let prog_q2 ="2/ Avec quoi peut-on créer une instance d'un nouvel objet ?";
let prog_1b = "add";
let prog_2b = "new";
let prog_3b = "this";

let prog_q3 = "3/ Quel note mérite ce script ?";
let prog_1c = "16";
let prog_2c = "13";
let prog_3c = "11";

let prog_q4 = "4/ En PHP, comment trier un tableau ?";
let prog_1d = "asc()";
let prog_2d = "sort()";
let prog_3d = "ascending()";

let prog_q5 = "5/ Comment s’appelle l'opération de liaison de données permettent d'interroger plusieurs tables à la fois ?";
let prog_1e = "Jonction";
let prog_2e = "Jointure";
let prog_3e = "Juxtaposition";



/* ------------------------------------------
       T H E M E : J E U X  V I D E O S
---------------------------------------------*/

let jv_q1 = '1/ Quel jeu met en scène les deux camps : Terroristes et Anti-Terroristes ?';
let jv_1 = "Call of duty";
let jv_2 = "Counter Strike";
let jv_3 = "Fortnite";

let jv_q2 = '2/ Dans quel jeu pouvez-vous incarnez Chains, ou même Hoxton ?';
let jv_1b = "Payday";
let jv_2b = "Wakfu";
let jv_3b = "Dead by Daylight";

let jv_q3 = "3/ Quel jeu, très arcade, s'est inspiré du mode de jeu Battle Royale d'Arma, avant de disparaitre face au géant Fortnite";
let jv_1c = "Battlerite Royale";
let jv_2c = "Pubg";
let jv_3c = "H1Z1";

let jv_q4 = "4/ Sur CS GO, quelle est la phrase préférée des russes ?";
let jv_1d = "Suka Blyat";
let jv_2d = "Eco";
let jv_3d = "Rush B";

let jv_q5 = "5/ Sur CS GO, combien coûte une AWP + full kevlar + kit + incendiaire ?";
let jv_1e = "4750";
let jv_2e = "6750";
let jv_3e = "7550";




/* ------------------------------------------
        T H E M E : M U S I Q U E
---------------------------------------------*/

let m_q1 = '1/ Qui a écrit Rock with you ?';
let m_1 = "Michael Jackson";
let m_2 = "Prop Dylan";
let m_3 = "Beyonce";

let m_q2 = '2/ Que veut dire rap ?';
let m_1b = 'Race against police';
let m_2b = 'Rhythm and poetry';
let m_3b = 'Raise and pass';

let m_q3 = "3/ Quel groupe a sorti l'album : Random Access Memory ?";
let m_1c = "Black eyed peas";
let m_2c = "Daft punk";
let m_3c = "Pendulum";

let m_q4 = "4/ Quel groupe a cartonné en sortant son titre Let's Bang ?";
let m_1d = "Shaka Ponk";
let m_2d = "Tokyo Hotel";
let m_3d = "Pink Floyd";

let m_q5 = "5/ Quel DJ a énormément prit en popularité ces dernières années ?";
let m_1e = "LFZ";
let m_2e = "Marshmello";
let m_3e = "Goyn";






/* ---------------------------
      C O M M A N D E R
----------------------------*/

program
  .version('0.1.0')
  .option('-p, --programmation', 'Thème : Programmation')
  .option('-j --jeux_videos', 'Thème : Jeux Vidéos')
  .option('-m, --musique', 'Thème : Musique')
  .parse(process.argv);
 

  
/* ---------------------------
    C H O I X  T H E M E
----------------------------*/

try {
    if (program.programmation) { 
        console.log('Vous avez choisi le thème:'.info);
        console.log('> Programmation'.cyan);
        console.log('----------');
    }
    else if (program.jeux_videos) {
        console.log('Vous avez choisi le thème:'.info);
        console.log('> Jeux_videos'.cyan);
        console.log('----------');
    }
    else if (program.musique) {
        console.log('Vous avez choisi le thème:'.info);
        console.log('> Musique'.cyan);
        console.log('----------');
    }
    else {
        console.log('\n Vous devez choisir un thème. Consulter index.js -h (--help) pour plus d\'informations \n'.error);
        process.exit();
    }
}
catch(error) {
    console.error('Une erreur est survenue.'.error);
    process.exit();
}

/* ---------------------------
      F O N C T I O N S
----------------------------*/

function retry() {
    points = 0;
    inquirer.prompt([{
        name: 'retry',
        type: 'list',
        message: 'Voulez-vous retenter votre chance ?',
        choices: ['Oui', 'Non'],
        default: 1,
      }]).then((answers) => {
            if(answers.retry == 'Oui') {
                main();
            }
            else if(answers.retry == 'Non') {
                console.log('Bye !');
                process.exit();
            }
            else {
                process.exit();
            }
        
      });
}


function endGame() {
    if (points == 5) {
        console.log('----------');
        console.log(`Parfait ! Votre score est de ${points}/5.`.verbose);
        console.log('----------');
    }

    else if (points > 2 && points <= 4) {
        console.log('----------');
        console.log(`Pas mal ! Votre score est de ${points}/5.`.warn);
        console.log('----------');
    }

    else if (points <= 2) {
        console.log('----------');
        console.log(`Pas ouf du tout ça... Votre score est de ${points}/5.`.error);
        console.log('----------');
    }
    // On écrit le score + date à laquelle il a été réalisé dans un fichier txt 
    let now = new Date();
    fs.writeFile("score.txt", "Le " + date.format(now, 'YYYY/MM/DD HH:mm:ss') + " une partie a été jouée et le score était de : " + points , function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("\n \n Votre score a été sauvegardé dans le fichier score.txt");
    });    
}


/* ---------------------------
    P R O G R A M M E
----------------------------*/
const main = async () => {
    await question1()
    await question2()
    await question3()
    await question4()
    await question5()
    await endGame();
    await retry();
  }







/* ---------------------------
      Q U E S T I O N / 1
----------------------------*/

    const question1 = () => {
        return new Promise((resolve, reject) => {
            
            // Selon le thème, on affiche les questions correspondantes
            if (program.programmation) {
                    inquirer.prompt([{
                        name: 'questions',
                        type: 'list',
                        message: `${prog_q1}`,
                        choices: [`${prog_1}`, `${prog_2}`, `${prog_3}`],
                        default: 1,
                    }]).then((answers) => {
                            if(answers.questions == prog_3) {
                                points++
                                console.log(`Vous avez trouvé la bonne réponse. Votre nombre de point est de ${points} \n`.info);
                            }
                            else if(answers.questions == prog_1 || answers.questions == prog_2) {
                                console.log(`Vous vous êtes trompé. Votre nombre de point est de ${points} \n`.error)
                            }
                            else {
                                console.log(`Faites un effort. Votre réponse ne figure pas dans les choix proposés. Votre nombre de point est de ${points} \n`.error)
                            }
                            resolve()
                        
                    });
            }

            if (program.jeux_videos) {
                inquirer.prompt([{
                    name: 'questions',
                    type: 'list',
                    message: `${jv_q1}`,
                    choices: [`${jv_1}`, `${jv_2}`, `${jv_3}`],
                    default: 1,
                }]).then((answers) => {
                        if(answers.questions == jv_2) {
                            points++
                            console.log(`Vous avez trouvé la bonne réponse. Votre nombre de point est de ${points} \n`.info);
                        }
                        else if(answers.questions == jv_1 || answers.questions == jv_3) {
                            console.log(`Vous vous êtes trompé. Votre nombre de point est de ${points} \n`.error)
                        }
                        else {
                            console.log(`Faites un effort. Votre réponse ne figure pas dans les choix proposés. Votre nombre de point est de ${points} \n`.error)
                        }
                        resolve()
                    
                    });
            }

            if (program.musique) {
                inquirer.prompt([{
                    name: 'questions',
                    type: 'list',
                    message: `${m_q1}`,
                    choices: [`${m_1}`, `${m_2}`, `${m_3}`],
                    default: 1,
                }]).then((answers) => {
                        if(answers.questions == m_1) {
                            points++
                            console.log(`Vous avez trouvé la bonne réponse. Votre nombre de point est de ${points} \n`.info);
                        }
                        else if(answers.questions == m_2 || answers.questions == m_3) {
                            console.log(`Vous vous êtes trompé. Votre nombre de point est de ${points} \n`.error)
                        }
                        else {
                            console.log(`Faites un effort. Votre réponse ne figure pas dans les choix proposés. Votre nombre de point est de ${points} \n`.error)
                        }
                        resolve()
                    
                    });
            }
        })
    }

   
  


/* ---------------------------
      Q U E S T I O N / 2
----------------------------*/

const question2 = () => {
    return new Promise((resolve, reject) => {

        if (program.programmation) {
                inquirer.prompt([{
                    name: 'questions',
                    type: 'list',
                    message: `${prog_q2}`,
                    choices: [`${prog_1b}`, `${prog_2b}`, `${prog_3b}`],
                    default: 1,
                }]).then((answers) => {
                        if(answers.questions == prog_2b) {
                            points++
                            console.log(`Vous avez trouvé la bonne réponse. Votre nombre de point est de ${points} \n`.info);
                        }
                        else if(answers.questions == prog_1b || answers.questions == prog_3b) {
                            console.log(`Vous vous êtes trompé. Votre nombre de point est de ${points} \n`.error)
                        }
                        else {
                            console.log(`Faites un effort. Votre réponse ne figure pas dans les choix proposés. Votre nombre de point est de ${points} \n`.error)
                        }
                        resolve()
                    
                });
        }

        if (program.jeux_videos) {
            inquirer.prompt([{
                name: 'questions',
                type: 'list',
                message: `${jv_q2}`,
                choices: [`${jv_1b}`, `${jv_2b}`, `${jv_3b}`],
                default: 1,
            }]).then((answers) => {
                    if(answers.questions == jv_1b) {
                        points++
                        console.log(`Vous avez trouvé la bonne réponse. Votre nombre de point est de ${points} \n`.info);
                    }
                    else if(answers.questions == jv_2b || answers.questions == jv_3b) {
                        console.log(`Vous vous êtes trompé. Votre nombre de point est de ${points} \n`.error)
                    }
                    else {
                        console.log(`Faites un effort. Votre réponse ne figure pas dans les choix proposés. Votre nombre de point est de ${points} \n`.error)
                    }
                    resolve()
                
                });
        }

        if (program.musique) {
            inquirer.prompt([{
                name: 'questions',
                type: 'list',
                message: `${m_q2}`,
                choices: [`${m_1b}`, `${m_2b}`, `${m_3b}`],
                default: 1,
            }]).then((answers) => {
                    if(answers.questions == m_2b) {
                        points++
                        console.log(`Vous avez trouvé la bonne réponse. Votre nombre de point est de ${points} \n`.info);
                    }
                    else if(answers.questions == m_1b || answers.questions == m_3b) {
                        console.log(`Vous vous êtes trompé. Votre nombre de point est de ${points} \n`.error)
                    }
                    else {
                        console.log(`Faites un effort. Votre réponse ne figure pas dans les choix proposés. Votre nombre de point est de ${points} \n`.error)
                    }
                    resolve()
                
                });
        }
    })
}

   







/* ---------------------------
      Q U E S T I O N / 3
----------------------------*/

const question3 = () => {
    return new Promise((resolve, reject) => {

        if (program.programmation) {
                inquirer.prompt([{
                    name: 'questions',
                    type: 'list',
                    message: `${prog_q3}`,
                    choices: [`${prog_1c}`, `${prog_2c}`, `${prog_3c}`],
                    default: 1,
                }]).then((answers) => {
                        if(answers.questions == prog_1c) {
                            points++
                            console.log(`Vous avez trouvé la bonne réponse. Votre nombre de point est de ${points} \n`.info);
                        }
                        else if(answers.questions == prog_2c || answers.questions == prog_3c) {
                            console.log(`Vous vous êtes trompé. Votre nombre de point est de ${points} \n`.error)
                        }
                        else {
                            console.log(`Faites un effort. Votre réponse ne figure pas dans les choix proposés. Votre nombre de point est de ${points} \n`.error)
                        }
                        resolve()
                    
                });
        }

        if (program.jeux_videos) {
            inquirer.prompt([{
                name: 'questions',
                type: 'list',
                message: `${jv_q3}`,
                choices: [`${jv_1c}`, `${jv_2c}`, `${jv_3c}`],
                default: 1,
            }]).then((answers) => {
                    if(answers.questions == jv_3c) {
                        points++
                        console.log(`Vous avez trouvé la bonne réponse. Votre nombre de point est de ${points} \n`.info);
                    }
                    else if(answers.questions == jv_2c || answers.questions == jv_1c) {
                        console.log(`Vous vous êtes trompé. Votre nombre de point est de ${points} \n`.error)
                    }
                    else {
                        console.log(`Faites un effort. Votre réponse ne figure pas dans les choix proposés. Votre nombre de point est de ${points} \n`.error)
                    }
                    resolve()
                
                });
        }

        if (program.musique) {
            inquirer.prompt([{
                name: 'questions',
                type: 'list',
                message: `${m_q3}`,
                choices: [`${m_1c}`, `${m_2c}`, `${m_3c}`],
                default: 1,
            }]).then((answers) => {
                    if(answers.questions == m_2c) {
                        points++
                        console.log(`Vous avez trouvé la bonne réponse. Votre nombre de point est de ${points} \n`.info);
                    }
                    else if(answers.questions == m_1c || answers.questions == m_3c) {
                        console.log(`Vous vous êtes trompé. Votre nombre de point est de ${points} \n`.error)
                    }
                    else {
                        console.log(`Faites un effort. Votre réponse ne figure pas dans les choix proposés. Votre nombre de point est de ${points} \n`.error)
                    }
                    resolve()
                
                });
        }
    })
}













/* ---------------------------
      Q U E S T I O N / 4
----------------------------*/

const question4 = () => {
    return new Promise((resolve, reject) => {

        if (program.programmation) {
                inquirer.prompt([{
                    name: 'questions',
                    type: 'list',
                    message: `${prog_q4}`,
                    choices: [`${prog_1d}`, `${prog_2d}`, `${prog_3d}`],
                    default: 1,
                }]).then((answers) => {
                        if(answers.questions == prog_2d) {
                            points++
                            console.log(`Vous avez trouvé la bonne réponse. Votre nombre de point est de ${points} \n`.info);
                        }
                        else if(answers.questions == prog_1d || answers.questions == prog_3d) {
                            console.log(`Vous vous êtes trompé. Votre nombre de point est de ${points} \n`.error)
                        }
                        else {
                            console.log(`Faites un effort. Votre réponse ne figure pas dans les choix proposés. Votre nombre de point est de ${points} \n`.error)
                        }
                        resolve()
                    
                });
        }

        if (program.jeux_videos) {
            inquirer.prompt([{
                name: 'questions',
                type: 'list',
                message: `${jv_q4}`,
                choices: [`${jv_1d}`, `${jv_2d}`, `${jv_3d}`],
                default: 1,
            }]).then((answers) => {
                    if(answers.questions == jv_1d) {
                        points++
                        console.log(`Vous avez trouvé la bonne réponse. Votre nombre de point est de ${points} \n`.info);
                    }
                    else if(answers.questions == jv_2d || answers.questions == jv_3d) {
                        console.log(`Vous vous êtes trompé. Votre nombre de point est de ${points} \n`.error)
                    }
                    else {
                        console.log(`Faites un effort. Votre réponse ne figure pas dans les choix proposés. Votre nombre de point est de ${points} \n`.error)
                    }
                    resolve()
                
                });
        }

        if (program.musique) {
            inquirer.prompt([{
                name: 'questions',
                type: 'list',
                message: `${m_q4}`,
                choices: [`${m_1d}`, `${m_2d}`, `${m_3d}`],
                default: 1,
            }]).then((answers) => {
                    if(answers.questions == m_1d) {
                        points++
                        console.log(`Vous avez trouvé la bonne réponse. Votre nombre de point est de ${points} \n`.info);
                    }
                    else if(answers.questions == m_2d || answers.questions == m_3d) {
                        console.log(`Vous vous êtes trompé. Votre nombre de point est de ${points} \n`.error)
                    }
                    else {
                        console.log(`Faites un effort. Votre réponse ne figure pas dans les choix proposés. Votre nombre de point est de ${points} \n`.error)
                    }
                    resolve()
                
                });
        }
    })
}


 



/* ---------------------------
      Q U E S T I O N / 5
----------------------------*/

const question5 = () => {
    return new Promise((resolve, reject) => {

        if (program.programmation) {
                inquirer.prompt([{
                    name: 'questions',
                    type: 'list',
                    message: `${prog_q5}`,
                    choices: [`${prog_1e}`, `${prog_2e}`, `${prog_3e}`],
                    default: 1,
                }]).then((answers) => {
                        if(answers.questions == prog_2e) {
                            points++
                            console.log(`Vous avez trouvé la bonne réponse. Votre nombre de point est de ${points} \n`.info);
                        }
                        else if(answers.questions == prog_1e || answers.questions == prog_3e) {
                            console.log(`Vous vous êtes trompé. Votre nombre de point est de ${points} \n`.error)
                        }
                        else {
                            console.log(`Faites un effort. Votre réponse ne figure pas dans les choix proposés. Votre nombre de point est de ${points} \n`.error)
                        }
                        resolve()
                    
                });
        }

        if (program.jeux_videos) {
            inquirer.prompt([{
                name: 'questions',
                type: 'list',
                message: `${jv_q5}`,
                choices: [`${jv_1e}`, `${jv_2e}`, `${jv_3e}`],
                default: 1,
            }]).then((answers) => {
                    if(answers.questions == jv_2e) {
                        points++
                        console.log(`Vous avez trouvé la bonne réponse. Votre nombre de point est de ${points} \n`.info);
                    }
                    else if(answers.questions == jv_1e || answers.questions == jv_3e) {
                        console.log(`Vous vous êtes trompé. Votre nombre de point est de ${points} \n`.error)
                    }
                    else {
                        console.log(`Faites un effort. Votre réponse ne figure pas dans les choix proposés. Votre nombre de point est de ${points} \n`.error)
                    }
                    resolve()
                
                });
        }

        if (program.musique) {
            inquirer.prompt([{
                name: 'questions',
                type: 'list',
                message: `${m_q5}`,
                choices: [`${m_1e}`, `${m_2e}`, `${m_3e}`],
                default: 1,
            }]).then((answers) => {
                    if(answers.questions == m_2e) {
                        points++
                        console.log(`Vous avez trouvé la bonne réponse. Votre nombre de point est de ${points} \n`.info);
                    }
                    else if(answers.questions == m_1e || answers.questions == m_3e) {
                        console.log(`Vous vous êtes trompé. Votre nombre de point est de ${points} \n`.error)
                    }
                    else {
                        console.log(`Faites un effort. Votre réponse ne figure pas dans les choix proposés. Votre nombre de point est de ${points} \n`.error)
                    }
                    resolve()
                
                });
        }
    })
}


  
  main()
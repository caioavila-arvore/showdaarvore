var current_question
var questions = [
  {
    title: "Qual animal ensinou ao Pequeno Principe o que é cativar?",
    alternatives: [
      { text: "Uma zebra", type: false},
      { text: "Uma lagartixa", type: false},
      { text: "Uma raposa", type: true},
      { text: "Um jabuti", type: false}
    ],
    id: 1
  },
  {
    title: "Qual o nome do macaco de estimação de Aladim?",
    alternatives: [
      { text: "Arthur", type: false},
      { text: "Abu", type: true},
      { text: "Mustafá", type: false },
      { text: "Shazan", type: false}
    ],
    id: 2
  },
  {
    title: "Nos contos que compõem as coleção Mil e uma noites, a última esposa do rei da Pérsia se chamava:",
    alternatives: [
      { text: "Raquel", type: false},
      { text: "Jasmin", type: false },
      { text: "Xariar", type: false},
      { text: "Sherazade", type: true}
    ],
    id: 3
  },
  {
    title: "No romance Dom Quixote, de Miguel de Cervantes, o herói vive suas aventuras ao lado de dois companheiros, um amigo e um cavalo cujos nomes são, respectivamente:",
    alternatives: [
      { text: "Sancho Pança e Rocinante", type: true},
      { text: "Juan e Bonanza", type: false },
      { text: "Pablo e Alazan", type: false},
      { text: "Hector e Poncho", type: false}
    ],
    id: 4
  },
  {
    title: "Quem foi o famoso detetive criado pelo escritor britânico Sir Arthur Conan Doyle?",
    alternatives: [
      { text: "Hercule Poirot", type: false},
      { text: "Sherlock Holmes", type: true },
      { text: "Gil Grissom", type: false},
      { text: "Adrian Monk", type: false}
    ],
    id: 5
  },
  {
    title: "Quem escreveu o clássico inglês Oliver Twist?",
    alternatives: [
      { text: "Charles Dickens", type: true},
      { text: "Charles Barry", type: false },
      { text: "William Tacheray", type: false},
      { text: "Sir Walter Scott", type: false}
    ],
    id: 6
  },
  {
    title: "Qual romance foi escrito pelo inglês Walter Scott e é considerado um marco do romance histórico?",
    alternatives: [
      { text: "Wuthering Heights", type: false},
      { text: "Mansfield Park", type: false },
      { text: "Mrs Dalloway", type: false},
      { text: "Ivanhoé", type: true}
    ],
    id: 7
  },
  {
    title: "Que cartunista brasileiro foi responsável pela criação do personagem Menino Maluquinho?",
    alternatives: [
      { text: "Maurício de Sousa", type: false},
      { text: "Angeli", type: false },
      { text: "Ziraldo", type: true},
      { text: "Laerte", type: false}
    ],
    id: 8
  },
  {
    title: "Alguns personagens do folclore brasileiro compõem a turma do Sítio do Picapau Amarelo. É um deles:",
    alternatives: [
      { text: "Boitatá", type: false},
      { text: "Comadre Florzinha", type: false },
      { text: "Pisadeira", type: false},
      { text: "Saci-pererê", type: true}
    ],
    id: 9
  },
  {
    title: "Em Alice no país das maravilhas, a protagonista chega ao país das maravilhas após perseguir um:",
    alternatives: [
      { text: "coelho", type: true},
      { text: "guaxinim", type: false },
      { text: "gato", type: false},
      { text: "lagarto", type: false}
    ],
    id: 10
  },
  {
    title: "No Romantismo brasileiro, um romance marcou época ao retratar o amor entre um branco e uma indígena que deu a luz a Moacir, metáfora da formação do povo brasileiro. Esse romance chama-se:",
    alternatives: [
      { text: "O Guarani", type: false},
      { text: "Ubirajara", type: false },
      { text: "I Juca Pirama", type: false},
      { text: "Iracema", type: true}
    ],
    id: 11
  },
  {
    title: "Qual dos poetas abaixo foi representante da geração ultrarromântica do Romantismo brasileiro?",
    alternatives: [
      { text: "Olavo Bilac", type: false},
      { text: "Sousa e Cruz", type: false },
      { text: "Álvares de Azevedo", type: true},
      { text: "Jorge de Lima", type: false}
    ],
    id: 12
  },
  {
    title: "Das peças de teatro abaixo, somente uma não é de autoria de William Shakespeare. Qual é ela?",
    alternatives: [
      { text: "Romeu e Julieta", type: false},
      { text: "O Noviço", type: true },
      { text: "Macbeth", type: false},
      { text: "Otelo", type: false}
    ],
    id: 13
  },
  {
    title: "Os seguintes autores foram responsáveis por adaptar narrativas orais e transformá-las nas primeiras versões dos contos de fadas que conhecemos até hoje, exceto:",
    alternatives: [
      { text: "Monteiro Lobato", type: true},
      { text: "Charles Perrault", type: false },
      { text: "Irmãos Grim", type: false},
      { text: "Hans Christian Andersen", type: false}
    ],
    id: 14
  },
  {
    title: "Romance de Aldous Huxley, é - ao lado de 1984, de George Orwell - um marco na literatura que tem como elemento a temática da distopia, hoje tendência na literatura:",
    alternatives: [
      { text: "Jogos Vorazes", type: false},
      { text: "Divergente", type: false },
      { text: "Admirável Mundo Novo", type: true},
      { text: "Fahrenheit 451", type: false}
    ],
    id: 15
  },
  {
    title: " Em qual conto de Machado de Assis existe um triângulo amoroso que resulta em assassinato?",
    alternatives: [
      { text: "A cartomante", type: true},
      { text: "A Igreja do Diabo", type: false },
      { text: "Missa do Galo", type: false},
      { text: "O enfermeiro", type: false}
    ],
    id: 16
  },
  {
    title: "Poeta português que inovou ao criar heterônimos, autores fictícios com biografia e estética próprias, que assinavam suas obras. Dentre os mais famosos estão Alberto Caeiro, Álvaro de Campos e Ricardo Reis:",
    alternatives: [
      { text: "Luis Vaz de Camões", type: false},
      { text: "Cesário Verde", type: false },
      { text: "Almeida Garret", type: false},
      { text: "Fernando Pessoa", type: true}
    ],
    id: 17
  },
  {
    title: "Foi uma poeta portuguesa do início do século XX conhecida por abordar em seus textos com muita intensidade as temáticas do amor, do desejo, da morte e do próprio fazer poético:",
    alternatives: [
      { text: "Clarice Lispector", type: false},
      { text: "Cecília Meireles", type: false },
      { text: "Florbela Espanca", type: true},
      { text: "Cora Coralina", type: false}
    ],
    id: 18
  },
  {
    title: "Escrito por Lima Barreto, é uma obra pré-modernista que ironiza o sentimento de nacionalismo através do personagem principal:",
    alternatives: [
      { text: "Clara dos Anjos", type: false},
      { text: "Triste fim de Policarpo Quaresma", type: true },
      { text: "O homem que sabia Javanês", type: false},
      { text: "Os Brunzundangas", type: false}
    ],
    id: 19
  },
  {
    title: "Não é uma obra de Monteiro Lobato",
    alternatives: [
      { text: "Reinações de Narizinho", type: false},
      { text: "Geografia de Dona Benta", type: false },
      { text: "Memórias da Emília", type: false},
      { text: "O menino do dedo verde", type: true}
    ],
    id: 20
  }
]
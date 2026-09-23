/* =============================================================================
   PORTFÓLIO DA MARCA · JULLIANA MARQUES
   -----------------------------------------------------------------------------
   ESTE É O ÚNICO ARQUIVO QUE PRECISA SER EDITADO.

   Como editar direto no site:
   1. Abra github.com/gicarrilho/leiturajulliana
   2. Clique em dados.js
   3. Clique no lápis (Edit this file), no canto direito
   4. Mude o texto entre aspas
   5. Role até o fim e clique em Commit changes
   6. Espere cerca de um minuto e atualize o site

   REGRAS PARA NÃO QUEBRAR:
   . Todo texto fica entre aspas duplas
   . Toda linha termina com vírgula, menos a última de cada bloco
   . Se o texto tiver aspas dentro, escreva assim: \"palavra\"
   . Nunca apague as chaves { } nem os colchetes [ ]
   . Para acrescentar uma pauta, copie uma linha inteira e cole embaixo

   PROCURE POR "COLAR AQUI" para achar o que ainda falta preencher.
   ============================================================================= */

const MARCA = {
  produto: "Portfólio da Marca",
  cliente: "Julliana Marques",
  subtitulo: "Tudo o que reconhecemos sobre a sua marca, e as ferramentas para você colocar isso em movimento sem depender de mim."
};

const CONSULTORA = {
  nome: "Giovanna Carrilho",
  assinatura: "Corretora de Marca · estratégia de marca para corretoras",
  instagram: "@gicarrilho",
  email: "contato@gicarrilho.com.br",
  whatsapp: "https://gicarrilho.com/oie",
  cidade: "Santos"
};

const GRAVACOES = {
  link: "https://drive.google.com/drive/folders/1dCbVuqoKjkmcnOBD97AWJC2KVyeqfiXN?usp=sharing",
  itens: [
    { n: "Encontro 1", d: "01/09/2026", t: "Investigação", txt: "Onde as evidências apareceram: as notas, a trajetória, as três cenas de cliente e de equipe." },
    { n: "Encontro 2", d: "10/09/2026", t: "Reconhecimento e direção", txt: "Alto padrão, a relação entre você, a Elite e o Nexus, e a decisão de território." },
    { n: "Encontro 3", d: "a realizar", t: "Entrega e ativação", txt: "A entrega deste Portfólio e o combinado dos primeiros 30 dias." }
  ]
};

/* ---- atalhos da primeira tela ---- */
const ATALHOS = [
  { q: "Quero lembrar a minha direção", para: "g1", d: "Leitura, território, manual e cliente" },
  { q: "Quero saber o que postar", para: "g2", d: "Pilares e banco de pautas" },
  { q: "Quero criar um conteúdo", para: "g3", d: "Da cena ao conteúdo, ferramentas e régua" },
  { q: "Quero saber o que fazer agora", para: "g4", d: "Plano de ação de 30 dias" },
  { q: "Estou travada", para: "diagnostico", d: "Me ajuda a descobrir para onde ir", destaque: true }
];

/* ---- o mini diagnóstico do \"estou travada\" ---- */
const DIAGNOSTICO = [
  { p: "Não sei o que postar", para: "pautas", r: "Banco de pautas" },
  { p: "Tenho uma ideia, mas não sei como desenvolver", para: "criar", r: "Da cena ao conteúdo" },
  { p: "Está pronto, mas não sei se parece comigo", para: "regua", r: "A régua" },
  { p: "Não lembro qual é a minha direção", para: "g1", r: "Sua Marca" },
  { p: "Sei o que fazer, mas não estou conseguindo executar", para: "plano", r: "Plano de ação" },
  { p: "Estou repetindo as mesmas ideias", para: "g5", r: "Repertório" },
  { p: "Quero falar com a Gi", para: "whatsapp", r: "WhatsApp" }
];

/* =============================================================================
   01 · SUA MARCA
   ============================================================================= */

const RETRATO = {
  usar: "Use quando precisar lembrar por que a sua comunicação precisa acompanhar a Julliana que você se tornou.",
  titulo: "O problema nunca foi falta de autoridade.",

  /* Composição editorial. Cada item vira um bloco com peso visual próprio.
     n: "linhag" texto maior | "linha" texto normal | "ponte" texto menor de ligação
        "destaque" serifa grande | "forte" caixa alta de peso | "recuo" lista recuada
        "assin" assinatura em serifa | "pausa" respiro (use {n:"pausa",g:true} para respiro grande)
     Quebra de linha dentro de um item: use \n onde você quer que a linha quebre. */
  bloco: [
    { n: "linhag", t: "Você se deu 8 em Reconhecimento\ne 8 em Negócios." },
    { n: "linha", t: "Mas, quando olhou para a sua Comunicação,\na nota caiu para 5." },
    { n: "pausa" },
    { n: "ponte", t: "E foi aí que apareceu uma pista importante:" },
    { n: "destaque", t: "a Julliana que o mercado já conhece\nainda não é a mesma Julliana\nque o digital consegue enxergar." }
  ],

  /* peso: "forte" (os dois 8) | "tensao" (o ponto que pede trabalho) | "secundario" */
  notas: [
    { v: 8, t: "Reconhecimento", peso: "forte" },
    { v: 8, t: "Negócios", peso: "forte" },
    { v: 5, t: "Comunicação", peso: "tensao" },
    { v: 6, t: "Clareza de papel", peso: "secundario" }
  ],

  detalhe: [
    { n: "linha", t: "O mercado já conhece uma Julliana que o Instagram ainda mostra pouco." },
    { n: "linha", t: "É a Julliana que senta numa negociação\ne consegue enxergar uma saída." },
    { n: "linha", t: "Que o construtor escuta." },
    { n: "linha", t: "Que a equipe procura quando trava." },
    { n: "linha", t: "Que olha para uma situação\ne mostra perspectivas que os outros ainda não estavam vendo." },
    { n: "pausa" },
    { n: "destaque", t: "Essa autoridade já existe." },
    { n: "pausa" },
    { n: "linha", t: "Só que ela foi construída, em grande parte,\nem lugares fechados:" },
    { n: "recuo", t: "na mesa de negociação,\nna reunião,\nno atendimento,\nna conversa com a equipe,\nna relação com outros profissionais do mercado." },
    { n: "linha", t: "Quem estava nessas salas viu." },
    { n: "linha", t: "Quem só conhece você pelo Instagram,\nviu muito menos." },
    { n: "pausa" },
    { n: "linha", t: "E é justamente aí que está o trabalho daqui para frente." },
    { n: "forte", t: "Não criar uma nova Julliana para o digital." },
    { n: "forte", t: "Tornar perceptível a Julliana que você já se tornou." },
    { n: "pausa" },
    { n: "assin", t: "Abrir a porta dessas salas." }
  ]
};

const ESSENCIA = {
  usar: "Use quando precisar explicar, em uma frase, o que você faz.",

  /* A frase-mãe. A quebra depois de "enxergar" é proposital. */
  frase: "Julliana faz você enxergar\no que ainda não estava vendo.",

  ponte: "Pode ser:",

  /* Cada item respira sozinho na tela. */
  desdobra: [
    "uma possibilidade.",
    "uma forma diferente de morar.",
    "um movimento\nque já começou em outro mercado.",
    "uma saída\npara um problema que parecia travado.",
    "um próximo nível\nque parecia distante."
  ],

  /* Bloco vinho. É a virada da página: de enxergar para fazer enxergar. */
  virada: [
    "Você olha por outros ângulos.",
    "Mas a sua marca não está apenas\nno que você consegue enxergar.",
    "Está no que você faz\nquando mostra isso para alguém."
  ],

  provaIntro: "E foi você mesma quem nos deu a pista.",
  prova: "Eu mostro várias perspectivas.",
  provaOnde: "Você disse isso no Encontro 1,\nexplicando o que faz quando alguém da equipe trava.",

  fecho: [
    { n: "linha", t: "Essa frase importa porque mostra que essa leitura não foi inventada para a sua marca." },
    { n: "linha", t: "Ela já estava na sua forma de agir.\nNa sua forma de falar.\nNa forma como as pessoas já recorrem a você." },
    { n: "pausa" },
    { n: "assin", t: "A Leitura só reconheceu o padrão." }
  ]
};

const RESUMO_1MIN = {
  usar: "Use quando estiver com informação demais na cabeça e precisar lembrar o que realmente importa.",
  selo: "A sua marca em 1 minuto",

  /* Duas linhas. A segunda ganha cor e é a que fica. */
  headline: ["Se você esquecer todo o resto,", "lembre disso."],

  /* Ficha da marca. Cada campo respira sozinho.
     rot    = etiqueta pequena, só para navegar
     resp   = resposta em corpo normal
     grande = a frase que merece peso, em serifa
     anota  = anotação lateral (uma palavra) */
  campos: [
    { rot: "O que você faz",
      resp: "Mostra o que ainda não estava sendo enxergado." },

    { rot: "Onde isso acontece",
      resp: "Em Praia Grande, nos imóveis, no mercado\ne nas pessoas que estão construindo o que vem depois." },

    { rot: "O que acontece do outro lado",
      resp: "A pessoa passa a enxergar uma possibilidade\nque antes não estava no campo de visão dela.",
      anota: "expansão" },

    { rot: "No que você acredita",
      grande: "É difícil querer uma possibilidade\nque você ainda não conhece." },

    { rot: "O que te move",
      resp: "Você não espera o medo passar para ir.",
      grande: "Quando enxerga onde quer chegar,\ncomeça a construir o caminho." }
  ]
};

const TERRITORIO = {
  usar: "Use quando surgir uma pauta, convite ou ideia e você estiver em dúvida: isso cabe na minha marca?",
  titulo: "Afinal, sobre o que é a sua marca?",

  abertura: [
    { n: "linha", t: "Sua marca não é sobre vender imóveis de alto padrão." },
    { n: "linha", t: "É sobre a forma como você enxerga o mercado, a cidade, os imóveis e as pessoas que estão construindo o que vem depois." },
    { n: "linha", t: "Por isso, você não precisa falar sempre da mesma coisa." },
    { n: "recuo", t: "Um imóvel pode entrar.\nUma mudança em Praia Grande pode entrar.\nUma viagem para Balneário Camboriú pode entrar.\nUma conversa com a equipe pode entrar.\nUma decisão dentro da Elite pode entrar.\nO que você está construindo no Nexus pode entrar.\nUma conversa com um construtor pode entrar.\nUma história da sua trajetória pode entrar." },
    { n: "pausa" },
    { n: "destaque", t: "O assunto pode mudar.\nO seu olhar precisa continuar reconhecível." }
  ],

  /* O contraste visual: muitos assuntos possíveis de um lado,
     um olhar só do outro, em fundo vinho. */
  contraste: {
    rotA: "O assunto muda",
    assuntos: "Praia Grande.\nUm imóvel.\nBalneário Camboriú.\nUma negociação.\nUma viagem.\nA Elite.\nO Nexus.\nUma história sua.",
    rotB: "O seu olhar continua",
    pergunta: "O que eu estou enxergando aqui\nque talvez o outro ainda não tenha percebido?"
  },

  olhar: [
    { n: "linha", t: "Quando você mostra uma perspectiva que a pessoa ainda não tinha considerado, alguma coisa muda do outro lado." },
    { n: "linha", t: "Ela passa a enxergar uma possibilidade que antes não estava no campo de visão dela." },
    { n: "recuo", t: "Pode ser uma forma diferente de morar.\nUm bairro que ela não considerava.\nUma oportunidade de mercado.\nUma maneira diferente de conduzir uma negociação.\nUm próximo passo na carreira." },
    { n: "pausa" },
    { n: "forte", t: "Você não precisa dizer para alguém pensar grande." },
    { n: "destaque", t: "Você mostra algo que faz essa pessoa enxergar maior." }
  ],

  forte: [
    { n: "linha", t: "O Canto do Forte pode ser o seu ponto de partida." },
    { n: "linha", t: "Não precisa ser o único assunto da sua marca." },
    { n: "recuo", t: "É onde você mora.\nÉ onde concentra boa parte da sua experiência e dos negócios que analisamos.\nÉ onde você tem histórias, repertório e detalhes que alguém de fora dificilmente teria." },
    { n: "linha", t: "Por isso, é um ótimo lugar para começar a mostrar publicamente a profundidade do seu olhar." },
    { n: "pausa" },
    { n: "destaquem", t: "Mas a mesma Julliana que lê o Forte\ntambém lê Praia Grande, um projeto, um comprador,\numa negociação e um movimento de mercado." }
  ],

  ferramenta: {
    titulo: "Isso cabe na minha marca?",
    intro: [
      { n: "linha", t: "Quando surgir um assunto novo, não pergunte apenas:" },
      { n: "recuo", t: "\u201CIsso é sobre mercado imobiliário?\u201D" },
      { n: "linha", t: "Pergunte:" }
    ],
    perguntas: [
      "Eu tenho alguma coisa minha para dizer sobre isso?",
      "Existe uma experiência, observação ou história que sustenta o que estou dizendo?",
      "Consigo mostrar uma perspectiva que talvez a pessoa ainda não estivesse enxergando?"
    ],
    fecho: "Se as respostas forem sim,\nprovavelmente existe conteúdo aí."
  }
};

const PRINCIPIOS = {
  usar: "Use quando precisar lembrar quais ideias sustentam o seu jeito de olhar para o mercado.",
  titulo: "Algumas ideias precisam aparecer tantas vezes\nque começam a ser associadas a você.",

  abertura: [
    { n: "linha", t: "Você não precisa repetir essas frases literalmente." },
    { n: "destaque", t: "Precisa repetir o raciocínio." },
    { n: "recuo", t: "Em imóveis diferentes.\nEm histórias diferentes.\nEm momentos diferentes." },
    { n: "pausa" },
    { n: "linha", t: "É assim que uma opinião deixa de ser um post isolado\ne começa a construir percepção." }
  ],

  /* Seis princípios. Fechados mostram só número e frase.
     t     = a frase do princípio (use \n para quebrar onde você quer)
     corpo = a explicação, na mesma lógica editorial das outras telas */
  itens: [
    { t: "Preço alto não é alto padrão.",
      corpo: [
        { n: "linha", t: "Um apartamento custar mais não significa, sozinho, que ele entrega mais." },
        { n: "linha", t: "Antes de chamar de alto padrão, você quer entender o que naquele projeto realmente elevou o padrão de morar." }
      ] },

    { t: "O mesmo imóvel não tem o mesmo valor para todo mundo.",
      corpo: [
        { n: "linha", t: "Três vagas podem ser excesso para uma pessoa e resolver um problema diário para outra." },
        { n: "linha", t: "Uma varanda enorme pode ser decisiva para uma família e espaço desperdiçado para outra." },
        { n: "pausa" },
        { n: "destaquem", t: "Valor aparece quando o imóvel encontra a vida de quem vai usar aquilo." }
      ] },

    { t: "A ficha diz o que o imóvel tem.\nA vida diz por que isso importa.",
      corpo: [
        { n: "linha", t: "\u201C3 vagas\u201D está no anúncio." },
        { n: "linha", t: "\u201CNunca mais precisar deixar o carro da minha esposa na rua\u201D é o que pode fazer alguém decidir." },
        { n: "pausa" },
        { n: "destaquem", t: "O atributo só ganha valor quando encontra uma situação real." }
      ] },

    { t: "Mostrar um imóvel é diferente\nde ajudar alguém a enxergá-lo.",
      corpo: [
        { n: "linha", t: "O cliente já consegue ver metragem, fotos, lazer e preço antes de falar com você." },
        { n: "linha", t: "O seu valor começa onde a ficha técnica termina." },
        { n: "recuo", t: "Para quem isso faz sentido?\nPara quem não faz?\nO que essa pessoa ainda não percebeu?" },
        { n: "pausa" },
        { n: "destaque", t: "Você não precisa mostrar mais.\nPrecisa mostrar o que o outro ainda não viu." }
      ] },

    { t: "Conhecer a cidade como morador\né diferente de ler a cidade como mercado.",
      corpo: [
        { n: "linha", t: "Quem mora aqui conhece a rotina." },
        { n: "linha", t: "Sabe onde gosta de comer, qual praia frequenta e como o bairro funciona num sábado." },
        { n: "linha", t: "Quem acompanha o mercado olha outras coisas também:" },
        { n: "recuo", t: "o que está sendo construído,\nquem está comprando,\nquais produtos estão chegando,\ncomo os bairros estão mudando." },
        { n: "linha", t: "Uma leitura não substitui a outra." },
        { n: "pausa" },
        { n: "destaquem", t: "Juntas, ajudam a enxergar a cidade inteira." }
      ] },

    { t: "Repertório muda o que você consegue enxergar.",
      corpo: [
        { n: "linha", t: "Foi conhecendo outros mercados, produtos, cidades e pessoas que você começou a ampliar a sua própria visão." },
        { n: "linha", t: "É por isso que Balneário Camboriú, viagens, feiras e novas experiências não são coisas separadas do seu trabalho." },
        { n: "pausa" },
        { n: "destaque", t: "Você vai ver\npara voltar enxergando diferente." }
      ] }
  ],

  fecho: [
    { n: "linha", t: "Esses princípios não são assuntos que você precisa transformar em post." },
    { n: "linha", t: "São ideias que vão aparecer de formas diferentes em tudo o que você comunica." },
    { n: "pausa" },
    { n: "linha", t: "Quanto mais elas se repetem em contextos diferentes," },
    { n: "destaque", t: "mais o mercado começa a reconhecer\ncomo Julliana pensa." }
  ]
};

const CAMADAS = {
  usar: "Use quando estiver em dúvida sobre qual é o papel da Julliana, da Elite e do Nexus na sua comunicação.",
  titulo: "Você não precisa escolher\nqual Julliana vai aparecer.",

  /* Cada uma aparece sozinha na tela, com respiro. */
  versoes: [
    "Corretora.",
    "Gestora.",
    "Sócia da Elite.",
    "Parte do Nexus.",
    "Uma mulher que acompanha esse mercado há anos."
  ],

  abertura: [
    { n: "pausa" },
    { n: "destaque", t: "Tudo isso é você." },
    { n: "fortew", t: "O que precisa ficar claro\né qual papel cada uma dessas frentes ocupa na sua marca." }
  ],

  /* Bloco claro. É a ideia central da página. */
  central: [
    "Sua marca pessoal é o lugar\nonde o seu olhar aparece.",
    "Elite e Nexus ajudam a provar,\nno mundo real,\naquilo que você pensa, constrói e lidera."
  ],

  /* A ordem define o peso visual: a primeira é a maior,
     as duas do meio são secundárias, a última é a mais distante. */
  itens: [
    { nome: "Julliana",
      papel: "É onde aparece o que só você pode dizer.",
      corpo: [
        { n: "recuo", t: "Sua opinião.\nO que você percebe antes.\nAs perguntas que faz.\nO jeito como lê uma negociação.\nO que aprende quando conhece outro mercado.\nA sua trajetória.\nAs perspectivas que mostra para clientes, equipe e parceiros." },
        { n: "pausa" },
        { n: "destaquem", t: "É aqui que precisamos tornar visível\na autoridade que hoje muita gente só conhece\nquando está perto de você." }
      ] },

    { nome: "Elite",
      papel: "É onde boa parte do que você acredita vira prática.",
      corpo: [
        { n: "linha", t: "É na Elite que aparecem:" },
        { n: "recuo", t: "decisões de gestão,\nnegociações,\nformação da equipe,\natendimento,\nproduto,\nresultado." },
        { n: "linha", t: "Por isso, a Elite pode aparecer bastante na sua comunicação." },
        { n: "linha", t: "Mas existe uma diferença importante:" },
        { n: "forte", t: "você não precisa transformar\no seu perfil\nno perfil institucional da Elite." },
        { n: "pausa" },
        { n: "destaquem", t: "Quando a Elite entra no seu perfil,\nentra porque existe uma leitura sua\npor trás daquela cena." }
      ] },

    { nome: "Nexus",
      papel: "É onde aparece o mercado que você quer ajudar a construir.",
      corpo: [
        { n: "linha", t: "O Nexus mostra uma Julliana\nque não pensa apenas na própria venda." },
        { n: "recuo", t: "Mostra critério.\nRelação com outros profissionais.\nDiscussão sobre ética.\nTroca.\nDesenvolvimento do mercado." },
        { n: "linha", t: "Quando o Nexus entrar na sua comunicação,\na pergunta não é:" },
        { n: "recuo", t: "\u201CComo divulgo o Nexus?\u201D" },
        { n: "linha", t: "É:" },
        { n: "destaque", t: "\u201CO que isso revela\nsobre o mercado em que eu acredito?\u201D" }
      ] },

    { nome: "Construtoras",
      papel: "Uma possibilidade que a sua marca pode abrir no futuro.",
      corpo: [
        { n: "linha", t: "Você já demonstrou interesse\nem participar mais cedo dessa conversa." },
        { n: "linha", t: "Não apenas receber um produto pronto para vender,\nmas levar para quem constrói\naquilo que você percebe atendendo quem compra." },
        { n: "linha", t: "O caso de Balneário Camboriú\njá deu uma pista dessa capacidade." },
        { n: "pausa" },
        { n: "destaquem", t: "Não é uma frente para construir agora." },
        { n: "linha", t: "É uma possibilidade que fica mais próxima\nà medida que o mercado passa a reconhecer\npublicamente a sua leitura." }
      ] }
  ],

  /* Ferramenta final. Em *palavra* o texto fica destacado na cor de acento. */
  quem: {
    titulo: "Antes de publicar, pergunte:\nquem está falando aqui?",
    casos: [
      { p: "Existe opinião, leitura, experiência ou história sua?",
        quem: "É Julliana.",
        r: "Faz sentido no seu perfil." },

      { p: "É comunicado institucional, imóvel, campanha, equipe ou informação da empresa sem uma leitura pessoal sua?",
        quem: "É Elite.",
        r: "O canal institucional provavelmente é o lugar mais adequado." },

      { p: "É agenda, chamada, evento ou comunicado institucional do grupo?",
        quem: "É Nexus.",
        r: "O canal do Nexus provavelmente é o lugar mais adequado." },

      { p: "A cena aconteceu dentro da Elite ou do Nexus,\nmas revelou alguma coisa que *você* pensa?",
        grande: true,
        r: "Pode ser Julliana.\nConte pela sua perspectiva." }
    ]
  },

  fecho: [
    { n: "linha", t: "Você não precisa separar\ntodas as suas versões." },
    { n: "linha", t: "Precisa entender o papel de cada uma." },
    { n: "pausa" },
    { n: "destaque", t: "A Julliana é a voz." },
    { n: "linha", t: "Elite e Nexus são lugares\nonde partes dessa marca ganham vida." }
  ]
};

const MANUAL = {
  usar: "Use quando estiver em dúvida se uma ideia, uma parceria, um conteúdo ou uma decisão combina com a marca que você quer construir.",
  titulo: "Se a dúvida for\n\u2018isso parece comigo?\u2019,\nvolte aqui.",

  abertura: [
    { n: "linha", t: "Você não precisa decorar este Manual." },
    { n: "linha", t: "Ele existe para registrar as decisões que tomamos sobre a sua marca." },
    { n: "linha", t: "Quando aparecer uma nova ideia, parceria, oportunidade ou caminho de comunicação, volte aqui e compare." },
    { n: "pausa" },
    { n: "destaque", t: "A marca pode evoluir." },
    { n: "fortew", t: "O que não pode é mudar de personalidade\na cada nova oportunidade." }
  ],

  /* Quatro portas. Só uma fica aberta por vez.
     Cada bloco pode ser:
       corpo: [...]              texto editorial
       tipo: "ideias"            lista numerada de convicções
       tipo: "ecos"              percepções em serifa
       tipo: "tracos"            palavra grande + explicação curta
       tipo: "protege"           o que a marca não deve virar
       tipo: "virada"            bloco vinho
       mais: { r, corpo }        aprofundamento fechado */
  areas: [

    { n: "01", t: "O coração da marca", s: "No que você acredita\ne o que quer provocar.",
      blocos: [

        { rot: "No que você acredita",
          corpo: [
            { n: "destaque", t: "É difícil querer uma possibilidade\nque você ainda não conhece." },
            { n: "linha", t: "Às vezes, o próximo passo começa\nsimplesmente conhecendo o que existe além." }
          ],
          mais: { r: "Por que isso tem a ver com a sua história?",
            corpo: [
              { n: "linha", t: "A sua primeira venda de R$ 1 milhão, aos 18 anos, fez exatamente isso com você." },
              { n: "linha", t: "Nas suas palavras, aquela experiência mudou a sua percepção sobre as coisas e a sua mentalidade sobre a vida." },
              { n: "linha", t: "Você conheceu uma possibilidade\nque ainda não fazia parte da sua realidade." },
              { n: "pausa" },
              { n: "destaquem", t: "Depois de conhecer,\no tamanho do que parecia possível mudou." }
            ] } },

        { rot: "Para que essa marca existe",
          corpo: [
            { n: "destaque", t: "Mostrar novas possibilidades\npara que mais pessoas consigam perceber\naté onde podem chegar." }
          ] },

        { rot: "O que você promete",
          corpo: [
            { n: "ponte", t: "como marca" },
            { n: "linha", t: "Você vai sair percebendo possibilidades\nque antes não estavam no seu campo de visão." },
            { n: "pausa" },
            { n: "ponte", t: "no atendimento" },
            { n: "linha", t: "Eu te ajudo a enxergar além\ndo imóvel que você estava procurando." },
            { n: "linha", t: "Para entender qual escolha realmente faz sentido\npara a vida que você quer construir." }
          ] },

        { rot: "Ideias que você defende", tipo: "ideias",
          itens: [
            "Praia Grande está mudando.\n\nE para entender o mercado de hoje,\nnão basta repetir a imagem que a cidade teve no passado.",
            "Um imóvel custar mais\nnão significa que ele entregue uma experiência melhor.\n\nAlto padrão precisa aparecer\nna forma de morar, no produto e nas escolhas do projeto.",
            "O cliente pode encontrar tudo o que pediu\ne ainda assim descobrir que fez a escolha errada.\n\nPor isso, entender a vida que ele quer levar\né tão importante quanto entender a lista do imóvel que procura.",
            "Quem conversa todos os dias com compradores\npercebe mudanças de comportamento,\nnovas necessidades e novas expectativas.\n\nEssa percepção também pode contribuir\npara quem pensa, desenvolve e constrói os próximos produtos do mercado."
          ] },

        { rot: "O mercado que você gostaria de ajudar a construir", tipo: "virada",
          linhas: [
            "Uma Praia Grande que continue crescendo\nnão apenas em número de lançamentos,\nmas na qualidade dos produtos,\ndas escolhas e das experiências que oferece.",
            "Um mercado em que compradores,\ncorretores e construtores tenham acesso\na mais referências para tomar decisões melhores."
          ] }
      ] },

    { n: "02", t: "Como você entrega valor", s: "O que muda para quem passa por você.",
      blocos: [

        { rot: "Antes",
          corpo: [
            { n: "destaquem", t: "Eu sei mais ou menos o que estou procurando.\nSó não sei se estou olhando\npara tudo que deveria." },
            { n: "linha", t: "E, em alguns casos, existe uma dúvida ainda mais profunda:" },
            { n: "destaquem", t: "\u2018Talvez exista uma possibilidade melhor\nque eu ainda nem conheça.\u2019" },
            { n: "pausa" },
            { n: "linha", t: "Para quem já mora aqui e está investindo,\na pergunta pode ser outra:" },
            { n: "destaquem", t: "\u2018Não é se eu compro.\nÉ se vale mais a pena aqui\ndo que onde meu dinheiro está agora.\u2019" }
          ] },

        { rot: "Com você",
          corpo: [
            { n: "linha", t: "Você ajuda essa pessoa a:" },
            { n: "seqm", t: "ver outras possibilidades;" },
            { n: "seqm", t: "comparar além do óbvio;" },
            { n: "seqm", t: "entender o que realmente muda\nde uma escolha para outra;" },
            { n: "seqm", t: "conhecer aquilo que ainda não sabia\nque deveria procurar;" },
            { n: "seqm", t: "imaginar a vida dentro daquela escolha\nantes de decidir;" },
            { n: "seqm", t: "perceber quando aquilo que parecia ideal\nnão serve para ela." }
          ] },

        { rot: "Depois", tipo: "ecos", intro: "ela pode sair pensando",
          frases: [
            "Eu não sabia que isso existia.",
            "Agora consigo imaginar isso para mim.",
            "Tem mais possibilidades\ndo que eu estava vendo.",
            "Confio que ela vai me mostrar coisas\nque talvez eu não encontrasse sozinha.",
            "Agora consigo perceber melhor\nqual pode ser o meu próximo passo."
          ] }
      ] },

    { n: "03", t: "Como você aparece", s: "Personalidade, voz e imagem.",
      blocos: [

        { rot: "Personalidade", tipo: "tracos",
          itens: [
            { t: "Curiosa", d: "Quer conhecer por dentro." },
            { t: "Atenta", d: "Percebe movimento, comportamento e detalhe." },
            { t: "Provocadora", d: "Mostra outro ângulo sem precisar entregar uma resposta pronta." },
            { t: "Generosa", d: "Não guarda a descoberta para si." },
            { t: "Exigente", d: "Não confunde mais caro com melhor." },
            { t: "Realizadora", d: "O que conhece precisa virar alguma coisa." }
          ],
          mais: { r: "Os valores que aparecem por trás disso",
            corpo: [
              { n: "recuo", t: "Crescimento. Sempre existe um próximo nível possível.\nCuriosidade. É preciso conhecer antes de concluir.\nVerdade. Nem tudo que você pode vender deveria ser vendido para aquela pessoa.\nGente. Crescer levando pessoas junto.\nMovimento. Conhecimento precisa mudar alguma coisa." }
            ] } },

        { rot: "Tom de voz",
          corpo: [
            { n: "linha", t: "Direta sem ser ríspida." },
            { n: "linha", t: "Fala de coisas concretas:\nbairro, metragem, valor, rua, cena." },
            { n: "linha", t: "Fala como quem já viu acontecer,\nnão como quem acabou de aprender uma teoria." },
            { n: "pausa" },
            { n: "linha", t: "Pode discordar." },
            { n: "linha", t: "Mas não precisa diminuir ninguém\npara sustentar uma opinião." },
            { n: "linha", t: "Evita superlativos vazios como:" },
            { n: "recuo", t: "\u2018imperdível\u2019\n\u2018oportunidade única\u2019\n\u2018realize seu sonho\u2019" },
            { n: "linha", t: "Não motiva por motivar.\nMostra." },
            { n: "linha", t: "Quando não sabe,\ndiz que não sabe." },
            { n: "pausa" },
            { n: "recuo", t: "Nunca guru.\nNunca coach.\nNunca vende fantasia." },
            { n: "destaquem", t: "Inspira pelo que viveu,\nviu e construiu." },
            { n: "linha", t: "Não por frases motivacionais vazias." }
          ] },

        { rot: "Imagem",
          corpo: [
            { n: "forte", t: "A imagem também precisa ter\numa leitura por trás." },
            { n: "ponte", t: "funciona" },
            { n: "recuo", t: "Praia Grande de verdade.\nArquitetura.\nCidade.\nMovimento.\nVisitas.\nReuniões.\nViagens.\nAmbientes que ampliam suas referências.\nVida real com estética bem cuidada.\nAlto padrão quando existe alguma coisa para mostrar além do preço." },
            { n: "pausa" },
            { n: "linha", t: "Você pode mostrar\numa experiência sofisticada." },
            { n: "linha", t: "A pergunta é por que ela está ali." },
            { n: "linha", t: "Se for apenas:\n\u2018olha onde estou\u2019,\nacrescenta pouco." },
            { n: "destaque", t: "Se for:\n\u2018olha o que eu vi aqui\ne o que isso me fez perceber\u2019,\nganha função." }
          ] }
      ] },

    { n: "04", t: "O que você protege", s: "O que não quer que a sua marca vire.",
      blocos: [
        { rot: "Para crescer sem perder a marca", tipo: "protege",
          itens: [
            { t: "Não virar perfil de luxo",
              a: "Alto padrão pode aparecer.",
              b: "Ostentação não precisa ser o argumento." },
            { t: "Não virar catálogo da Elite",
              a: "A empresa pode aparecer.",
              b: "O seu perfil precisa continuar tendo uma perspectiva sua." },
            { t: "Não virar perfil para corretor",
              a: "Você pode falar com o mercado.",
              b: "Mas o cliente final continua sendo prioridade." },
            { t: "Não virar perfil motivacional",
              a: "Sua história inspira porque aconteceu.",
              b: "Não precisamos transformar cada experiência em uma lição." },
            { t: "Não virar comentarista de notícia",
              a: "Se não existe uma leitura sua,",
              b: "não precisa publicar só porque o assunto está em alta." }
          ] }
      ] }
  ]
};

const ARQUETIPOS = {
  usar: "Use quando precisar lembrar quais características da sua história e da sua forma de agir dão personalidade à sua marca.",
  titulo: "Seus arquétipos não dizem\nquem você precisa ser.",

  abertura: [
    { n: "destaque", t: "Eles ajudam a reconhecer forças\nque já aparecem em quem você é." },
    { n: "pausa" },
    { n: "linha", t: "Na sua história,\numa delas aparece com muita força." },
    { n: "linha", t: "Você sonha alto,\ndefine onde quer chegar\ne começa a construir o caminho,\nmesmo quando ainda existe medo,\ninsegurança\nou alguma coisa para aprender." }
  ],

  /* A força principal. Ocupa a maior parte da página. */
  heroi: {
    rot: "Heroína · força principal",
    h: "A coragem de ir\nantes de se sentir pronta.",

    rotLinha: "A história que sustenta essa leitura",
    linha: [
      { q: "16 anos",
        t: "Começou no mercado\ncom dificuldade até para falar com clientes." },
      { q: "18 anos",
        t: "Tinha R$ 20 no bolso.\n\nViu na venda de um imóvel\na possibilidade de conquistar o carro que queria.\n\nAprendeu o que precisava,\nfoi atrás\ne vendeu." },
      { q: "Praia Grande",
        t: "Quando surgiu a possibilidade de seguir um caminho mais confortável ao lado da mãe,\nescolheu permanecer em Praia Grande\npara construir a própria carreira." },
      { q: "Hoje",
        t: "Continua reconhecendo a timidez.\n\nMas não usa o medo\ncomo condição para agir." }
    ],

    falaRot: "fala da própria Julliana",
    fala: "Eu sempre fui e ainda sou tímida,\nmas eu sempre fui uma pessoa corajosa.",

    porque: [
      { n: "linha", t: "É por isso que a Heroína aparece\ncom tanta força na sua marca." },
      { n: "destaquem", t: "Não porque a sua história foi difícil." },
      { n: "linha", t: "Mas porque existe uma recorrência\nna forma como você atravessa os desafios:" },
      { n: "recuo", t: "você enxerga onde quer chegar,\nentende o que precisa desenvolver\ne começa a fazer." }
    ],

    naoRot: "O que essa Heroína não é",
    nao: [
      { n: "recuo", t: "Não é a mulher que nunca tem medo.\nNão é a mulher que aguenta tudo.\nNão é: \u2018eu venci e você também consegue\u2019.\nNão é transformar toda dificuldade em conteúdo de superação." },
      { n: "pausa" },
      { n: "destaque", t: "A força está em mostrar\nque coragem pode existir junto\ncom medo, dúvida e imperfeição." }
    ]
  },

  /* As duas forças seguintes, lado a lado no desktop. */
  duo: [
    { rot: "Exploradora · força secundária",
      h: "Você precisa conhecer\npara ampliar o que consegue perceber.",
      corpo: [
        { n: "linha", t: "Você não constrói sua visão\nolhando apenas para o mercado em que já está." },
        { n: "recuo", t: "Conhece outras cidades.\nOutros produtos.\nOutros profissionais.\nOutros ambientes." },
        { n: "linha", t: "Observa o que já está acontecendo fora\ne volta fazendo novas perguntas\nsobre Praia Grande." }
      ],
      fecho: "A Exploradora da sua marca\nnão viaja para mostrar onde foi.\n\nVai para conhecer\ne volta com alguma coisa nova para pensar.",
      evid: "balneário camboriú" },

    { rot: "Governante · força de apoio",
      h: "Crescer também significa\nelevar o ambiente ao redor.",
      corpo: [
        { n: "linha", t: "A sua ambição não aparece apenas\nno que quer construir para você." },
        { n: "linha", t: "Ela também aparece\nna forma como organiza,\nlidera,\ncobra padrão\ne participa da construção\ndo mercado ao redor." },
        { n: "linha", t: "Elite e Nexus mostram essa força\nde maneiras diferentes." }
      ],
      fecho: "Se eu participo desse ambiente,\nquero ajudar a torná-lo melhor estruturado." }
  ],

  /* O Mago não é um quarto arquétipo. É competência, e tem tratamento visual próprio. */
  mago: {
    rot: "uma habilidade que atravessa tudo",
    h: "Existe ainda uma habilidade\nque atravessa os três.",
    fala: "Eu mostro várias perspectivas.",
    corpo: [
      { n: "linha", t: "Foi você mesma quem nos deu essa pista." },
      { n: "linha", t: "Quando alguém trava,\nvocê não precisa entregar\numa resposta pronta." },
      { n: "linha", t: "Muitas vezes,\nmostra um ângulo\nque aquela pessoa ainda não tinha considerado." },
      { n: "linha", t: "É aí que aparece uma característica\ndo arquétipo do Mago:" },
      { n: "recuo", t: "mudar a forma como alguém\nestá enxergando uma situação." },
      { n: "pausa" },
      { n: "fortew", t: "Por isso, o Mago aparece aqui\ncomo uma competência da sua marca." },
      { n: "linha", t: "Não como a força\nque conduz a sua história." }
    ]
  },

  comunicacao: {
    titulo: "Como isso aparece\nna sua comunicação?",
    itens: [
      { t: "Heroína aparece quando",
        d: "Você conta uma história\nde decisão,\ncoragem,\ntentativa,\naprendizado\nou conquista.\n\nNão precisa terminar\ncom uma lição motivacional." },
      { t: "Exploradora aparece quando",
        d: "Você mostra algo que conheceu\nfora da sua rotina\n\ne explica o que aquilo\nfez você perceber." },
      { t: "Governante aparece quando",
        d: "Você fala sobre liderança,\npadrão,\nequipe,\nética,\nElite,\nNexus\nou mercado\n\na partir daquilo que acredita\nque pode ser melhor construído." },
      { t: "Mago aparece quando",
        d: "Você pega uma situação\nque parecia óbvia\n\ne mostra uma perspectiva\nque ainda não estava sendo considerada." }
    ]
  },

  fecho: [
    { n: "linha", t: "Você não precisa escolher\num arquétipo antes de criar um conteúdo." },
    { n: "linha", t: "Eles não são editorias." },
    { n: "linha", t: "São forças que naturalmente aparecem\nquando a comunicação está fiel\na quem você é." },
    { n: "pausa" },
    { n: "destaque", t: "Arquétipo não é personagem." },
    { n: "linha", t: "Se você precisar interpretar\numa Heroína para comunicar,\nalguma coisa deu errado." },
    { n: "linha", t: "A força está justamente" },
    { n: "destaque", t: "em reconhecer o que já existe\ne deixar isso aparecer." }
  ]
};

const MANIFESTO = {
  rot: "Manifesto",

  /* Página de leitura. Sem ferramenta, sem accordion, sem rótulo entre os blocos.
     n: "n" texto normal | "l" item da abertura | "s" frase quase sozinha, em serifa
        "t" frase curta com peso | "q" fala entre aspas | "p" respiro (g ou gg para maior)
        "fim" o fechamento, no bloco vinho. Linha em branco dupla separa os dois blocos. */
  blocos: [
    { n: "n", t: "Tem coisa que você não deseja\nporque ainda nem sabe que existe." },
    { n: "p" },
    { n: "l", t: "Uma forma diferente de morar." },
    { n: "l", t: "Um lugar que nunca tinha considerado." },
    { n: "l", t: "Um trabalho que parecia grande demais." },
    { n: "p", g: "g" },

    { n: "s", t: "É difícil querer aquilo\nque você nunca conseguiu imaginar para você." },
    { n: "p", g: "g" },

    { n: "n", t: "Eu aprendi isso cedo." },
    { n: "n", t: "Cresci querendo coisas\nque ainda não faziam parte da minha realidade." },
    { n: "n", t: "E entendi que,\nse eu queria chegar em lugares diferentes,\nprecisaria me tornar capaz de chegar até eles." },
    { n: "p" },

    { n: "t", t: "Nem sempre pronta." },
    { n: "t", t: "Nem sempre segura." },
    { n: "t", t: "Mas sabendo onde eu queria chegar." },
    { n: "p", g: "g" },

    { n: "n", t: "Aos 18 anos,\numa venda de R$ 1 milhão\nmudou a minha percepção\nsobre o que era possível para mim." },
    { n: "p" },
    { n: "n", t: "E, com o tempo,\npercebi outra coisa:" },
    { n: "p" },

    { n: "s", t: "às vezes,\no que falta para alguém dar o próximo passo\nnão é uma resposta." },
    { n: "p", g: "g" },

    { n: "n", t: "É uma possibilidade\nque ela ainda não tinha considerado." },
    { n: "n", t: "É alguém mostrar:" },
    { n: "q", t: "\u2018olha por aqui também.\u2019" },
    { n: "p", g: "gg" },

    { n: "fim", t: "Eu não quero te dizer\nonde você deveria chegar.\n\nQuero te mostrar\no que você ainda não viu." }
  ]
};

const CLIENTE = {
  usar: "Use quando souber o que quer falar,\nmas estiver em dúvida sobre como tornar isso relevante\npara quem está do outro lado.",
  rot: "Cliente ideal",
  titulo: "Não pense em quem ela é no papel.\n\nPense no momento\nem que ela chega até você.",

  abertura: [
    { n: "linha", t: "Ela não chega necessariamente dizendo:" },
    { n: "recuo", t: "\u2018Quero ampliar minhas referências.\u2019\n\u2018Quero fazer uma escolha mais consciente.\u2019\n\u2018Quero entender melhor o mercado.\u2019" },
    { n: "linha", t: "Ela chega dizendo:" },
    { n: "recuo", t: "\u2018Quero um apartamento de três quartos.\u2019\n\u2018Quero morar no Forte.\u2019\n\u2018Tenho até X para investir.\u2019\n\u2018Quero duas vagas.\u2019" },
    { n: "pausa" },
    { n: "linha", t: "O seu trabalho começa justamente\nquando você entende" },
    { n: "destaque", t: "o que existe por trás dessa lista." }
  ],

  /* O contraste que ensina a página inteira em três segundos. */
  diz: {
    rotA: "ela diz",
    itens: "\u2018Quero 3 quartos.\u2019\n\u2018Quero o Forte.\u2019\n\u2018Quero duas vagas.\u2019\n\u2018Tenho até X para investir.\u2019",
    rotB: "você precisa descobrir",
    porque: "Por quê?"
  },

  quem: {
    rot: "Quem é essa pessoa?",
    corpo: [
      { n: "linha", t: "É alguém que já conquistou alguma coisa\ne está diante de uma nova escolha." },
      { n: "recuo", t: "Pode estar comprando um imóvel melhor.\nMudando de bairro.\nInvestindo.\nSaindo de outra cidade.\nReorganizando patrimônio." },
      { n: "linha", t: "Ou simplesmente percebendo\nque a vida mudou\ne o imóvel atual deixou de acompanhá-la." },
      { n: "pausa" },
      { n: "destaquem", t: "Ela tem condição de escolher." },
      { n: "fortew", t: "O que nem sempre tem\né clareza sobre tudo o que deveria considerar\nantes de escolher." }
    ]
  },

  lista: {
    rotA: "ela chega procurando",
    a: "metragem\nbairro\nnúmero de quartos\nvagas\nlazer\nvista\npreço\ncondição de pagamento",
    rotB: "mas a decisão pode estar em",
    b: [
      "como a família realmente vive;",
      "o que mudou na rotina;",
      "o que ela não quer mais tolerar;",
      "o que valoriza hoje\ne não valorizava cinco anos atrás;",
      "quanto pretende permanecer naquele imóvel;",
      "o que está disposta a abrir mão;",
      "o que ainda nem sabe que existe."
    ],
    fecho: [
      { n: "linha", t: "A lista ajuda a começar a busca." },
      { n: "destaque", t: "Não deveria decidir a compra sozinha." }
    ]
  },

  /* Pensamentos possíveis de quem chega. Não são depoimentos. */
  tensao: {
    rot: "o que ela pode estar pensando",
    um: "Eu sei mais ou menos\no que estou procurando.\n\nSó não sei se estou olhando\npara tudo que deveria.",
    ponte: "Em alguns casos,\nexiste uma segunda pergunta:",
    dois: "E se existir uma possibilidade melhor\nque eu ainda nem conheço?"
  },

  /* Três situações em que a mesma cliente pode chegar. Fechadas por padrão. */
  momentos: {
    rot: "Três momentos de compra",
    itens: [
      { t: "Minha vida mudou",
        s: "O imóvel atual\njá não acompanha a vida que ela leva.",
        corpo: [
          { n: "recuo", t: "Casamento.\nFilhos.\nTrabalho.\nDois carros.\nMudança de rotina.\nNecessidade de espaço.\nLocalização." },
          { n: "linha", t: "Alguma coisa mudou." },
          { n: "linha", t: "E aquilo que funcionava antes\ncomeçou a incomodar." }
        ],
        perg: "O que hoje me incomoda\ne eu não quero levar\npara a próxima casa?" },

      { t: "Posso escolher melhor",
        s: "Ela chegou a um momento em que consegue acessar possibilidades\nque antes não faziam parte da realidade dela.",
        corpo: [
          { n: "recuo", t: "Pode ser uma mudança de condição financeira.\nDe momento de vida.\nDe patrimônio." },
          { n: "linha", t: "Ou simplesmente o desejo\nde conhecer produtos diferentes\ndaqueles que sempre conheceu." }
        ],
        perg: "O que muda de verdade\nquando eu subo de nível de produto?" },

      { t: "Quero fazer meu dinheiro trabalhar melhor",
        s: "Ela não precisa ser convencida a comprar um imóvel.\nPrecisa entender por que colocaria o dinheiro aqui.",
        corpo: [
          { n: "linha", t: "Muitas vezes,\nesse cliente já mora na região." },
          { n: "recuo", t: "Já conhece imóveis.\nJá investe." },
          { n: "linha", t: "E está comparando essa escolha\ncom outras possibilidades para o próprio dinheiro." }
        ],
        perg: "Não é se eu compro.\n\nÉ se vale mais a pena aqui\ndo que onde meu dinheiro está agora." }
    ]
  },

  percebe: {
    titulo: "O que essa pessoa precisa perceber\nna Julliana antes mesmo de chamar?",
    rot: "queremos que ela pense",
    frases: [
      "Ela conhece possibilidades\nque eu não conheço.",
      "Ela não vai tentar encaixar qualquer imóvel\nnaquilo que eu pedi.",
      "Ela consegue me explicar\npor que uma escolha é diferente da outra.",
      "Ela vai me dizer\nquando alguma coisa não faz sentido para mim.",
      "Ela conhece a cidade\npara além do anúncio.",
      "Ela me ajuda a perceber coisas\nque eu não sabia que deveria observar."
    ]
  },

  nao: {
    rot: "O que ela não precisa receber de você",
    itens: "Mais ficha técnica.\nMais \u2018oportunidade imperdível\u2019.\nMais vídeo abrindo porta e mostrando cômodo.\nMais afirmação de que tudo é alto padrão.\nMais conteúdo dizendo que Praia Grande valorizou sem explicar o que está mudando.",
    virada: [
      "Informação ela encontra.",
      "O que queremos que ela encontre em você\né interpretação."
    ]
  },

  troca: {
    titulo: "Como isso muda\no seu conteúdo?",
    itens: [
      { a: "Empreendimento de alto padrão\ncom 3 suítes,\n3 vagas\ne lazer completo.",
        b: "Vocês compraram o segundo carro.\n\nMas continuam morando\nnum prédio com uma vaga." },
      { a: "Excelente oportunidade\nno Canto do Forte.",
        b: "Duas quadras no mesmo bairro\npodem representar\nescolhas completamente diferentes." },
      { a: "Conheça este incrível lançamento.",
        b: "Antes de olhar a planta,\neu quero te mostrar\npor que esse produto está aparecendo agora." }
    ]
  },

  regua: {
    intro: "Antes de publicar para essa pessoa,\npergunte:",
    p: "Estou dizendo alguma coisa\nque ajuda ela a escolher melhor\n\nou só mostrando\no que tenho para vender?"
  }
};

/* GUARDADO PARA MATERIAIS > EXERCÍCIOS COMPLEMENTARES > MAPEAMENTO DE PERSONA.
   Este bloco não é exibido em nenhuma tela hoje. Nada aqui foi perdido. */
const MAPEAMENTO_PERSONA = {
  usar: "Use quando souber o que quer falar, mas não souber como tornar aquilo relevante para quem compra.",
  titulo: "Não é uma pessoa. São três, e elas decidem por razões diferentes.",
  resumo: "Metade de quem compra com você já mora na Baixada. A outra metade vem de fora. Os dois grupos precisam ouvir coisas diferentes, e é aí que a maioria dos corretores erra.",
  numeros: [
    { v: "22 de 45", t: "moram na Baixada Santista", d: "17 em Praia Grande e 5 em São Vicente" },
    { v: "20 de 45", t: "vêm da Grande São Paulo", d: "12 da capital, 4 de São Bernardo, 4 do ABC e Barueri" },
    { v: "26 de 45", t: "compraram no Canto do Forte", d: "Guilhermina 7, Aviação 5, Boqueirão 4" },
    { v: "27 de 45", t: "são de 2 dormitórios", d: "3 dormitórios em 11 negócios, 1 dormitório em 6" }
  ],
  chave: "Para quem vem de fora, você explica a cidade.\nPara quem já mora aqui, você explica o mercado da cidade.\n\nMorar em Praia Grande não é a mesma coisa que entender Praia Grande como mercado. O morador sabe onde almoça no domingo. Não sabe qual quadra sustenta preço daqui a cinco anos.",
  perfis: [
    { n: "01", t: "O da cidade que está fazendo conta", pct: "cerca de metade",
      quem: "Empresário, dono de comércio, construtor, comerciante em expansão. Mora aqui. Não é o primeiro imóvel dele: é o terceiro, o quarto ou o quinto.",
      decide: "Não é onde morar. É onde colocar o dinheiro. Ele compara com o rendimento que já tem em outro lugar.",
      teme: "Tirar de onde está rendendo e colocar num bairro que não sustenta o valor. Comprar o prédio que envelhece mal enquanto o da esquina valoriza.",
      naoSabe: "Qual quadra sustenta preço. Qual prédio revende. O que vai subir primeiro. O que a cidade ainda não tem e vai ter.",
      entra: "Ele conhece a cidade como morador. Você conhece como mercado. São duas coisas diferentes, e é aí que você é insubstituível para ele.",
      fala: "É um cara que vem fazendo conta. Será que vale a pena eu tirar de um lugar e colocar em outro? Então como que eu ajudo ele a tomar essa decisão?" },

    { n: "02", t: "O de fora, de veraneio com ticket maior", pct: "cerca de 44%",
      quem: "Mora muito bem em São Paulo ou no interior. Em geral acima de 45 anos, com família. Procura a segunda ou a terceira residência.",
      decide: "Não é preço. É adequação. Ele compara com o padrão que já vive.",
      teme: "Descobrir que a cidade não entrega o que ele está acostumado. E esse medo é legítimo: você mesma reconhece que Praia Grande ainda tem limitação de gastronomia e hotelaria para esse público.",
      naoSabe: "Qual bairro entrega o padrão que ele quer. O que muda entre alta e baixa temporada. O que é real e o que é folder.",
      entra: "A cena da cliente do Caiçara é a prova: ela conseguiu exatamente o que pediu e ainda assim achou que tinha errado a cidade.",
      fala: "É um veraneio com ticket maior, que tem bom gosto, que mora muito bem em São Paulo, e quer ter um apartamento muito bom na praia." },

    { n: "03", t: "O regional que está vendo o potencial", pct: "Santos, São Vicente e região",
      quem: "Já conhecia a cidade, muitas vezes teve parente aqui, e está acompanhando a evolução de longe.",
      decide: "Arbitragem. O mesmo dinheiro comprando melhor um pouco mais adiante.",
      teme: "Chegar tarde no movimento, ou apostar num trecho que não se desenvolve.",
      naoSabe: "Onde o desenvolvimento está de fato acontecendo e onde ainda é só promessa de lançamento.",
      entra: "Ele já enxerga o potencial. Falta alguém que mostre onde ele está e onde ele não está.",
      fala: "Consegue comprar um produto melhor com preço mais OK comparado a Santos, e está enxergando um potencial de desenvolvimento na cidade." }
  ],
  comum: "Nenhum dos três está comprando o primeiro imóvel. Nenhum precisa de ajuda para conseguir comprar. Os três estão decidindo onde, não se. E os três carregam o mesmo medo com roupas diferentes: descobrir depois que o dinheiro foi para o lugar errado da cidade.",
  falta: "O corte que ainda falta na planilha é a finalidade da compra: moradia própria, veraneio ou investimento, cruzada com bairro e tipologia. São duas colunas. Com elas, tudo que está escrito acima deixa de ser leitura e vira fato."
};

/* =============================================================================
   02 · SEU CONTEÚDO
   ============================================================================= */
const DISTRIBUICAO = {
  usar: "Use quando estiver montando a semana e quiser saber se está falando demais para o mercado.",
  titulo: "70 para o cliente. 20 de dupla leitura. 10 para o mercado.",
  resumo: "O erro mais comum de corretor com autoridade é virar palestrante de corretor. Isso dá reputação rápida e demanda zero.",
  regra: "A regra na hora de gravar: 90% do conteúdo ainda precisa fazer sentido para um potencial cliente consumir. Se um comprador abriria e não entenderia por que aquilo importa para ele, o post é dos 10%, e os 10% já estão ocupados.",
  itens: [
    { pc: 50, cor: "b1", t: "cliente final, sem produto", d: "Cidade, mercado, comportamento, o que muda de uma escolha para outra." },
    { pc: 20, cor: "b2", t: "cliente final, com produto", d: "Imóvel específico, sempre dentro do sistema do pilar 3." },
    { pc: 20, cor: "b3", t: "dupla leitura", d: "Serve ao cliente na superfície e ao mercado no fundo." },
    { pc: 10, cor: "b4", t: "mercado direto", d: "Nexus, gestão, visão de construtora." }
  ]
};

const PILARES = {
  usar: "Use quando quiser lembrar de onde o seu conteúdo pode nascer.",
  itens: [
    { id: "p1", n: "01", nome: "Praia Grande por dentro",
      pergunta: "O que está mudando aqui e quem já percebeu?",
      constroi: "\"Ela entende essa cidade de um jeito que eu não entendo.\"",
      editorias: [
        { t: "ACIMA DO HORIZONTE", d: "A cidade narrada de cima. Imagem aérea com história por trás. Esse nome já é seu e nasceu literal." },
        { t: "O FORTE POR DENTRO", d: "O bairro de 26 dos 45 negócios, nas duas leituras: como é morar ali e como é comprar ali." },
        { t: "PG EM MOVIMENTO", d: "Obra nova, bairro que virou, o que encareceu, o que a cidade ainda não tem." },
        { t: "ONDE O DINHEIRO ESTÁ INDO", d: "A camada de mercado para quem já mora aqui: o que sustenta preço, o que revende, o que é promessa de folder." }
      ] },

    { id: "p2", n: "02", nome: "Como quem compra escolhe",
      pergunta: "O que realmente acontece na cabeça de alguém na hora de decidir?",
      constroi: "\"Ela entendeu o que eu estou sentindo e eu nem tinha falado.\"",
      editorias: [
        { t: "O QUE VOCÊ NÃO ABRE MÃO?", d: "A pergunta que revela o que a pessoa realmente quer, e que quase ninguém faz antes de mostrar imóvel." },
        { t: "VIDA REAL", d: "O que acontece depois da chave: vizinho, barulho, mercado a pé, a praia que você usa e a que só olha." },
        { t: "ANTES DE DECIDIR", d: "Os erros que você vê de perto, contados como cena. Nunca como lista de dicas." }
      ] },

    { id: "p3", n: "03", nome: "Imóvel com critério",
      pergunta: "Um imóvel, três peças. Não é editoria, é sistema.",
      constroi: "\"Ela não me mostra imóvel. Ela me mostra o que aquele imóvel significa.\"",
      editorias: [
        { t: "VITRINE EDITADA", d: "Foto protagonista e ficha selecionada. Três informações, no máximo quatro." },
        { t: "DOR E DESEJO", d: "O atributo vira a cena que acaba na vida da pessoa." },
        { t: "CRITÉRIO E COMPARAÇÃO", d: "Para quem eu mostraria esse, e para quem eu não mostraria." }
      ] },

    { id: "p4", n: "04", nome: "O mercado que está chegando",
      pergunta: "O que muda aqui antes de a cidade perceber?",
      constroi: "\"Ela viu antes. Vale a pena ouvir o que ela está vendo agora.\"",
      editorias: [
        { t: "ISSO É ALTO PADRÃO?", d: "A série que coloca a sua leitura em público. Precisa da sua validação antes de subir." },
        { t: "RADAR DO MERCADO", d: "O que você traz de fora e o que disso chega aqui em dois, cinco anos." },
        { t: "O QUE O COMPRADOR JÁ PERCEBEU", d: "O que as pessoas pararam de pedir e o que virou inegociável, antes de o construtor entender." }
      ] },

    { id: "p5", n: "05", nome: "Bastidores Julliana",
      pergunta: "Quem é a pessoa por trás da leitura, sem virar lifestyle.",
      constroi: "\"Ela chegou onde chegou. E continua mostrando o caminho.\"",
      editorias: [
        { t: "NA MESA DE GESTÃO", d: "Decisão difícil, negociação travada, a hora em que a equipe te procura. É aqui que o oito fica visível." },
        { t: "NO NEXUS", d: "Critério de entrada, código de ética, o mercado que você quer ver existir." },
        { t: "FORA DA BOLHA", d: "Viagem, feira, projeto. Nunca \"olha onde eu estou\". Sempre \"olha o que eu vi aqui que mudou a minha régua\"." },
        { t: "DE ONDE EU VIM", d: "A sua trajetória, contada para corretor e para a equipe. Sempre virada para fora." }
      ] }
  ]
};

/* ---- banco de pautas ----
   objetivo usa a taxonomia da sua biblioteca de referências
   rot é o roteiro em quatro tempos: gancho, cena, leitura, remate            */
const PAUTAS = [
 { p:"p1", f:"reel narrado", o:"Gerar Autoridade", g:"Esse trecho aqui tinha três casas há oito anos.",
   pq:"O morador acha que conhece a cidade porque mora nela. Conhecer a rua não é conhecer o movimento do mercado.",
   sentir:"\"Eu passo por aqui todo dia e não tinha percebido isso.\"",
   rot:["Esse trecho aqui tinha três casas há oito anos.","Mostrar a imagem aérea de agora e dizer o que havia antes.","O que muda uma quadra não é a quadra. É o que decidem construir nela, e isso começa a ser decidido anos antes.","Olha a sua rua de cima uma vez. Você vai ver coisa que não vê a pé."],
   cena:"Imagem aérea do antes e do agora." },

 { p:"p1", f:"reel narrado", o:"Atrair Seguidores", g:"De cima dá para ver o que nenhum folder mostra: onde o sol bate às 16h.",
   pq:"Orientação solar é a coisa que mais muda a vida dentro do apartamento e a que menos aparece no anúncio.",
   sentir:"\"Eu nunca tinha pensado em perguntar isso.\"",
   rot:["De cima dá para ver o que nenhum folder mostra.","Drone sobre o Forte no fim da tarde, mostrando a sombra dos prédios.","Sol da manhã e sol da tarde mudam a conta de luz, a rotina e até o que você faz na varanda.","Antes da próxima visita, pergunte para que lado é a fachada. Só isso."],
   cena:"Fim de tarde no Canto do Forte." },

 { p:"p1", f:"reel falado", o:"Gerar Autoridade", g:"A obra que está subindo na Guilhermina vai mudar o preço da sua quadra.",
   pq:"O investidor local decide por movimento, não por foto. Ele precisa de alguém que leia obra como sinal.",
   sentir:"\"Preciso entender isso antes de decidir onde coloco meu dinheiro.\"",
   rot:["A obra que está subindo aqui vai mudar o preço da sua quadra.","Gravar na frente da obra, apontando.","Três consequências concretas: o que acontece com a revenda, com o aluguel e com o perfil de quem vai morar ali.","Se você tem imóvel a duas quadras daqui, vale reavaliar antes de vender."],
   cena:"A obra da Guilhermina." },

 { p:"p1", f:"carrossel", o:"Conectar e Engajar", g:"Cinco coisas que Praia Grande tinha em 2019 e não tem mais.",
   pq:"Quem vem de fora carrega uma imagem antiga da cidade. Essa é a peça que desatualiza a lembrança dele.",
   sentir:"\"A cidade que eu tenho na cabeça não existe mais.\"",
   rot:["Cinco coisas que Praia Grande tinha em 2019 e não tem mais.","Uma foto real por slide, com o que existia e o que existe agora.","Cidade não muda de uma vez. Muda em pedaços, e quem não vem há uns anos ainda está decidindo com a imagem antiga.","Faz quanto tempo que você não vem aqui de verdade?"],
   cena:"Fotos reais do arquivo." },

 { p:"p1", f:"reel falado", o:"Gerar Autoridade", g:"Canto do Forte não é um bairro só. São três, e o preço muda de quadra em quadra.",
   pq:"É a leitura que ninguém está fazendo em público, e é o bairro onde você tem 26 dos 45 negócios.",
   sentir:"\"Então eu estava comparando coisas que não são comparáveis.\"",
   rot:["Canto do Forte não é um bairro só.","Andar pelo bairro mostrando onde começa e termina cada trecho.","O mesmo metro quadrado muda de valor três quadras adiante, e o motivo não é vista: é o que tem em volta.","Antes de comparar dois anúncios do Forte, veja se eles estão no mesmo Forte."],
   cena:"Caminhada pelo bairro." },

 { p:"p1", f:"reel falado", o:"Conectar e Engajar", g:"Morar de frente para o mar no Forte: o que ninguém te conta sobre o vento.",
   pq:"É o tipo de informação que só quem mora sabe, e é exatamente o que separa você de quem só anuncia.",
   sentir:"\"Ela está falando contra a própria venda. Posso confiar.\"",
   rot:["Morar de frente para o mar tem uma coisa que ninguém te conta.","Vento, maresia, esquadria, manutenção. Mostrar de perto.","Não é motivo para desistir. É motivo para escolher o prédio certo e saber o custo de manutenção antes.","Se você quer frente-mar, me pergunta quais prédios envelheceram bem aqui."],
   cena:"Frente-mar em dia de vento." },

 { p:"p1", f:"carrossel", o:"Atrair Seguidores", g:"Um dia comum no Canto do Forte, das 7h às 22h.",
   pq:"Quem vem de fora compra imaginando férias. Precisa enxergar a terça-feira.",
   sentir:"\"É assim que seria a minha vida aqui.\"",
   rot:["Um dia comum no Canto do Forte, das 7h às 22h.","Hora a hora, com foto real. Mercado, praça, orla, movimento.","Você não compra o metro quadrado. Compra o seu sábado de manhã e a sua terça à noite.","Qual desses horários você mais quis morar aqui?"],
   cena:"Rotina do bairro." },

 { p:"p1", f:"reel falado", o:"Gerar Autoridade", g:"Você mora aqui há vinte anos e ainda não sabe onde o dinheiro está indo.",
   pq:"É a camada de mercado que faltava para o morador. Provoca sem ofender.",
   sentir:"\"Eu conheço a cidade, mas não conheço o mercado dela.\"",
   rot:["Você mora aqui há vinte anos e ainda não sabe onde o dinheiro está indo.","Conhecer a padaria não é conhecer o mercado. São duas leituras diferentes da mesma rua.","Quem mora sabe onde almoça no domingo. Quem acompanha o mercado sabe qual quadra sustenta preço daqui a cinco anos.","Se você tem imóvel aqui, sabe dizer qual dos dois você é?"],
   cena:"Leitura de mercado por bairro." },

 { p:"p1", f:"tela dividida", o:"Gerar Autoridade", g:"Esse lançamento promete bairro nobre. Vamos olhar o mapa juntos.",
   pq:"Reagir a um anúncio real mostra critério sem precisar atacar ninguém.",
   sentir:"\"Preciso aprender a ler anúncio assim.\"",
   rot:["Esse lançamento promete bairro nobre. Vamos olhar o mapa.","Tela dividida com o anúncio de um lado e o mapa do outro.","O projeto revela para quem ele foi desenhado. Metragem, vaga e lazer dizem mais do que a chamada.","Da próxima vez que ler um anúncio, olhe primeiro a planta. Depois a promessa."],
   cena:"Um lançamento da cidade, sem citar nome." },

 { p:"p2", f:"reel falado", o:"Conectar e Engajar", g:"O imóvel perfeito provavelmente não existe. E quanto antes você aceitar isso, melhor você compra.",
   pq:"A cliente do Caiçara conseguiu exatamente o que pediu e mesmo assim se arrependeu.",
   sentir:"\"Talvez eu esteja procurando características antes de entender a minha vida.\"",
   rot:["O imóvel perfeito provavelmente não existe. E quanto antes você aceitar isso, melhor você compra.","Uma cliente queria vista mar por 400 mil. Conseguiu exatamente isso, no Caiçara. Passou um ano infeliz achando que tinha errado a cidade.","Ela teve 100% do que pediu e ainda assim errou. Lista de itens não é critério. Ela não errou a cidade, errou o bairro. E ninguém explicou a diferença antes de ela assinar.","Qual é a única coisa que você não abre mão?"],
   cena:"A cliente do Caiçara." },

 { p:"p2", f:"reel falado", o:"Gerar Autoridade", g:"A pergunta que eu faço antes de mostrar qualquer imóvel: do que você não abre mão?",
   pq:"Mostra o seu método em trinta segundos, sem precisar explicar que você tem um método.",
   sentir:"\"Ninguém nunca me perguntou isso.\"",
   rot:["Antes de mostrar qualquer imóvel, eu faço uma pergunta.","Do que você não abre mão? E conto duas respostas reais que já ouvi.","A resposta muda a busca inteira. Uma pessoa disse vaga coberta e eu cortei metade da lista. Outra disse silêncio e eu cortei a outra metade.","Responde aí antes de ver o próximo anúncio."],
   cena:"Duas respostas reais de clientes." },

 { p:"p2", f:"reel falado", o:"Conectar e Engajar", g:"Ela conseguiu exatamente o que pediu. E passou um ano infeliz.",
   pq:"É a cena mais forte que você tem e explica a sua tese inteira sem discurso.",
   sentir:"\"Isso pode acontecer comigo.\"",
   rot:["Ela conseguiu exatamente o que pediu. E passou um ano infeliz.","Vista mar por 400 mil, no Caiçara. Tudo que estava na lista.","Ela não errou a cidade. Errou o bairro. E ninguém explicou a diferença para ela.","Antes de olhar imóvel, olhe bairro. Nessa ordem."],
   cena:"A cliente do Caiçara." },

 { p:"p2", f:"carrossel", o:"Conectar e Engajar", g:"Você não está comprando metro quadrado. Está comprando o seu sábado de manhã.",
   pq:"Tira a decisão do campo técnico e leva para o campo da vida real, que é onde ela acontece.",
   sentir:"\"É assim que eu deveria estar pensando.\"",
   rot:["Você não está comprando metro quadrado. Está comprando o seu sábado de manhã.","Um slide por bairro, com a cena de sábado em cada um.","O mesmo valor compra sábados diferentes. E ninguém te mostra isso no anúncio.","Qual desses sábados é o seu?"],
   cena:"Sábado em três bairros." },

 { p:"p2", f:"carrossel", o:"Gerar Autoridade", g:"A conta do anúncio não é a conta real. Faltam quatro linhas.",
   pq:"É informação útil de verdade e posiciona você como quem fala o que os outros escondem.",
   sentir:"\"Eu ia me surpreender depois.\"",
   rot:["A conta do anúncio não é a conta real.","Condomínio, IPTU, reforma e vaga. Com números de verdade.","O valor do anúncio é a entrada da conversa, não o custo da decisão.","Antes de fechar, soma essas quatro linhas e olha de novo."],
   cena:"Números reais de imóveis da carteira." },

 { p:"p2", f:"reel falado", o:"Atrair Seguidores", g:"Localização você não muda. Cozinha você reforma. Decida nessa ordem.",
   pq:"Curto, direto, e resume a sua hierarquia de critério.",
   sentir:"\"Estou priorizando errado.\"",
   rot:["Localização você não muda. Cozinha você reforma.","Sem cena. Direto na câmera.","A maior parte das desistências que eu vejo é por causa de coisa que se resolve com obra.","Decida nessa ordem e você vai ver muito mais opção."],
   cena:"Sem cena. Funciona como corte." },

 { p:"p2", f:"reel falado", o:"Gerar Autoridade", g:"Todo mundo pede vista mar. Quase ninguém pergunta para que lado.",
   pq:"Pega o pedido mais comum da cidade e mostra que ele está incompleto.",
   sentir:"\"Faz sentido e eu nunca tinha pensado.\"",
   rot:["Todo mundo pede vista mar. Quase ninguém pergunta para que lado.","Mostrar duas varandas, uma de manhã e outra de tarde.","Sol da manhã e sol da tarde mudam a conta de luz, o uso da varanda e até a hora que dá para almoçar em casa.","Na próxima visita, pergunte a orientação antes do preço."],
   cena:"Duas varandas em horários diferentes." },

 { p:"p2", f:"tela dividida", o:"Gerar Autoridade", g:"O erro mais caro que eu vejo: escolher pela planta e não pela rotina.",
   pq:"Planta é o material que mais circula e o que menos informa sobre a vida.",
   sentir:"\"Eu estou olhando planta o dia inteiro.\"",
   rot:["O erro mais caro que eu vejo é escolher pela planta.","Tela dividida com a planta de um lado e a rotina do outro.","A planta mostra onde as paredes estão. Não mostra onde a sua vida não cabe.","Pega a planta que você está olhando e desenha o seu dia dentro dela."],
   cena:"Uma planta de lançamento." },

 { p:"p3", f:"carrossel vitrine", o:"Vender e Converter", g:"Canto do Forte. 129 m². 3 vagas.",
   pq:"Peça 1 do sistema. O que você escolhe mostrar já é uma leitura.",
   sentir:"\"Isso aqui foi selecionado, não despejado.\"",
   rot:["Canto do Forte. 129 m². 3 vagas.","Foto protagonista, sem colagem.","Três informações. É tudo que você precisa para saber se quer ver mais.","Se quiser o resto da ficha, me chama."],
   cena:"Um imóvel real da carteira." },

 { p:"p3", f:"carrossel dor e desejo", o:"Vender e Converter", g:"Chega de estacionar o carro da sua esposa na rua.",
   pq:"Peça 2 do mesmo imóvel. O atributo vira a cena que acaba.",
   sentir:"\"Isso é exatamente o que acontece na minha casa.\"",
   rot:["Chega de estacionar o carro da sua esposa na rua.","3 vagas demarcadas, não rotativas. Na prática: ninguém sai às 6h30 para tirar o carro do outro.","Se isso não é um problema na sua vida, existe opção melhor por esse mesmo valor.","Se é inegociável, é este aqui."],
   cena:"O mesmo imóvel da peça 1." },

 { p:"p3", f:"carrossel critério", o:"Gerar Autoridade", g:"Com R$ 1,2 milhão no Canto do Forte, para quem eu mostraria esse e para quem não mostraria.",
   pq:"Peça 3. É a única que ninguém consegue copiar, porque depende de ter visto muito negócio fechar.",
   sentir:"\"Eu quero que alguém pense assim no meu caso.\"",
   rot:["Com 1,2 milhão no Canto do Forte, para quem eu mostraria esse imóvel.","Descrever dois perfis de comprador reais e opostos.","Para o primeiro, esse é o melhor da faixa. Para o segundo, é o pior negócio possível. Mesmo imóvel, mesmo preço.","Me conta qual dos dois é você."],
   cena:"Dois perfis reais de comprador." },

 { p:"p3", f:"carrossel dor e desejo", o:"Vender e Converter", g:"Chega de fechar a cortina para ter privacidade dentro da própria sala.",
   pq:"Vista livre é o atributo mais anunciado e o menos explicado.",
   sentir:"\"Eu vivo de cortina fechada.\"",
   rot:["Chega de fechar a cortina para ter privacidade dentro da própria sala.","Mostrar a diferença entre vista livre e vista de frente para outro prédio.","Vista livre não é sobre paisagem. É sobre poder deixar a cortina aberta.","Abre a sua cortina agora e me diz o que você vê."],
   cena:"Duas salas, uma com vista livre." },

 { p:"p3", f:"carrossel critério", o:"Gerar Autoridade", g:"Dois apartamentos, mesmo preço, mesma quadra. Eu escolheria um. Te explico por quê.",
   pq:"Comparação lado a lado é o formato que mais puxa conversa no direct. Teste e confira.",
   sentir:"\"Ela pensa antes de mostrar.\"",
   rot:["Dois apartamentos, mesmo preço, mesma quadra.","Mostrar os dois com a mesma ficha.","Eu escolheria um. E o motivo não está em nenhuma das duas fichas.","Qual você escolheria? Me diz e eu conto se concordo."],
   cena:"Dois imóveis reais da carteira." },

 { p:"p4", f:"reel falado", o:"Gerar Autoridade", g:"Nem todo apartamento de R$ 2 milhões é alto padrão. Às vezes ele só custa R$ 2 milhões.",
   pq:"É a frase mais afiada do Portfólio e a única que cria atrito direto com produto de colega e com construtor.",
   sentir:"\"Preciso entender o critério dela.\"",
   rot:["Nem todo apartamento de 2 milhões é alto padrão. Às vezes ele só custa 2 milhões.","Dar um exemplo genérico, sem apontar imóvel.","Padrão não é preço. É acabamento, é projeto, é o que está incluído na vida de quem mora ali.","Antes de usar a palavra padrão, me diz o que ela significa para você."],
   cena:"Precisa de exemplo seu.",
   pendente:true },

 { p:"p4", f:"reel falado", o:"Gerar Autoridade", g:"Voltei de Balneário com uma lista. Três dessas coisas chegam aqui em cinco anos.",
   pq:"Você já fez isso antes de virar lançamento. Agora faça em público.",
   sentir:"\"Ela viu antes. Vale ouvir.\"",
   rot:["Voltei de Balneário com uma lista.","Mostrar três coisas concretas que vi lá.","Nenhuma delas é invenção. São coisas que já viraram padrão em outro mercado turístico parecido com o nosso.","Qual dessas três você acha que chega aqui primeiro?"],
   cena:"A viagem a Balneário." },

 { p:"p4", f:"reel narrado", o:"Gerar Autoridade", g:"Toda vez que eu viajo eu reparo no que aquela cidade já normalizou e a nossa ainda trata como novidade.",
   pq:"Transforma viagem em trabalho e resolve o problema do lifestyle sem função.",
   sentir:"\"Então é por isso que ela viaja.\"",
   rot:["Toda vez que eu viajo eu reparo numa coisa só.","O que aquela cidade já normalizou e a nossa ainda trata como novidade.","Não é sobre ser melhor. É sobre chegar antes na conversa.","Estou indo para os Estados Unidos. Me diz o que você quer que eu observe lá."],
   cena:"A viagem de outubro." },

 { p:"p4", f:"carrossel", o:"Gerar Autoridade", g:"O que o comprador parou de pedir em 2026.",
   pq:"Leitura de comportamento a partir do que você viu fechar. Não é palpite.",
   sentir:"\"Ela tem dado que eu não tenho.\"",
   rot:["O que o comprador parou de pedir em 2026.","Três coisas que sumiram dos pedidos, baseadas nos negócios que fecharam.","Quando o pedido muda, o produto demora a acompanhar. E é aí que aparece oportunidade.","O que você parou de querer e nem tinha percebido?"],
   cena:"Os 45 negócios de 2026." },

 { p:"p4", f:"tela dividida", o:"Gerar Autoridade", g:"Esse projeto foi desenhado para quem? Vou ler o que ele revela.",
   pq:"Ensina a ler projeto e posiciona você como quem entende de produto, não só de venda.",
   sentir:"\"Agora eu sei o que olhar.\"",
   rot:["Esse projeto foi desenhado para quem?","Tela dividida com a planta e a leitura.","Metragem, número de vagas e área de lazer dizem exatamente qual família o construtor imaginou.","Olha o próximo lançamento com essa pergunta e me conta o que achou."],
   cena:"Um lançamento, sem citar nome." },

 { p:"p4", f:"reel falado", o:"Gerar Autoridade", g:"O construtor devia consultar o corretor antes de lançar. Vou explicar por quê.",
   pq:"É a sua frase e é o conteúdo que abre porta de construtora.",
   sentir:"\"Ela tem razão e ninguém fala isso.\"",
   rot:["O construtor devia consultar o corretor antes de lançar.","Contar o caso de Balneário, quando a leitura virou lançamento.","Quem atende o comprador todo dia sabe antes o que vai agregar valor. E quem lança sem perguntar descobre depois, vendendo devagar.","Construtor, essa é uma conversa que eu topo ter."],
   cena:"O caso do construtor." },

 { p:"p5", f:"reel falado", o:"Gerar Autoridade", g:"A negociação travou. A equipe me procurou. O que eu falei.",
   pq:"É aqui que o seu 8 de reconhecimento finalmente fica visível para quem não estava na sala.",
   sentir:"\"Eu queria ter alguém assim do meu lado.\"",
   rot:["A negociação travou e a equipe me procurou.","Contar a cena, sem nome e sem valor.","Eles já sabiam a resposta. O que faltava era confiança de seguir o próprio julgamento. Eu só mostrei outra perspectiva.","Gestor, o seu time te procura para decidir ou para confirmar?"],
   cena:"Uma negociação real da equipe." },

 { p:"p5", f:"reel falado", o:"Gerar Autoridade", g:"Por que eu recuso gente no Nexus.",
   pq:"Critério de entrada é o conteúdo que mais comunica padrão, e você quase nunca fala disso.",
   sentir:"\"Esse grupo tem critério de verdade.\"",
   rot:["Por que eu recuso gente no Nexus.","Explicar o critério: ética, trajetória, histórico no mercado.","Um grupo vale pelo que ele não aceita. Se entra qualquer um, não é clube, é lista.","Mercado melhor começa com corretor melhor."],
   cena:"O código de ética do Nexus." },

 { p:"p5", f:"reel narrado", o:"Conectar e Engajar", g:"Isso aqui mudou a minha régua.",
   pq:"É a regra do fora da bolha aplicada: nunca olha onde eu estou, sempre olha o que eu vi.",
   sentir:"\"Ela busca coisa que eu ainda não busquei.\"",
   rot:["Isso aqui mudou a minha régua.","Mostrar o lugar, o projeto ou a solução, sem aparecer posando.","Não é sobre estar aqui. É sobre o que isso me fez enxergar de diferente quando voltei.","O que foi a última coisa que mudou a sua régua?"],
   cena:"Uma viagem ou visita recente." },

 { p:"p5", f:"reel falado", o:"Conectar e Engajar", g:"Eu tinha vinte reais. Ou eu almoçava, ou eu anunciava o apartamento.",
   pq:"É a cena mais forte da sua história e você já a conta virada para fora.",
   sentir:"\"Se ela conseguiu com vinte reais, eu consigo com o que eu tenho.\"",
   rot:["Eu tinha vinte reais. Ou eu almoçava, ou eu anunciava o apartamento.","Contar a cena inteira: o boleto do Facebook, a ligação que chegou, a venda de um milhão, o carro zero aos 18.","Eu não sabia fazer anúncio. Fiz intuitivamente. E aquilo mudou a minha ideia do que era possível.","Se eu consegui vender um milhão com vinte reais, imagina você, sabendo o que você já sabe."],
   cena:"Os vinte reais, 2015." },

 { p:"p5", f:"reel falado", o:"Conectar e Engajar", g:"Fiquei nove meses sem vender nada. Era tímida demais para ligar para um cliente.",
   pq:"Para corretor iniciante, essa história é espelho. É a peça que mais constrói autoridade dentro do mercado.",
   sentir:"\"Então não sou só eu.\"",
   rot:["Fiquei nove meses sem vender nada.","Era tímida demais para ligar para um cliente. Tinha 16 anos e estagiava no Canto do Forte.","Sempre fui e ainda sou tímida. Mas sempre fui corajosa. Eu faço aquilo que me sinto confortável de fazer, mas nunca deixo de fazer.","Você não precisa deixar de ser quem você é. Precisa não parar."],
   cena:"Os nove meses na primeira imobiliária." },

 { p:"p5", f:"carrossel", o:"Conectar e Engajar", g:"De onde eu vim até aqui, sem novela.",
   pq:"Trajetória como prova de percurso, não como conteúdo de superação.",
   sentir:"\"Ela construiu isso passo a passo.\"",
   rot:["De onde eu vim até aqui.","Linha do tempo em slides: 16 anos e o curso, 18 e o primeiro milhão, o apartamento, a Elite, o Nexus.","Nada disso aconteceu rápido. Eu fui devagar, mas fui indo. O importante é não parar.","Em que ponto dessa linha você está agora?"],
   cena:"A linha do tempo." }
];

/* =============================================================================
   03 · CRIAR
   ============================================================================= */
const CADEIA = {
  usar: "Use quando alguma coisa aconteceu e você pensou \"isso daria conteúdo\", mas não soube como transformar.",
  titulo: "Você não precisa procurar pauta. Precisa perceber quando ela aconteceu.",
  resumo: "Toda semana acontece alguma coisa na sua frente que você lê melhor do que qualquer pessoa da cidade. Você lê, resolve e segue. O conteúdo mora nesse intervalo entre ler e seguir.",
  passos: [
    { t: "ACONTECEU", p: "O que aconteceu?", d: "O fato cru, com bairro, valor, pessoa.", ph: "Ex: uma cliente desistiu de um apartamento por causa de dois metros na cozinha" },
    { t: "VOCÊ PERCEBEU", p: "O que chamou a sua atenção?", d: "O detalhe que ninguém mais viu.", ph: "Ex: ela nem mediu a cozinha que tem hoje" },
    { t: "ISSO REVELA", p: "O que existe por trás disso?", d: "O que o detalhe diz sobre o mercado ou sobre quem compra.", ph: "Ex: as pessoas comparam com um ideal, não com a vida que já levam" },
    { t: "SUA LEITURA", p: "O que VOCÊ pensa sobre isso?", d: "A sua posição. Onde você discorda do que todo mundo acha.", ph: "Ex: a régua certa não é o imóvel perfeito, é a vida que você leva hoje" }
  ],
  filtro: [
    "Se você não consegue responder \"o que eu penso sobre isso\", não é conteúdo. É notícia.",
    "Se a sua leitura é algo com que ninguém discordaria, não é conteúdo. É lembrete.",
    "Se contar expõe o cliente, não é conteúdo. Guarde a cena e conte outra."
  ],
  habito: "Toda sexta, três cenas da semana no bloco de notas do celular. Uma linha cada, sem caprichar. Essas três linhas são a sua pauta da semana seguinte."
};

const FERRAMENTA_IMOVEL = {
  usar: "Use quando precisar comunicar um imóvel específico.",
  titulo: "Um imóvel vira três peças.",
  resumo: "Isso serve para quando você tem um imóvel na mão. Não é o motor da sua marca: o motor é a ferramenta anterior.",
  pecas: [
    { n: "1", t: "VITRINE", v: "vende o imóvel", d: "Foto protagonista e ficha selecionada. Três informações, no máximo quatro. O que você escolhe mostrar já é uma leitura." },
    { n: "2", t: "DOR E DESEJO", v: "vende a vida possível", d: "O atributo vira a cena que acaba. Não pergunte qual benefício a característica oferece. Pergunte o que acontece na vida dele porque hoje ele não tem isso." },
    { n: "3", t: "CRITÉRIO", v: "vende o seu olhar", d: "Para quem eu mostraria esse e para quem eu não mostraria. Só a peça 1 é substituível. Essa ninguém copia." }
  ]
};

const IA = {
  usar: "Use quando quiser ajuda para organizar a ideia. Nunca para inventar a sua opinião.",
  aviso: "A IA não encontra a sua leitura por você. Ela ajuda a organizar, tensionar e traduzir uma leitura que já é sua. Se você não tiver uma opinião antes de abrir a conversa, o que vai sair é genérico.",
  base: "Você é um estrategista de conteúdo para o mercado imobiliário. Trabalha com a Julliana Marques, corretora e gestora há 12 anos em Praia Grande, sócia da Elite Imóveis. O posicionamento dela: ela faz as pessoas enxergarem o que ainda não estavam vendo, sobre Praia Grande, seus imóveis e quem compra aqui. Tom direto sem ser ríspido, sempre concreto (bairro, metragem, valor, cena), nunca motivacional, nunca guru, nunca superlativo como imperdível ou oportunidade única. Ela diz o que não serve, mesmo quando isso derruba a venda.",
  prompts: [
    { t: "Tenho uma cena", d: "Aconteceu alguma coisa e você quer virar conteúdo.", p: "Eu vou te contar uma cena que aconteceu comigo. Me ajude a encontrar o conteúdo dentro dela. Faça uma pergunta por vez, esperando minha resposta: o que aconteceu, o que me chamou atenção, o que isso revela sobre o mercado, e o que eu penso sobre isso. Só depois disso proponha três ganchos possíveis e um roteiro em quatro tempos (gancho, cena, leitura, remate) para o mais forte. Não invente detalhes que eu não dei." },
    { t: "Tenho uma opinião", d: "Você discorda de algo e quer transformar em peça.", p: "Eu tenho uma opinião sobre o mercado e quero transformar em conteúdo. Primeiro me pergunte qual é a opinião. Depois me ajude a encontrar a tensão: com quem essa opinião discorda e por que alguém discordaria dela. Se ninguém puder discordar, me avise que ainda não é conteúdo. Só então escreva três ganchos e um roteiro de 45 segundos." },
    { t: "Tenho um imóvel", d: "Quer rodar o sistema das três peças.", p: "Eu vou te dar as informações de um imóvel. Monte as três peças do meu sistema. Peça 1, vitrine: só três informações essenciais. Peça 2, dor e desejo: escolha um atributo e transforme na cena que acaba na vida da pessoa, começando com \"chega de\". Peça 3, critério: para quem eu mostraria esse imóvel e para quem eu não mostraria, com dois perfis opostos. Pergunte as informações do imóvel antes de começar." },
    { t: "Tenho uma notícia", d: "Saiu algo do mercado e você quer comentar sem virar portal.", p: "Eu vou colar uma notícia do mercado. Não quero que você resuma a notícia. Quero que me ajude a responder quatro perguntas: o que isso muda para o meu cliente, se eu concordo ou discordo, onde isso já aparece em Praia Grande, e se eu tenho alguma história que prova isso. Faça uma pergunta por vez. Só no fim proponha um gancho." },
    { t: "Quero mais punch", d: "O roteiro está morno e você quer tensão.", p: "Vou colar um roteiro meu. Ele está morno. Me ajude a aumentar a ativação sem exagerar nem virar sensacionalista. Aponte especificamente: onde falta tensão, onde estou explicando demais, e qual frase poderia ter sido dita por qualquer corretor. Reescreva só o gancho e o remate, mantendo o meio como está." },
    { t: "Está genérico?", d: "Auditoria antes de publicar.", p: "Vou colar um conteúdo meu. Faça uma auditoria honesta respondendo: isso poderia ter sido publicado por qualquer corretora de Praia Grande? Tem algo concreto, como bairro, metragem, valor ou cena? Mostra como eu penso ou só o que eu sei? A primeira frase gera reação sem precisar de contexto? Seja direto, não elogie por educação." }
  ]
};

const REGUA = {
  usar: "Use quando o conteúdo estiver pronto e você quiser saber se ele realmente parece seu.",
  titulo: "Isso parece Julliana?",
  intro: "Antes de perguntar se está bom, pergunte: isso poderia ter sido publicado por qualquer corretora?",
  itens: [
    { t: "É cena ou é conceito?", d: "Cena ganha sempre.", falta: "Falta uma cena concreta. Conte um caso específico em vez de explicar a ideia." },
    { t: "Existe tensão?", d: "Se ninguém pode discordar, não há motivo para assistir até o fim.", falta: "Falta tensão. Encontre onde você discorda do que todo mundo acha." },
    { t: "Qualquer corretora poderia ter publicado isso?", d: "Se poderia, reescreva. A primeira frase é onde você deixa de ser intercambiável.", falta: "Está intercambiável. Reescreva a abertura com alguma coisa que só você viveu." },
    { t: "Tem algo concreto?", d: "Bairro, metragem, valor, cena, nome de rua.", falta: "Está no genérico. Coloque bairro, número ou nome. Sem isso vira conselho." },
    { t: "Estou explicando demais?", d: "Excesso de explicação parece justificativa.", falta: "Está explicando demais. Corte a explicação e deixe a afirmação sozinha." },
    { t: "Mostra como eu penso ou só o que eu sei?", d: "O que você sabe qualquer um pesquisa.", falta: "Falta a sua leitura. Mostre o raciocínio, não a informação." },
    { t: "A primeira frase gera reação sem contexto?", d: "Se precisa de três segundos de introdução, a pessoa já saiu.", falta: "O gancho precisa de aquecimento. Comece pela frase que hoje está no meio." },
    { t: "Isso poderia ter sido dito por quem nunca viveu o que eu vivi?", d: "Se sim, falta Julliana.", falta: "Falta você. Acrescente a cena, o erro ou a decisão que foi sua." }
  ]
};

/* =============================================================================
   04 · EXECUTAR
   ============================================================================= */
const PLANO = {
  usar: "Use quando estiver olhando para tudo isso e pensando: tá, mas o que eu faço primeiro?",
  titulo: "30 dias para começar a tornar a sua leitura perceptível.",
  sub: "O objetivo não é virar máquina de conteúdo. É fazer aparecer na tela o oito que já existe fora dela.",
  ritmo: "Três peças por semana. Stories sem meta, usados como coleta e laboratório: é onde você testa um gancho antes de virar reel e onde a conversa vira negócio.",
  semanas: [
    { w: "semana 1", t: "Recolher e arrumar", foco: "Antes de produzir, organizar a casa e começar a reparar nas cenas.", itens: [
      "Anotar três cenas da semana no bloco de notas",
      "Reescrever a bio para o território",
      "Tirar o post do Nexus do topo do perfil",
      "Reorganizar destaques pelos cinco pilares",
      "Publicar uma cena do pilar 2",
      "Publicar uma vitrine editada" ] },
    { w: "semana 2", t: "Traduzir", foco: "Pegar o que você anotou e transformar em peça.", itens: [
      "Passar duas das cenas anotadas pela ferramenta Da cena ao conteúdo",
      "Publicar um reel falado com punch",
      "Publicar um Acima do Horizonte",
      "Publicar uma peça de dor e desejo",
      "Stories: testar um gancho antes de gravar" ] },
    { w: "semana 3", t: "Ocupar", foco: "Entrar no assunto do mercado e mostrar a gestora.", itens: [
      "Publicar uma peça do pilar 4, radar ou reação",
      "Publicar um bastidor de mesa de gestão",
      "Publicar uma peça de critério e comparação",
      "Escrever a sua definição de alto padrão sem usar faixa de preço" ] },
    { w: "semana 4", t: "Ler o que voltou", foco: "Parar de produzir por um instante e olhar o retorno.", itens: [
      "Publicar duas peças sobre o assunto que mais gerou pergunta no direct",
      "Passar tudo pela régua e anotar onde falhou",
      "Escolher o formato que você quer dominar nos próximos 60 dias",
      "Decidir se aumenta a frequência ou mantém três" ] }
  ]
};

const OBSERVACAO = {
  usar: "Use toda sexta, antes de planejar a semana seguinte.",
  titulo: "Marca também se lê olhando o que voltou.",
  intro: "Responda em qualquer lugar onde você já anote. Não precisa ser aqui, e de propósito: essa página não guarda nada.",
  perguntas: [
    "O que gerou conversa, não alcance?",
    "O que foi salvo?",
    "Que pergunta chegou no direct que você não esperava?",
    "Alguém mencionou um conteúdo seu num atendimento?",
    "O que foi fácil de falar?",
    "O que pareceu forçado?"
  ],
  fecho: "Não procure o post que performou melhor. Procure o padrão do que gerou reconhecimento."
};

const AINDA_NAO = {
  usar: "Use quando alguém sugerir alguma coisa e você quiser lembrar o que já foi decidido.",
  grupos: [
    { g: "Precisa de evidência", cor: "ev", itens: [
      { t: "A mediana do ticket", d: "A média de R$ 1.023.752 pode estar puxada por poucos negócios grandes." },
      { t: "Preço de 2 dormitórios no Forte", d: "60% dos negócios foram dessa tipologia, mas o valor por tipo ainda não foi cruzado." },
      { t: "O comprador que mora em Praia Grande", d: "São 17 dos 45. Ainda não sabemos se é upgrade, primeira compra ou investimento." },
      { t: "A finalidade da compra", d: "Duas colunas na planilha que transformam a persona de leitura em fato." }
    ] },
    { g: "Precisa de decisão sua", cor: "de", itens: [
      { t: "O que é alto padrão para você", d: "Por escrito e sem usar faixa de preço. Sem isso, a série Isso é alto padrão não sobe." },
      { t: "A frase dos R$ 2 milhões", d: "É a linha mais afiada do Portfólio e a única que cria atrito direto com colega e construtor." },
      { t: "A tagline", d: "Só depois de 60 dias rodando os pilares, quando der para ver qual formulação o público repete de volta." },
      { t: "Ambição", d: "A evidência existe, mas você nunca usou essa palavra. Fica como pergunta, não como afirmação no manual." }
    ] },
    { g: "Decidimos não fazer agora", cor: "na", itens: [
      { t: "Institucional da Elite no seu perfil", d: "Tem canal próprio." },
      { t: "Conteúdo para corretor como eixo", d: "Fica nos 10%. Não vira pilar." },
      { t: "Consultoria para construtora", d: "Horizonte de cinco a dez anos, como você mesma definiu." },
      { t: "Colab em tudo", d: "36 das 51 publicações são colab. Metade da vitrine leva outro nome junto." }
    ] }
  ]
};

/* =============================================================================
   05 · REPERTÓRIO
   -----------------------------------------------------------------------------
   COLAR AQUI: os blocos abaixo estão com o método escrito e com os links
   esperando. Cole os links em "itens" no formato { t: "nome", u: "url", n: "por
   que vale" }. Enquanto estiver vazio, o bloco mostra que está sendo montado.
   ============================================================================= */
const REPERTORIO = {
  usar: "Use quando sentir que está repetindo as mesmas ideias.",
  titulo: "Onde alimentar a cabeça antes de alimentar o feed.",
  resumo: "Conteúdo bom não nasce de esforço. Nasce de entrada. Quando você para de ter o que dizer, quase sempre é porque parou de ver coisa nova.",
  ritual: {
    t: "O que fazer quando encontrar alguma coisa interessante",
    passos: [
      "Não pergunte: como eu posto isso?",
      "Pergunte: o que me chamou atenção?",
      "O que isso muda para o meu cliente?",
      "Eu concordo?",
      "Onde isso aparece em Praia Grande?",
      "Eu tenho alguma história que prova isso?"
    ],
    fecho: "Virou pauta? Leva para a ferramenta Da cena ao conteúdo."
  },
  blocos: [
    { t: "Selecionadas para você", serve: "Referências de conteúdo escolhidas para o seu caso, não uma pasta infinita de salvos.",
      quando: "Quando quiser ver como alguém resolveu um formato que você quer testar.",
      como: "Não copie o conteúdo. Entenda o mecanismo: por que aquele gancho funciona, o que a pessoa fez na primeira frase, como ela fechou.", itens: [] },
    { t: "Mercado imobiliário", serve: "Fontes nacionais para acompanhar movimento de mercado, preço e comportamento de compra.",
      quando: "Quando quiser trazer um dado de fora e cruzar com o que você vê aqui.",
      como: "Dado sozinho não vira conteúdo. Ele vira quando você diz o que aquilo significa em Praia Grande.", itens: [] },
    { t: "Baixada Santista", serve: "Fontes locais: jornal, prefeitura, lançamentos, obras.",
      quando: "Toda semana, mesmo sem intenção de postar.",
      como: "Notícia local é matéria-prima do pilar 1. Você não repassa a notícia, você lê o que ela revela.", itens: [] },
    { t: "Comportamento", serve: "O que está mudando na forma de morar, consumir e decidir.",
      quando: "Quando o conteúdo estiver muito técnico e pouco humano.",
      como: "Comportamento explica por que o produto mudou. É o que alimenta o pilar 2 e o pilar 4.", itens: [] },
    { t: "Livros", serve: "Curadoria de leitura para ampliar repertório fora do mercado.",
      quando: "Quando sentir que está repetindo as mesmas ideias há semanas.",
      como: "Livro não vira post. Vira jeito de pensar, e isso aparece sozinho depois.", itens: [] },
    { t: "Palestras", serve: "Conteúdo longo para assistir com calma.",
      quando: "Fim de semana, viagem, sala de espera.",
      como: "Anote uma frase por palestra. Uma só. Se não sobrou nenhuma, não era para você.", itens: [] },
    { t: "Equipamentos", serve: "A vitrine da Gi com o que usar para gravar.",
      quando: "Quando a qualidade do material estiver te travando, e só então.",
      como: "Comece com o essencial. Equipamento novo não resolve conteúdo morno.",
      itens: [ { t: "Vitrine de equipamentos da Gi", u: "https://collshp.com/gicarrilho/category/4273643?view=storefront", n: "Kit de gravação, do essencial ao avançado." } ] }
  ]
};

/* =============================================================================
   06 · AGORA É SEU
   ============================================================================= */
const EXERCICIOS = [
  { t: "Leitura do Cliente Ideal", d: "Prompt para rodar com IA em cerca de 30 minutos. Já vem com os números do relatório embutidos para a IA não inventar mercado.", tag: "persona" },
  { t: "Da cena ao conteúdo", d: "A ferramenta interativa está na área Criar. Use com uma cena real da sua semana.", tag: "conteúdo" }
];

const FECHAMENTO = {
  titulo: "Agora é seu.",
  txt: "A Leitura te mostrou o que já estava aí. Este Portfólio existe para você não precisar começar do zero toda vez que for comunicar.\n\nVolte para ele. Atualize. Teste. Observe o que volta.\n\nA sua marca não termina aqui. Ela começa a ficar perceptível daqui para a frente.",
  pedido: "Antes de fechar esta página, quero te pedir uma última coisa.",
  perguntas: [
    "O que você passou a enxergar sobre a sua marca que não enxergava antes?",
    "Qual parte da Leitura mais mexeu com você?",
    "Se alguém te perguntasse hoje como foi fazer uma Leitura de Marca comigo, o que você diria?"
  ],
  obrigada: "Obrigada por me deixar investigar a sua história. Agora vai colocar essa marca no mundo."
};

const MENTORIA = {
  titulo: "Mentoria de Ativação",
  txt: "Você consegue executar tudo isso sozinha. Foi para isso que este Portfólio foi construído.\n\nMas se em algum momento você quiser a minha leitura ao seu lado enquanto coloca essa marca em movimento, existe a Mentoria de Ativação: três meses de acompanhamento para transformar direção em execução, observar o que o mercado devolve e ajustar a rota.",
  cta: "Quero conhecer"
};

/* ===== fim ===== */

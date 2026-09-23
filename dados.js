/* =============================================================================
   CENTRAL DA MARCA · JULLIANA MARQUES
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
   ============================================================================= */

/* ---- identidade da entrega ---- */
const MARCA = {
  produto: "Central da Marca",
  cliente: "Julliana Marques",
  subtitulo: "Tudo o que reconhecemos sobre a sua marca, e as ferramentas para torná-la perceptível.",
  frase: "A Leitura termina. A Central continua."
};

const CONSULTORA = {
  nome: "Giovanna Carrilho",
  assinatura: "Corretora de Marca · estratégia de marca para corretoras",
  instagram: "@gicarrilho",
  email: "contato@gicarrilho.com.br",
  whatsapp: "https://gicarrilho.com/oie",
  cidade: "Santos"
};

/* ---- link das gravações dos encontros ---- */
const GRAVACOES = {
  link: "https://drive.google.com/drive/folders/1dCbVuqoKjkmcnOBD97AWJC2KVyeqfiXN?usp=sharing",
  itens: [
    { n: "Encontro 1", d: "01/09/2026", t: "Investigação", txt: "Onde as evidências apareceram. Notas, trajetória, as três cenas de cliente e equipe." },
    { n: "Encontro 2", d: "10/09/2026", t: "Reconhecimento e direção", txt: "Alto padrão, arquitetura entre Julliana, Elite e Nexus, e a decisão de território." },
    { n: "Encontro 3", d: "a realizar", t: "Entrega e ativação", txt: "A entrega desta Central e o combinado dos primeiros 30 dias." }
  ]
};

/* ---- atalhos da primeira tela ---- */
const ATALHOS = [
  { q: "Quero lembrar minha direção", para: "g1", d: "Leitura, território, manual e cliente" },
  { q: "Quero saber o que postar", para: "g2", d: "Pilares e banco de pautas" },
  { q: "Quero criar um conteúdo", para: "g3", d: "Da cena ao conteúdo, ferramentas e régua" },
  { q: "Quero saber o que fazer agora", para: "g4", d: "Plano de ação de 30 dias" }
];

/* =============================================================================
   01 · SUA MARCA
   ============================================================================= */

/* ---- retrato de entrada: as notas que ela mesma se deu ---- */
const NOTAS = [
  { v: 8, t: "reconhecimento do mercado" },
  { v: 8, t: "a marca gerando negócio" },
  { v: 5, t: "a sua comunicação hoje", baixa: true },
  { v: 6, t: "clareza do seu papel", baixa: true }
];

const DESCOMPASSO = {
  titulo: "A autoridade já existe. A comunicação ainda não a traduz.",
  txt: "Os dois oitos foram construídos em lugares fechados: mesa de negociação, reunião com construtor, a hora em que a equipe trava e te procura. Quem estava na sala viu. Mais ninguém. O cinco é o que sobra disso na tela.",
  txt2: "Esta Central existe para abrir a porta dessas salas, uma cena por vez."
};

/* ---- a essência: a frase-mãe da marca ---- */
const ESSENCIA = {
  frase: "Julliana faz você enxergar o que ainda não estava vendo.",
  desdobra: [
    "Uma possibilidade.",
    "Uma forma diferente de morar.",
    "Um movimento que já começou em outro mercado.",
    "Uma saída para um problema que parecia travado.",
    "Um próximo nível que parecia distante."
  ],
  fecho: "Ela tem o hábito de olhar por outros ângulos e mostrar esses ângulos para quem está ao lado dela.",
  prova: "Eu mostro várias perspectivas.",
  provaOnde: "Julliana, Sessão 1, falando de como atua quando alguém da equipe trava."
};

/* ---- território ---- */
const TERRITORIO = {
  campo: "A transformação de Praia Grande: seus imóveis, seu mercado e as pessoas que estão construindo o que vem depois.",
  lente: "Mostrar o que ainda não está sendo enxergado.",
  energia: "Expansão.",
  movimento: "Conhecer → enxergar → desejar → agir",
  nota: "O campo responde sobre o que ela fala. A lente responde o que acontece com quem escuta. Um sem o outro não funciona: campo sem lente vira catálogo, lente sem campo vira palestra motivacional.",
  forte: "É no Canto do Forte que ela prova que lê um bairro melhor que qualquer um. É com esse método que ela lê a cidade inteira. O bairro é o endereço da marca, não o teto dela."
};

const PRINCIPIOS = [
  { a: "preço", b: "padrão", txt: "O preço diz quanto custa. O padrão diz o que está incluído na vida de quem mora ali." },
  { a: "produto", b: "valor", txt: "Dois apartamentos iguais não valem a mesma coisa para a mesma pessoa." },
  { a: "característica", b: "critério", txt: "\"3 vagas\" está no anúncio. \"Nunca mais estacionar na rua\" está na cabeça de quem decide." },
  { a: "mostrar", b: "interpretar", txt: "Mostrar é catálogo. Interpretar é dizer para quem serve e para quem não serve." },
  { a: "morar aqui", b: "entender o mercado daqui", txt: "O morador sabe onde almoça no domingo. Não sabe qual quadra sustenta preço daqui a cinco anos." }
];

/* ---- arquitetura das frentes ---- */
const CAMADAS = [
  { nome: "Julliana", papel: "a leitura", txt: "O olhar, a direção, a perspectiva que ninguém mais está mostrando. É a camada onde o mercado já te reconhece e que hoje não tem voz própria em lugar nenhum." },
  { nome: "Elite", papel: "a prova", txt: "Não é o assunto da sua marca. É a evidência de que a sua leitura funciona no mundo real." },
  { nome: "Nexus", papel: "a multiplicação", txt: "Não é um produto no seu perfil. É a prova de que outras pessoas adotam o seu jeito de enxergar." },
  { nome: "Construtoras", papel: "o horizonte · 5 a 10 anos", futuro: true, txt: "Fica disponível para quem é lido como leitura de mercado, não como vendedor de estoque." }
];

/* =============================================================================
   MANUAL DA MARCA
   ============================================================================= */
const MANUAL = [
  { k: "A fala de quem chega até ela", v:
    "\"Eu sei mais ou menos o que estou procurando. Só não sei se estou olhando para tudo que deveria.\"\n\nE, mais fundo: \"talvez exista uma possibilidade melhor que eu ainda nem conheço.\"\n\nNo caso do investidor local, a fala é outra: \"não é se eu compro. É se vale mais a pena aqui do que onde o meu dinheiro está agora.\"" },

  { k: "O que ela ajuda a fazer", v:
    "Ver outras possibilidades.\nComparar além do óbvio.\nEntender o que realmente muda de uma escolha para outra.\nConhecer o que você ainda não sabia que deveria procurar.\nImaginar a vida dentro daquela escolha antes de decidir.\nPerceber quando aquilo que parecia ideal não serve para você." },

  { k: "O que fica em quem passa por ela", v:
    "Possibilidade. \"Eu não sabia que isso existia.\"\nDesejo. \"Agora que conheci, consigo imaginar isso para mim.\"\nExpansão. \"Tem mais mundo do que eu estava vendo.\"\nConfiança. \"Ela vai me mostrar coisas que eu talvez não encontrasse sozinha.\"\nMovimento. \"Agora eu sei qual pode ser o meu próximo passo.\"\n\nSegurança e clareza continuam existindo. Mas como consequência, não como promessa." },

  { k: "No que ela acredita", v:
    "É difícil querer uma possibilidade que você ainda não conhece.\n\nÀs vezes o próximo passo começa simplesmente conhecendo o que existe além.\n\nEla mesma é a prova: a primeira venda de um milhão, aos 18 anos, \"mudou minha percepção sobre as coisas, mudou minha mentalidade sobre a vida\". E ela diz que aprendeu a multiplicar isso em todos os outros atendimentos." },

  { k: "Bandeiras", v:
    "Praia Grande precisa ser olhada pelo que está se tornando, não só pelo que já foi.\n\nPreço alto não é alto padrão.\n\nCumprir a lista não significa fazer a escolha certa.\n\nQuem está perto do comprador enxerga mudanças que o mercado precisa ouvir.\n\nE a crença que carrega as quatro: quem enxerga primeiro, mostra." },

  { k: "Personalidade", v:
    "Curiosa. Quer conhecer por dentro.\nAtenta. Percebe movimento, comportamento, detalhe.\nProvocadora. Mostra outro ângulo sem entregar a resposta pronta.\nGenerosa. Não guarda a descoberta para si. Leva equipe, cliente e parceiro junto.\nExigente. Não confunde mais caro com melhor.\nRealizadora. Referência só vale quando vira movimento." },

  { k: "Valores", v:
    "Crescimento. Sempre existe um próximo nível possível.\nCuriosidade. É preciso conhecer antes de concluir.\nVerdade. Nem tudo que ela pode vender deveria ser vendido para aquela pessoa.\nGente. Crescer levando pessoas junto.\nMovimento. Conhecimento precisa mudar alguma coisa." },

  { k: "Propósito", v:
    "Abrir novas perspectivas para que pessoas e mercados possam ir além do que já conhecem." },

  { k: "Promessa", v:
    "Como marca: você vai enxergar possibilidades que antes não estavam no seu campo de visão.\n\nNo atendimento: Julliana ajuda você a enxergar além do imóvel que estava procurando, para entender a escolha que realmente faz sentido para a vida que quer construir." },

  { k: "Ideal de marca", v:
    "Uma Praia Grande que cresce não apenas construindo mais, mas enxergando maior." },

  { k: "Tom de voz", v:
    "Direto sem ser ríspido. Concreto sempre: bairro, metragem, valor, cena, nome de rua. Fala como quem já viu acontecer, não como quem leu. Discorda de frente, com cuidado. Não usa superlativo nem \"imperdível\", \"oportunidade única\", \"realize seu sonho\". Não motiva, mostra. Quando não sabe, diz que não sabe. Nunca guru, nunca coach, nunca vendedora de sonho." },

  { k: "Imagem projetiva", v:
    "Praia de verdade, não praia de cartão postal. Luz natural, fim de tarde, vento. O bairro aparece: calçada, praça, orla, a padaria da esquina.\n\nMovimento em vez de pose: caminhando, olhando um apartamento vazio, medindo com o olho, apontando alguma coisa na rua.\n\nRoupas confortáveis e bem cortadas, sem logomarca aparente. Paleta de areia, madeira, verde e o azul do mar em tom real.\n\nO que nunca entra: taça, mármore em close, chave na mão, foto em frente a carro, legenda de \"conquista realizada\". Ela ostenta trajetória, não patrimônio." },

  { k: "O que ela não é e não quer parecer", v:
    "Não é conteúdo de luxo. Mármore e closet qualquer perfil copia em uma semana.\n\nNão disputa o imóvel mais caro do mês. Isso depende de quem pegou a melhor captação.\n\nNão é o canal institucional da Elite. \"Eu, Julliana, não vou vender essa comunicação.\"\n\nNão é gestora da teoria. \"Eu não quero ser a gestora da teoria.\" Toda leitura nasce de caso real." }
];

/* ---- arquétipos ---- */
const ARQUETIPOS = [
  { t: "MAGO", s: "principal · faz enxergar diferente", txt:
    "Julliana não precisa dar todas as respostas. O papel dela é mostrar uma perspectiva que a pessoa ainda não havia considerado, e a partir daí ela própria enxerga o próximo passo. \"Eles já sabem a resposta, só não têm a confiança de seguir. Eu mostro várias perspectivas e ele sozinho busca a solução.\"" },
  { t: "EXPLORADOR", s: "secundário · vai ver antes de falar", txt:
    "Conhece outros mercados, produtos, cidades e experiências. Sai do conhecido para ampliar o que consegue enxergar, e depois traz essa visão para perto. Balneário virou conversa com construtor e depois virou lançamento no Canto do Forte." },
  { t: "GOVERNANTE", s: "apoio · eleva a régua do ambiente", txt:
    "Não quer apenas crescer sozinha. Cria estrutura, organiza, lidera e provoca o mercado ao redor. Elite, Nexus, código de ética escrito junto com os membros, e a recusa de comunicar o varejo." },
  { t: "A JORNADA DE HEROÍNA", s: "a origem, não o arquétipo", tensao: true, txt:
    "A história é de manual: origem na zona três, nove meses sem vender nada, a escolha entre ir embora com a mãe ou ficar, os vinte reais entre almoçar e anunciar, a venda de um milhão aos 18 e o carro zero. Mas essa jornada já aconteceu. Na marca, quem é herói é o cliente, o corretor e a equipe. Ela é quem mostra o caminho. Ela própria já faz isso: depois de contar os vinte reais, ela não fecha em \"olha o que eu consegui\", fecha em \"imagina você o que você consegue fazer\"." },
  { t: "A TENSÃO", s: "a sombra do Governante", tensao: true, txt:
    "Ela tem a autoridade e recusa ocupá-la. \"Não sei se é porque eu tenho receio de ter esses traços de alto ego, então eu sempre vou me policiando para não ser essa pessoa.\" O sintoma é a autoridade terceirizada: o post fixado é do Nexus, a grade é da Elite, a agência apresenta como novidade o que ela dizia há dois anos e meio. É por isso que a bandeira \"quem enxerga primeiro, mostra\" importa tanto: transforma aparecer em responsabilidade, não em exibição." }
];

/* ---- manifesto ---- */
const MANIFESTO = "Existe uma conta que quase todo mundo faz antes de comprar um imóvel aqui.\n\nQuanto eu tenho. Quantos dormitórios cabem nisso. Que bairro cabe nisso.\n\nÉ uma conta honesta. E ela está incompleta.\n\nPorque eu já vi gente conseguir exatamente o que pediu e passar um ano infeliz. Vista para o mar por quatrocentos mil. Estava lá. Era real. Era o que ela tinha pedido. E mesmo assim ela achou que tinha errado a cidade.\n\nEla não errou a cidade. Errou o bairro. E ninguém explicou a diferença para ela antes de assinar.\n\nEu acredito que o problema quase nunca é o quanto a pessoa tem. É o quanto ela consegue enxergar do lugar onde está colocando isso.\n\nÉ difícil querer uma possibilidade que você ainda não conhece.\n\nEu não acho que o meu trabalho seja mostrar imóvel. Mostrar imóvel qualquer um mostra, e hoje o cliente vê tudo sozinho no celular antes de me ligar.\n\nO meu trabalho é mostrar o que ele ainda não estava vendo. Para quem serve, para quem não serve, e por quê. E dizer não quando é não, mesmo quando o não derruba a venda.\n\nEu moro aqui. Eu comprei aqui. Eu erro e acerto aqui há doze anos. Sei qual quadra pega vento, qual calçada tem sombra às quatro da tarde, qual prédio envelheceu bem e qual só parecia bom no folder.\n\nIsso não está em anúncio nenhum.\n\nPraia Grande está mudando mais rápido do que a conversa sobre ela. Sobe prédio, sobe preço, chega gente de fora, muda o que as pessoas pedem. E quase ninguém está explicando isso em voz alta.\n\nEu vou explicar.\n\nNão para vender mais rápido. Para que quem compra aqui compre enxergando o que está comprando. E para que essa cidade pare de ser vendida como se fosse só metro quadrado com vista.\n\nPorque às vezes a pessoa pode mais. Só não sabia que podia.";

/* =============================================================================
   CLIENTE IDEAL
   ============================================================================= */
const CLIENTE_NUMEROS = [
  { v: "22 de 45", t: "moram na Baixada Santista", d: "17 em Praia Grande e 5 em São Vicente" },
  { v: "20 de 45", t: "vêm da Grande São Paulo", d: "12 da capital, 4 de São Bernardo, 4 do ABC e Barueri" },
  { v: "26 de 45", t: "compraram no Canto do Forte", d: "Guilhermina 7, Aviação 5, Boqueirão 4" },
  { v: "27 de 45", t: "são de 2 dormitórios", d: "3 dormitórios em 11 negócios, 1 dormitório em 6" }
];

const PERFIS = [
  { n: "01", t: "O da cidade que está fazendo conta", pct: "cerca de metade",
    quem: "Empresário, dono de comércio, construtor, comerciante em expansão. Mora aqui. Não é o primeiro imóvel: é o terceiro, quarto ou quinto.",
    decide: "Não é onde morar. É onde colocar o dinheiro. Ele compara com o rendimento que já tem em outro lugar.",
    teme: "Tirar de onde está rendendo e colocar num bairro que não sustenta o valor. Comprar o prédio que envelhece mal enquanto o da esquina valoriza.",
    naoSabe: "Qual quadra sustenta preço. Qual prédio revende. O que vai subir primeiro. O que a cidade ainda não tem e vai ter.",
    entra: "Ele conhece a cidade como morador. Ela conhece como mercado. São duas coisas diferentes.",
    fala: "É um cara que vem fazendo conta. Será que vale a pena eu tirar de um lugar e colocar em outro? Então como que eu ajudo ele a tomar essa decisão?" },

  { n: "02", t: "O de fora, de veraneio com ticket maior", pct: "cerca de 44%",
    quem: "Mora muito bem em São Paulo ou no interior. Em geral acima de 45 anos, com família. Segunda ou terceira residência.",
    decide: "Não é preço. É adequação. Ele compara com o padrão que já vive.",
    teme: "Descobrir que a cidade não entrega o que ele está acostumado. E o medo é legítimo: Praia Grande ainda tem limitação de gastronomia e hotelaria para esse público.",
    naoSabe: "Qual bairro entrega o padrão que ele quer. O que muda entre alta e baixa temporada. O que é real e o que é folder.",
    entra: "A cena da cliente do Caiçara: conseguiu exatamente o que pediu e achou que tinha errado a cidade.",
    fala: "É um veraneio com ticket maior, que tem bom gosto, que mora muito bem em São Paulo, e quer ter um apartamento muito bom na praia." },

  { n: "03", t: "O regional que está vendo o potencial", pct: "Santos, São Vicente e região",
    quem: "Já conhecia a cidade, muitas vezes teve parente aqui, está acompanhando a evolução.",
    decide: "Arbitragem. O mesmo dinheiro comprando melhor um pouco mais adiante.",
    teme: "Chegar tarde no movimento, ou apostar num trecho que não se desenvolve.",
    naoSabe: "Onde o desenvolvimento está de fato acontecendo e onde é só promessa de lançamento.",
    entra: "Ele já enxerga o potencial. Falta alguém que mostre onde ele está e onde ele não está.",
    fala: "Consegue comprar um produto melhor com preço mais OK comparado a Santos, e está enxergando um potencial de desenvolvimento na cidade." }
];

const CLIENTE_COMUM = {
  t: "O que os três têm em comum",
  txt: "Nenhum está comprando o primeiro imóvel. Nenhum precisa de ajuda para conseguir comprar. Os três estão decidindo onde, não se. E os três carregam o mesmo medo com roupas diferentes: descobrir depois que o dinheiro foi para o lugar errado da cidade.",
  falta: "O corte que ainda falta na planilha: a finalidade da compra, ou seja, moradia própria, veraneio ou investimento, cruzada com bairro e tipologia. Com essa coluna, a leitura acima deixa de ser hipótese e vira fato."
};

/* =============================================================================
   02 · SEU CONTEÚDO
   ============================================================================= */
const DISTRIBUICAO = [
  { pc: 50, cor: "b1", t: "cliente final, sem produto", d: "Cidade, mercado, comportamento, o que muda de uma escolha para outra." },
  { pc: 20, cor: "b2", t: "cliente final, com produto", d: "Imóvel específico, sempre dentro do sistema do pilar 3." },
  { pc: 20, cor: "b3", t: "dupla leitura", d: "Serve ao cliente na superfície e ao mercado no fundo." },
  { pc: 10, cor: "b4", t: "mercado direto", d: "Nexus, gestão, visão de construtora." }
];

const PILARES = [
  { id: "p1", n: "01", nome: "Praia Grande por dentro",
    pergunta: "O que está mudando aqui e quem já percebeu?",
    constroi: "\"Ela entende essa cidade de um jeito que eu não entendo.\"",
    editorias: [
      { t: "ACIMA DO HORIZONTE", d: "A cidade narrada de cima. Imagem aérea com história por trás. Nome que já é seu e nasceu literal." },
      { t: "O FORTE POR DENTRO", d: "O bairro de 26 dos 45 negócios, nas duas leituras: como é morar ali e como é comprar ali. Rotina e mercado no mesmo conteúdo." },
      { t: "PG EM MOVIMENTO", d: "Obra nova, bairro que virou, o que encareceu, o que a cidade ainda não tem. Leitura de movimento, não notícia." },
      { t: "ONDE O DINHEIRO ESTÁ INDO", d: "A camada de mercado para quem já mora aqui: o que sustenta preço, o que revende, o que é promessa de folder." }
    ] },

  { id: "p2", n: "02", nome: "Como quem compra escolhe",
    pergunta: "O que realmente acontece na cabeça de alguém no momento de decidir?",
    constroi: "\"Ela entende o que eu estou sentindo e eu nem tinha falado.\"",
    editorias: [
      { t: "O QUE VOCÊ NÃO ABRE MÃO?", d: "A pergunta que revela o que a pessoa realmente quer, e que quase ninguém faz antes de mostrar imóvel." },
      { t: "VIDA REAL", d: "O que acontece depois da chave: vizinho, barulho, mercado a pé, a praia que você usa e a que só olha." },
      { t: "ANTES DE DECIDIR", d: "Os erros que ela vê de perto, contados como cena, nunca como lista de dicas." }
    ] },

  { id: "p3", n: "03", nome: "Imóvel com critério",
    pergunta: "Um imóvel, três peças. Não é editoria, é sistema.",
    constroi: "\"Ela não me mostra imóvel. Ela me mostra o que aquele imóvel significa.\"",
    editorias: [
      { t: "VITRINE EDITADA", d: "Foto protagonista e ficha selecionada. Três informações, no máximo quatro." },
      { t: "DOR E DESEJO", d: "O atributo vira a cena que acaba na vida da pessoa." },
      { t: "CRITÉRIO E COMPARAÇÃO", d: "Para quem eu mostraria esse e para quem eu não mostraria." }
    ] },

  { id: "p4", n: "04", nome: "O mercado que está chegando",
    pergunta: "O que muda aqui antes de a cidade perceber?",
    constroi: "\"Ela viu antes. Vale a pena ouvir o que ela está vendo agora.\"",
    editorias: [
      { t: "ISSO É ALTO PADRÃO?", d: "A série que estabelece a leitura dela em público. Precisa da validação dela antes de subir." },
      { t: "RADAR DO MERCADO", d: "O que ela traz de fora e o que disso chega aqui em dois, cinco anos. Balneário, os Estados Unidos, o que ela vê em outro lugar." },
      { t: "O QUE O COMPRADOR JÁ PERCEBEU", d: "O que as pessoas pararam de pedir e o que virou inegociável, antes de o construtor entender." }
    ] },

  { id: "p5", n: "05", nome: "Bastidores Julliana",
    pergunta: "Quem é a pessoa por trás da leitura, sem virar lifestyle.",
    constroi: "\"Ela chegou onde chegou. E continua mostrando o caminho.\"",
    editorias: [
      { t: "NA MESA DE GESTÃO", d: "Decisão difícil, negociação travada, a hora em que a equipe a procura. É aqui que o oito fica visível." },
      { t: "NO NEXUS", d: "Critério de entrada, código de ética, o mercado que ela quer ver existir." },
      { t: "FORA DA BOLHA", d: "Viagem, feira, projeto. Nunca \"olha onde eu estou\". Sempre \"olha o que eu vi aqui que mudou a minha régua\"." },
      { t: "DE ONDE EU VIM", d: "A jornada, contada para corretor e equipe. Nove meses sem vender, os vinte reais, a venda de um milhão aos 18. Sempre virada para fora: imagina você o que você consegue fazer." }
    ] }
];

/* ---- banco de pautas ----
   objetivo usa a mesma taxonomia da sua biblioteca de referências:
   Conectar e Engajar · Atrair Seguidores · Gerar Autoridade · Vender e Converter
   origem: cena · dado · observação · história · mercado                        */
const PAUTAS = [
  { p:"p1", f:"reel narrado", o:"Gerar Autoridade", org:"observação", g:"Esse trecho aqui tinha três casas há oito anos.", n:"Imagem aérea do antes e do agora. Termine dizendo o que isso fez com o preço da quadra." },
  { p:"p1", f:"reel narrado", o:"Atrair Seguidores", org:"observação", g:"De cima dá para ver o que nenhum folder mostra: onde o sol bate às 16h.", n:"Drone sobre o Forte no fim da tarde. Leitura sobre orientação solar e valor." },
  { p:"p1", f:"reel falado", o:"Gerar Autoridade", org:"mercado", g:"A obra que está subindo na Guilhermina vai mudar o preço da sua quadra.", n:"Grave na frente da obra. Três consequências concretas, nada de opinião genérica." },
  { p:"p1", f:"carrossel", o:"Conectar e Engajar", org:"história", g:"Cinco coisas que Praia Grande tinha em 2019 e não tem mais.", n:"Use fotos reais. Feche com o que isso revela sobre quem está chegando na cidade." },
  { p:"p1", f:"reel falado", o:"Gerar Autoridade", org:"observação", g:"Canto do Forte não é um bairro só. São três, e o preço muda de quadra em quadra.", n:"Ande pelo bairro mostrando os cortes. É a leitura que ninguém está fazendo em público." },
  { p:"p1", f:"reel falado", o:"Conectar e Engajar", org:"cena", g:"Morar de frente para o mar no Forte: o que ninguém te conta sobre o vento.", n:"Cena real, não conceito. Fale de maresia, esquadria e manutenção." },
  { p:"p1", f:"carrossel", o:"Atrair Seguidores", org:"cena", g:"Um dia comum no Canto do Forte, das 7h às 22h.", n:"Hora a hora, com foto. Mostra rotina, não paisagem." },
  { p:"p1", f:"reel falado", o:"Gerar Autoridade", org:"dado", g:"Você mora aqui há vinte anos e ainda não sabe onde o dinheiro está indo.", n:"A camada de mercado para o morador. Conhecer a cidade não é conhecer o mercado da cidade." },
  { p:"p1", f:"tela dividida", o:"Gerar Autoridade", org:"mercado", g:"Esse lançamento promete bairro nobre. Vamos olhar o mapa juntos.", n:"Reaja a um anúncio real. Leia o que o projeto revela sobre quem ele quer atender." },

  { p:"p2", f:"reel falado", o:"Conectar e Engajar", org:"cena", g:"O imóvel perfeito provavelmente não existe. E quanto antes você aceitar isso, melhor você compra.", n:"Gancho, cena do Caiçara, leitura, pergunta final. Quarenta e cinco segundos." },
  { p:"p2", f:"reel falado", o:"Gerar Autoridade", org:"cena", g:"A pergunta que eu faço antes de mostrar qualquer imóvel: do que você não abre mão?", n:"Conte duas respostas reais que você já ouviu e o que cada uma mudou na busca." },
  { p:"p2", f:"reel falado", o:"Conectar e Engajar", org:"cena", g:"Ela conseguiu exatamente o que pediu. E passou um ano infeliz.", n:"Cena do Caiçara inteira. Feche com: não errou a cidade, errou o bairro." },
  { p:"p2", f:"carrossel", o:"Conectar e Engajar", org:"observação", g:"Você não está comprando metro quadrado. Está comprando o seu sábado de manhã.", n:"Cada slide é uma cena de sábado em um bairro diferente." },
  { p:"p2", f:"carrossel", o:"Gerar Autoridade", org:"dado", g:"A conta do anúncio não é a conta real. Faltam quatro linhas.", n:"Condomínio, IPTU, reforma, vaga. Com números de verdade." },
  { p:"p2", f:"reel falado", o:"Atrair Seguidores", org:"observação", g:"Localização você não muda. Cozinha você reforma. Decida nessa ordem.", n:"Curto, direto, sem cena. Funciona bem como corte de um vídeo maior." },
  { p:"p2", f:"reel falado", o:"Gerar Autoridade", org:"observação", g:"Todo mundo pede vista mar. Quase ninguém pergunta para que lado.", n:"Sol da manhã, sol da tarde, e o que isso faz com a conta de luz e com a rotina." },
  { p:"p2", f:"tela dividida", o:"Gerar Autoridade", org:"mercado", g:"O erro mais caro que eu vejo: escolher pela planta e não pela rotina.", n:"Reaja a uma planta de lançamento apontando onde a vida real não cabe." },

  { p:"p3", f:"carrossel vitrine", o:"Vender e Converter", org:"dado", g:"Canto do Forte. 129 m². 3 vagas.", n:"Peça 1. Foto protagonista e três informações. Nada de ficha completa." },
  { p:"p3", f:"carrossel dor e desejo", o:"Vender e Converter", org:"cena", g:"Chega de estacionar o carro da sua esposa na rua.", n:"Peça 2 do mesmo imóvel. O slide 4 diz para quem isso não importa." },
  { p:"p3", f:"carrossel critério", o:"Gerar Autoridade", org:"observação", g:"Com R$ 1,2 milhão no Canto do Forte, para quem eu mostraria esse e para quem não mostraria.", n:"Peça 3. É a única que ninguém consegue copiar." },
  { p:"p3", f:"carrossel dor e desejo", o:"Vender e Converter", org:"cena", g:"Chega de fechar a cortina para ter privacidade dentro da própria sala.", n:"Atributo: vista livre. Mesma lógica da peça 2." },
  { p:"p3", f:"carrossel critério", o:"Gerar Autoridade", org:"observação", g:"Dois apartamentos, mesmo preço, mesma quadra. Eu escolheria um. Te explico por quê.", n:"Use dois imóveis reais da carteira. Costuma puxar conversa no direct, confira." },
  { p:"p3", f:"carrossel vitrine", o:"Atrair Seguidores", org:"observação", g:"Três informações. É tudo que você precisa saber antes de querer visitar.", n:"Prove que menos ficha gera mais pergunta." },

  { p:"p4", f:"reel falado", o:"Gerar Autoridade", org:"mercado", g:"Nem todo apartamento de R$ 2 milhões é alto padrão. Às vezes ele só custa R$ 2 milhões.", n:"Precisa da sua validação antes de subir. Cria atrito com produto de colega e com construtor.", pendente:true },
  { p:"p4", f:"reel falado", o:"Gerar Autoridade", org:"mercado", g:"Voltei de Balneário com uma lista. Três dessas coisas chegam aqui em cinco anos.", n:"Você já fez isso antes de virar lançamento. Agora faça em público." },
  { p:"p4", f:"reel narrado", o:"Gerar Autoridade", org:"mercado", g:"Toda vez que eu viajo eu reparo no que aquela cidade já normalizou e a nossa ainda trata como novidade.", n:"A peça que transforma a viagem aos Estados Unidos em trabalho. Planeje o que observar antes de embarcar." },
  { p:"p4", f:"carrossel", o:"Gerar Autoridade", org:"dado", g:"O que o comprador parou de pedir em 2026.", n:"Baseie nos negócios que você viu fechar. Leitura de comportamento, não palpite." },
  { p:"p4", f:"tela dividida", o:"Gerar Autoridade", org:"mercado", g:"Esse projeto foi desenhado para quem? Vou ler o que ele revela.", n:"Reaja a um lançamento da cidade, sem citar nome de concorrente." },
  { p:"p4", f:"reel falado", o:"Gerar Autoridade", org:"cena", g:"O construtor devia consultar o corretor antes de lançar. Vou explicar por quê.", n:"Sua frase da sessão. É o conteúdo que abre porta de construtora." },

  { p:"p5", f:"reel falado", o:"Gerar Autoridade", org:"cena", g:"A negociação travou. A equipe me procurou. O que eu falei.", n:"Bastidor de gestão. É aqui que o oito de reconhecimento finalmente fica visível." },
  { p:"p5", f:"reel falado", o:"Gerar Autoridade", org:"história", g:"Por que eu recuso gente no Nexus.", n:"Critério de entrada e ética. Pouco volume, muito peso." },
  { p:"p5", f:"reel narrado", o:"Conectar e Engajar", org:"história", g:"Isso aqui mudou a minha régua.", n:"Regra fixa: nunca \"olha onde eu estou\", sempre \"olha o que eu vi aqui\"." },
  { p:"p5", f:"reel falado", o:"Conectar e Engajar", org:"história", g:"Eu tinha vinte reais. Ou eu almoçava, ou eu anunciava o apartamento.", n:"A cena inteira, incluindo o fecho virado para fora: imagina você o que consegue fazer." },
  { p:"p5", f:"reel falado", o:"Conectar e Engajar", org:"história", g:"Fiquei nove meses sem vender nada. Era tímida demais para ligar para um cliente.", n:"Para corretor iniciante, essa história é espelho. Feche com o que te fez não desistir." },
  { p:"p5", f:"carrossel", o:"Conectar e Engajar", org:"história", g:"De onde eu vim até aqui, sem novela.", n:"Trajetória como prova de percurso, não como conteúdo de superação." }
];

/* =============================================================================
   03 · CRIAR
   ============================================================================= */
const CADEIA = [
  { t: "ACONTECEU", p: "O que você viu, ouviu ou viveu?", d: "O fato cru, com bairro, valor, pessoa." },
  { t: "VOCÊ PERCEBEU", p: "O que chamou a sua atenção?", d: "O detalhe que ninguém mais viu." },
  { t: "ISSO REVELA", p: "O que existe por trás da cena?", d: "O que o detalhe diz sobre o mercado ou sobre quem compra." },
  { t: "SUA LEITURA", p: "O que você pensa sobre isso?", d: "A sua posição. Onde você discorda do que todo mundo acha." },
  { t: "CONTE", p: "Qual é a melhor forma de tornar isso visível?", d: "Formato, gancho e remate." }
];

const CADEIA_EXEMPLOS = [
  { t: "A cliente do Caiçara", l: [
    "Uma cliente comprou vista mar por 400 mil no Caiçara.",
    "Ela repetia que tinha errado a cidade.",
    "Ninguém explicou a diferença entre os bairros antes de ela assinar.",
    "Cumprir a lista não é fazer a escolha certa. O que importa é a vida que se leva ali.",
    "Reel falado, 45 segundos. \"O imóvel perfeito provavelmente não existe.\"" ] },
  { t: "O construtor", l: [
    "Você voltou de Balneário e disse ao Jamil o que seria tendência em cinco anos.",
    "Aquilo entrou no lançamento dele, no Canto do Forte.",
    "O construtor lança a partir da cabeça dele, não da do comprador.",
    "Quem atende o cliente todo dia enxerga antes o que vai agregar valor.",
    "Reel falado. \"O construtor devia consultar o corretor antes de lançar.\"" ] },
  { t: "A equipe", l: [
    "A negociação travou e a equipe te procurou.",
    "Eles já sabiam a resposta.",
    "Faltava confiança de seguir o próprio julgamento, não informação.",
    "Sua função ali não é decidir. É mostrar a outra perspectiva.",
    "Bastidor de gestão. Sem nome, sem valor, só a cena." ] }
];

const CADEIA_FILTRO = [
  "Se você não consegue preencher a linha \"sua leitura\", não é conteúdo. É notícia.",
  "Se a leitura é algo com que ninguém discordaria, não é conteúdo. É lembrete.",
  "Se contar expõe o cliente, não é conteúdo. Guarde a cena e conte outra."
];

const CADEIA_HABITO = "Toda sexta, três cenas da semana no bloco de notas do celular. Uma linha cada, sem caprichar. Essas três linhas são a sua pauta da semana seguinte.";

const REGUA = [
  { t: "É cena ou é conceito?", d: "Cena ganha sempre." },
  { t: "Existe tensão?", d: "Se ninguém pode discordar, não há motivo para assistir até o fim." },
  { t: "Qualquer corretora poderia ter publicado isso?", d: "Se poderia, reescreva. A primeira frase é onde você deixa de ser intercambiável." },
  { t: "Tem algo concreto?", d: "Bairro, metragem, valor, cena. Se está no genérico, é conselho e não leitura." },
  { t: "Estou explicando demais?", d: "Excesso de explicação parece justificativa." },
  { t: "Mostra como eu penso ou só o que eu sei?", d: "O que você sabe qualquer um pesquisa." },
  { t: "A primeira frase gera reação sem contexto?", d: "Se precisa de três segundos de introdução, a pessoa já saiu." },
  { t: "Isso poderia ter sido dito por alguém que nunca viveu o que eu vivi?", d: "Se sim, falta Julliana." }
];

/* =============================================================================
   04 · EXECUTAR
   ============================================================================= */
const PLANO = {
  titulo: "30 dias para começar a tornar a sua leitura perceptível.",
  sub: "O objetivo não é virar máquina de conteúdo. É fazer aparecer na tela o oito que já existe fora dela.",
  ritmo: "Três peças por semana. Stories sem meta, usados como coleta e laboratório: é onde você testa um gancho antes de virar reel e onde a conversa vira negócio."
};

const SEMANAS = [
  { w: "semana 1", t: "Recolher e arrumar", itens: [
    "Anotar três cenas da semana no bloco de notas",
    "Reescrever a bio para o território",
    "Tirar o post do Nexus do topo do perfil",
    "Reorganizar destaques pelos cinco pilares",
    "2 peças: uma cena do pilar 2 e uma vitrine editada" ] },
  { w: "semana 2", t: "Traduzir", itens: [
    "Passar duas das cenas anotadas pela cadeia da seção Criar",
    "1 reel falado com punch",
    "1 Acima do Horizonte",
    "1 peça de dor e desejo",
    "Stories: testar um gancho antes de gravar" ] },
  { w: "semana 3", t: "Ocupar", itens: [
    "1 peça do pilar 4, radar ou reação",
    "1 bastidor de mesa de gestão",
    "1 peça de critério e comparação",
    "Escrever a sua definição de alto padrão sem usar faixa de preço" ] },
  { w: "semana 4", t: "Ler o que voltou", itens: [
    "2 peças sobre o assunto que mais gerou pergunta no direct",
    "Passar tudo pela régua e anotar onde falhou",
    "Escolher o formato que você quer dominar nos próximos 60 dias",
    "Decidir se aumenta a frequência ou mantém três" ] }
];

const OBSERVACAO = {
  titulo: "Marca também se lê olhando o que voltou.",
  intro: "Toda sexta, olhe para trás e responda em qualquer lugar onde você já anote. Não precisa ser aqui.",
  perguntas: [
    "O que gerou conversa, não alcance?",
    "O que foi salvo?",
    "Que pergunta chegou no direct que você não esperava?",
    "Alguém mencionou um conteúdo seu em um atendimento?",
    "O que foi fácil de falar?",
    "O que pareceu forçado?"
  ],
  fecho: "Não procure o post que performou melhor. Procure o padrão do que gerou reconhecimento."
};

const AINDA_NAO = [
  { g: "Precisa de evidência", cor: "ev", itens: [
    { t: "A mediana do ticket", d: "A média de R$ 1.023.752 pode estar puxada por poucos negócios grandes." },
    { t: "Preço de 2 dormitórios no Forte", d: "60% dos negócios foram dessa tipologia, mas o valor por tipo ainda não foi cruzado." },
    { t: "O comprador que mora em Praia Grande", d: "São 17 dos 45. Ainda não sabemos se é upgrade, primeira compra ou investimento." },
    { t: "A finalidade da compra", d: "Duas colunas na planilha que transformam a persona de hipótese em fato." }
  ] },
  { g: "Precisa de decisão sua", cor: "de", itens: [
    { t: "O que é alto padrão para você", d: "Por escrito, sem usar faixa de preço. Sem isso a série Isso é alto padrão não sobe." },
    { t: "A frase dos R$ 2 milhões", d: "É a linha mais afiada da Central e a única que cria atrito direto com colega e construtor." },
    { t: "A tagline", d: "Só depois de 60 dias rodando os pilares, quando der para ver qual formulação o público repete de volta." },
    { t: "Ambição", d: "A evidência existe, mas você nunca usou a palavra. Fica como pergunta, não como afirmação no manual." }
  ] },
  { g: "Decidimos não fazer agora", cor: "na", itens: [
    { t: "Institucional da Elite no seu perfil", d: "Tem canal próprio." },
    { t: "Conteúdo para corretor como eixo", d: "Fica nos 10%. Não vira pilar." },
    { t: "Consultoria para construtora", d: "Horizonte de 5 a 10 anos, como você mesma definiu." },
    { t: "Colab em tudo", d: "36 das 51 publicações são colab. Metade da vitrine leva outro nome junto." }
  ] }
];

/* =============================================================================
   05 · AGORA É SEU
   ============================================================================= */
const EXERCICIOS = [
  { t: "Leitura do Cliente Ideal", d: "Prompt para rodar com IA em cerca de 30 minutos. Já vem com os números do relatório embutidos para a IA não inventar mercado.", tag: "persona" },
  { t: "Da cena ao conteúdo", d: "A cadeia de cinco tempos está na seção Criar. Use com uma cena real da sua semana.", tag: "conteúdo" }
];

const FECHAMENTO = {
  titulo: "Agora é seu.",
  txt: "A Leitura te mostrou o que já estava aí. Esta Central existe para você não precisar começar do zero toda vez que for comunicar.\n\nVolte para ela. Atualize. Teste. Observe o que volta.\n\nA sua marca não termina aqui. Ela começa a ficar perceptível daqui para a frente.",
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
  txt: "Você consegue executar tudo isso sozinha. Foi para isso que esta Central foi construída.\n\nMas se em algum momento você quiser a minha leitura ao seu lado enquanto coloca essa marca em movimento, existe a Mentoria de Ativação: três meses de acompanhamento para transformar direção em execução, observar o que o mercado devolve e ajustar a rota.",
  cta: "Quero conhecer"
};

/* ===== fim ===== */

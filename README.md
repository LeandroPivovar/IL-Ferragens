# IL Ferragens e Construções

Site institucional estático (HTML/CSS/JS, sem build). Os arquivos publicados ficam em `dist/`.

## Vercel

Importar a raiz do repositório com framework **Other**. O `vercel.json` já define a saída `dist`, sem
comando de build nem de instalação. `.vercelignore` exclui metadados locais (`.aroe-crm.json`, `.taste-skill/`).

Teste local: servir a pasta `dist/` (ex.: `npx --yes serve dist`).

## Dados usados

Fonte: lead do AROE CRM (`leadId` em `.aroe-crm.json`, cadastrado em 18/11/2026).

| Campo | Valor |
|---|---|
| Nome | IL Ferragens e Construções |
| Segmento (CRM) | Construtora |
| WhatsApp | (48) 9133-4336 (`wa.me/554891334336`, sem acrescentar nono dígito) |

O CRM não trazia cidade, endereço, horários, serviços detalhados, Instagram nem logo. Os serviços do site
("Ferragens para obra", "Construção") partem apenas do nome e do segmento, em texto que pede para consultar.

## PENDENTE antes de considerar o site completo

- **Localização / mapa:** a skill do projeto exige Google Maps, mas não há endereço nem cidade confirmados.
  A seção `#atendimento` está sem mapa (comentário `PENDENTE` no HTML). Na busca pública aparecem duas
  empresas possíveis: *I.L Ferragens LTDA* (Biguaçu - SC, CNPJ 61.762.462/0001-30) e *IL Ferragens e
  Construções LTDA* (Palmas - TO, CNPJ 27.071.843/0001-35). Confirmar qual é antes de incluir o mapa.
- **Serviços reais:** confirmar se vendem ferragens/materiais, se executam obras (e quais tipos) ou as duas coisas.
- **Horário de atendimento, logo e fotos reais** da empresa.
- **Número para ligação:** só o WhatsApp foi informado; não há botão de ligar.

## Direção visual (Taste)

- Direção sorteada: *Photographs at uneven sizes* (seed 1515130926), paleta *Navy on white* com acento
  tangerina, texto em Sentient e interface/hero em Archivo.
- Ideia: a ferragem (o aço que fica dentro da estrutura) conduz as fotos, do vergalhão à obra de pé.
- Item interativo: "Monte o pedido de orçamento" (`#contato`) gera a mensagem e abre o WhatsApp.
- Hero no padrão obrigatório Aroe (`.agents/skills/aroe-sites/references/hero.md`). Exceções do Taste
  documentadas só na hero: palavra "ferragem" em itálico na cor de acento, contornos no CTA do topo e no
  botão secundário, dois CTAs, barra transparente e camada escura neutra (marcadas com `taste-skill-ignore`).
- `inspect.mjs`: 0 FAIL em 1440, 768 e 390 px. Avisos restantes: o itálico da hero (exceção acima),
  quantidade de tamanhos de fonte, ausência de vídeo e o espaço vazio intencional do rodapé.

## Imagens

16 fotos do Unsplash (licença Unsplash, uso comercial permitido), ilustrativas: não mostram obras, equipe
nem estabelecimento da empresa. A galeria diz isso no texto. Créditos em `dist/assets/credits.md` e na
página `dist/assets/credits.html` (link no rodapé).

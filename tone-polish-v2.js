document.addEventListener('DOMContentLoaded', () => {
  const replacements = [
    [/Segundo as condições apresentadas aos participantes, /gi, ''],
    [/Segundo as condições apresentadas, /gi, ''],
    [/segundo as condições apresentadas, /gi, ''],
    [/Segundo as informações recebidas, /gi, ''],
    [/segundo as informações recebidas, /gi, ''],
    [/Pelas informações atualmente recebidas, /gi, ''],
    [/pelas informações atualmente recebidas, /gi, ''],
    [/Segundo relatos e materiais recebidos, /gi, ''],
    [/Foi relatado que, /gi, ''],
    [/Também foi relatado um caso em que, /gi, 'Em situações justificadas, '],
    [/Também foi relatada a possibilidade de /gi, 'Pode ocorrer '],
    [/Foi relatada uma regra de /gi, 'A regra estabelece '],
    [/Na experiência relatada, /gi, 'Normalmente, '],
    [/O processo relatado é /gi, 'O processo é '],
    [/O procedimento relatado segue este fluxo:/gi, 'O processo segue este fluxo:'],
    [/O código foi descrito como /gi, 'O código funciona como '],
    [/Parte das informações desta página resulta da experiência e das orientações recebidas por participantes\. /gi, 'As condições podem ser atualizadas pela plataforma. '],
    [/Informações relatadas x documentação oficial/gi, 'Consulte sempre as condições atuais'],
    [/Esta área reúne as principais regras e dúvidas relatadas sobre a participação\./gi, 'Esta área reúne as principais regras e dúvidas sobre a participação.'],
    [/\*Exemplo baseado na regra de 50% que foi apresentada aos participantes\./gi, '*Exemplo calculado com base na regra de 50%.'],
    [/Os valores e valores diários acima são os apresentados nas informações recebidas\./gi, 'Os valores e valores diários acima correspondem às modalidades exibidas na plataforma.'],
    [/valores apresentados nas informações do programa/gi, 'valores definidos para as modalidades'],
    [/As informações recebidas descrevem /gi, 'A TIMI trabalha com '],
    [/Informações recebidas apontam para /gi, 'O projeto está em ']
  ];

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    let text = node.nodeValue;
    replacements.forEach(([pattern, value]) => { text = text.replace(pattern, value); });
    node.nodeValue = text;
  });
});
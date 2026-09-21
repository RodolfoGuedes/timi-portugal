// Editorial pass: direct site voice without presenting unverified results as guaranteed.
document.addEventListener('DOMContentLoaded', () => {
  const replacements = [
    [/segundo as informações (?:atualmente )?recebidas[, ]*/gi, ''],
    [/segundo as informações apresentadas[, ]*/gi, ''],
    [/segundo as condições apresentadas(?: aos participantes)?[, ]*/gi, ''],
    [/pelas informações (?:atualmente )?recebidas[, ]*/gi, ''],
    [/as informações recebidas indicam que /gi, ''],
    [/os materiais (?:do projeto TIMI |ilustrativos )?apresentam /gi, ''],
    [/os materiais divulgados anunciam /gi, 'O programa inclui '],
    [/foi relatado que[, ]*/gi, ''],
    [/foi relatada uma regra de /gi, 'Existe uma regra de '],
    [/na experiência relatada[, ]*/gi, ''],
    [/o procedimento relatado utiliza /gi, 'O procedimento utiliza '],
    [/o processo relatado utiliza /gi, 'O processo utiliza '],
    [/as informações recebidas mencionam /gi, 'O procedimento utiliza '],
    [/os valores atualmente indicados /gi, 'Os valores de referência '],
    [/valor diário indicado/gi, 'Valor diário da modalidade'],
    [/valores diários indicados/gi, 'valores diários das modalidades'],
    [/mínimo atualmente indicado/gi, 'mínimo de levantamento'],
    [/valor mínimo indicado/gi, 'valor mínimo'],
    [/modalidades atualmente apresentadas/gi, 'modalidades disponíveis nesta página'],
    [/modalidades apresentadas/gi, 'modalidades disponíveis nesta página'],
    [/informações relatadas x documentação oficial/gi, 'Condições e regras do programa'],
    [/informações recebidas/gi, 'informações do programa'],
    [/relatos recebidos/gi, 'materiais do projeto'],
    [/informações e relatos atualmente recebidos/gi, 'materiais de divulgação do projeto'],
    [/segundo o relato recebido[, ]*/gi, ''],
    [/segundo as regras apresentadas[, ]*/gi, ''],
    [/foi descrito como /gi, 'funciona como ']
  ];
  const walker = document.createTreeWalker(document.querySelector('main') || document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    if (node.parentElement && /^(SCRIPT|STYLE|NOSCRIPT)$/.test(node.parentElement.tagName)) return;
    let value = node.nodeValue;
    replacements.forEach(([pattern, replacement]) => { value = value.replace(pattern, replacement); });
    node.nodeValue = value;
  });
});
var listaMusicas = [
  //top 1: Vou ter que me virar;
  "https://studiosol-a.akamaihd.net/letras/272x272/albuns/b/0/d/0/1185511636113043.jpg",
  //top 2: Sua alegria foi cancelada;
  "https://studiosol-a.akamaihd.net/letras/272x272/albuns/2/6/d/0/745171562333055.jpg",
  //top 3: Natureza Caos: Live;
  "https://studiosol-a.akamaihd.net/letras/272x272/albuns/2/6/7/3/724371557263138.jpg",
  //top 4: A Sinfonia de Tudo Que Há;
  "https://studiosol-a.akamaihd.net/letras/272x272/albuns/5/5/8/3/540451476357261.jpg",
  //top 5: DVD 15 Anos Ao Vivo;
  "https://studiosol-a.akamaihd.net/letras/272x272/albuns/d/f/2/1/643841530121730.jpg",
  //top 6: Infinito;
  "https://studiosol-a.akamaihd.net/letras/272x272/albuns/6/8/b/d/272261637681075.jpg",
  //top 7: Revanche;
  "https://www.vagalume.com.br/fresno/discografia/revanche.jpg",
  //top 8: Redenção;
  "https://studiosol-a.akamaihd.net/letras/272x272/albuns/e/b/b/a/6778.jpg",
  //top 9: Ciano;
  "https://studiosol-a.akamaihd.net/letras/272x272/albuns/3/2/5/0/67791637680724.jpg",
  //top 10: O Rio a Cidade e a Árvore;
  "https://studiosol-a.akamaihd.net/letras/272x272/albuns/a/6/c/e/6780.jpg"
];
var videoclipes = [
  //top 1: Vou ter que me virar;
  "https://www.letras.mus.br/fresno/discografia/vou-ter-que-me-virar-2021/",
  //top 2: Sua alegria foi cancelada;
  "https://www.letras.mus.br/fresno/discografia/sua-alegria-foi-cancelada-2019/",
  //top 3: Natureza Caos: Live;
  "https://www.letras.mus.br/fresno/discografia/natureza-caos-live-encore-2019/",
  //top 4: A Sinfonia de Tudo Que Há;
  "https://www.letras.mus.br/fresno/discografia/a-sinfonia-de-tudo-que-ha-2016/",
  //top 5: DVD 15 Anos Ao Vivo;
  "https://www.letras.mus.br/fresno/discografia/15-anos-ao-vivo-2015/",
  //top 6: Infinito;
  "https://www.letras.mus.br/fresno/discografia/infinito-2012/",
  //top 7: Revanche;
  "hhttps://www.letras.mus.br/fresno/discografia/revanche-2010/",
  //top 8: Redenção;
  "https://www.letras.mus.br/fresno/discografia/redencao-2008/",
  //top 9: Ciano;
  "https://www.letras.mus.br/fresno/discografia/ciano-2006/",
  //top 10: O Rio a Cidade e a Árvore;
  "https://www.letras.mus.br/fresno/discografia/o-rio-a-cidade-a-arvore-2004/"
];

for (var idx = 0; idx < listaMusicas.length; idx++) {
  document.body.innerHTML +=
    "<a href=" +
    videoclipes[idx] +
    " target='_blank'><img src=" +
    listaMusicas[idx] +
    " alt='' class='figs-posteres'></a>";
}
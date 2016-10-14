var tablea = [];
/*
tablea [0] = ['Panorama',   'Temperatura',   'Umidade', 'Vento', 'Jogar Tenis'];
tablea [1] = ['Ensolarado', 'Quente',        'Alta',    'Forte', 'Não'];
tablea [2] = ['Nublado',    'Quente',        'Alta',    'Fraco', 'Sim'];
tablea [3] = ['Chuvoso',    'Intermediária', 'Alta',    'Fraco', 'Sim'];
tablea [4] = ['Chuvoso',    'Fria',          'Normal',  'Fraco', 'Sim'];
tablea [5] = ['Chuvoso',    'Fria',          'Normal',  'Forte', 'Não'];
tablea [6] = ['Nublado',    'Fria',          'Normal',  'Forte', 'Sim'];
tablea [7] = ['Ensolarado', 'Intermediária', 'Alta',    'Fraco', 'Não'];
tablea [8] = ['Ensolarado', 'Fria',          'Normal',  'Fraco', 'Sim'];
tablea [9] = ['Chuvoso',    'Intermediária', 'Normal',  'Fraco', 'Sim'];
tablea [10] =['Ensolarado', 'Intermediária', 'Normal',  'Forte', 'Sim'];
tablea [11] =['Nublado',    'Intermediária', 'Alta',    'Forte', 'Sim'];
tablea [12] =['Nublado',    'Quente',        'Normal',  'Fraco', 'Sim'];
tablea [13] =['Chuvoso',    'Intermediária', 'Alta',    'Forte', 'Não'];
tablea [14] =['Ensolarado', 'Quente',        'Alta',    'Fraco', 'Não'];

 */


tablea [0] = ['A', 'B', 'C', 'D', 'CLASSE'];
tablea [1] = ['a1', 'b1', 'c1', 'd1', 'Sim'];
tablea [2] = ['a1', 'b1', 'c2', 'd1', 'Não'];
tablea [3] = ['a2', 'b2', 'c1', 'd1', 'Sim'];
tablea [4] = ['a2', 'b2', 'c2', 'd2', 'Não'];
tablea [5] = ['a1', 'b2', 'c2', 'd1', 'Não'];
tablea [6] = ['a2', 'b1', 'c2', 'd2', 'Sim'];
tablea [7] = ['a3', 'b2', 'c2', 'd2', 'Sim'];
tablea [8] = ['a1', 'b3', 'c1', 'd1', 'Sim'];
tablea [9] = ['a3', 'b1', 'c1', 'd1', 'Não'];



function calcEntropy(table){
    //line, value
    line_best = [-1, -999];
    //pos, neg
    S = [0,0];

    for(var i=1; i<table.length; i++){
        if(table[i][table[i].length-1] == "Sim")
            S[0]++;
        else if(table[i][table[i].length-1] == "Não"){
            S[1]++;
        }
    }

    var pM = (S[0]/(S[0]+S[1]));
    var log2pM =Math.log(pM)/ Math.log(2);
    var pm = (S[1]/(S[0]+S[1]));
    var log2pm =Math.log(pm) / Math.log(2);


    var entropy = - (pM *log2pM) - (pm * (log2pm));
    //?
    if((pm == 0) || (pM == 0))
        entropy =0;

   // var entropy = - (S[0]/(S[0]+S[1])) * (Math.log(S[0]/(S[0]+S[1]))/Math.log(2)) - (S[1]/(S[0]+S[1])) * (Math.log(S[1]/(S[0]+S[1]))/Math.log(2));
    return entropy;
}


//specific
function calcEntropySpecific(table, attribute, value){
    //line, value
    line_best = [-1, -999];
    //pos, neg
    S = [0,0];

    for(var i=1; i<table.length; i++){
        //console.log(attribute, value, table[i][attribute]);

        if((table[i][table[i].length-1] == "Sim") && (table[i][attribute] == value))
            S[0]++;
        else if((table[i][table[i].length-1] == "Não") && (table[i][attribute] == value)){
            S[1]++;
        }
    }


    var pM = (S[0]/(S[0]+S[1]));
    var log2pM =Math.log(pM)/ Math.log(2);
    var pm = (S[1]/(S[0]+S[1]));
    var log2pm =Math.log(pm) / Math.log(2);


    var entropy = - (pM *log2pM) - (pm * (log2pm));
    //?
    if((pm == 0) || (pM == 0))
        entropy =0;

    //entropy, amount this values, total
    return [entropy, S[0], S[1], table.length-1];
}


function getAttributeIndex(nameAttr, table){
    for(var i=0; i<table[0].length; i++)
      if(table[0][i] == nameAttr)
        return i;
}

function gainInformation(attribute, table){

    //pode pendurar essa info em um vetor;
    var values = getValuesOfAttribute(attribute, table);
    //console.log(values)
    var arrValuesAndEntropy =[];
    //pode pendurar tb;
    var entropyAll =  calcEntropy(table);
    var entropySpecific = entropyAll;
    var sumEntropyValues = 0;
    //console.log(entropySpecific);

    for(var i=0; i<values.length; i++){
        //0 = entropy, 1 = amout values in table, amout of all values in table
        inf = calcEntropySpecific(table, getAttributeIndex(attribute, table), values[i])

        //console.log(inf, values[i]);

        arrValuesAndEntropy[arrValuesAndEntropy.length] = [values[i], inf[0], [inf[1],inf[2]]];

        entropySpecific -= ((inf[1]+inf[2])/inf[3])*inf[0];


    }

    var r = [entropySpecific, arrValuesAndEntropy]

    return r;
}

function getValuesOfAttribute(attribute, table){
   var values = [];
   var index = getAttributeIndex(attribute, table);
   for(var i=1; i<table.length-1; i++){
       var flagHave = 0;
       for(var j=0; j<values.length; j++){
           if(table[i][index] == values[j])
              flagHave = 1;
       }

       if(flagHave==0)
          values[values.length] = table[i][index];

   }
   //console.log(values);
   return values;

}

window.onload = function(){

    gi_best = getBestEntropy(tablea);
    //console.log(gi_best);

    var tree = new Tree(gi_best[0]);

    index = getAttributeIndex(gi_best[0], tablea);

    for(var i= 0; i<gi_best[2].length; i++){
        tree.add(gi_best[2][i][0],gi_best[0], tree.traverseBF);

        //console.log("\n \n");
        //*ENSOLARADO
        //console.log(gi_best[2][i][0])

        //remove linhas que não tinha o att Panoram = Ensolarado
        t = removeLin(gi_best[2][i][0], index, tablea);
        //console.log(t);

        //calcula o ganho de informação para Panora = Ensolarado
        //g = gainInformation(gi_best[0], t);
        e = calcEntropySpecific(t, index, gi_best[2][i][0]);
        //console.log(e);
        var classific ="?";
        if(e[0] == 0.0){
          classific = sorter(e);
          //console.log(classific);
            tree.add(classific, gi_best[2][i][0], tree.traverseBF);
        }else{
          buildNodesDecision(t, tree, gi_best[2][i][0]);
        }
    }

    //console.log(tree._root);
    console.log(classificData(undefined, tree));



}

function classificData(data, tree){
    data = ['a3','b3','c1','d1'];

    var Tree = tree._root;
    var nodecurrent = Tree;
    var index = getAttributeIndex(nodecurrent.data, tablea);
    if(index == undefined){
        console.log("Class:  "+nodecurrent.data);
    }else{
        var value = data[index];
        console.log(nodecurrent);
        console.log("1 "+index+" eh categoria");
        for(var i=0; i< nodecurrent.children.length; i++){
            if(nodecurrent.children[i].data == value)
                nodecurrent = nodecurrent.children[i];
        }
    }

    return n(nodecurrent, data);

}

function n(nodecurrent, data){

    nodecurrent = nodecurrent.children[0];

    var index = getAttributeIndex(nodecurrent.data, tablea);
    if(index == undefined){
        console.log(index, nodecurrent.data)
        return nodecurrent.data;
    }

    var value = data[index];
    console.log(nodecurrent);
    nodeOld = nodecurrent.data;
    //console.log("2 "+index+" eh categoria");
    for(var i=0; i< nodecurrent.children.length; i++){
        if(nodecurrent.children[i].data == value)
            nodecurrent = nodecurrent.children[i];
    }
    if(nodeOld == nodecurrent.data){
        console.log("classificacao desconhecida para "+ value);
        return "?";
    }else{
        return n(nodecurrent, data);
    }
}


function isCategory(string, table){
   for(var i = 0; i< table[0].length; i++)
     if(tablea[0][i] == string)
       return true;

 return false;
}

function buildNodesDecision(table, tree, nodeparent){

    var gi_best = getBestEntropy(table);

    var index = getAttributeIndex(gi_best[0], table);

    tree.add(gi_best[0], nodeparent, tree.traverseBF);
    for(var i= 0; i<gi_best[2].length; i++){

        tree.add(gi_best[2][i][0], gi_best[0], tree.traverseBF);

         //remove linhas que não tinha o att index = gi_best[2][i][0]
        var t = removeLin(gi_best[2][i][0], index, table);
        //console.log(t);

        //calcula o ganho de informação para index = gi_best[2][i][0]
        //var g = gainInformation(gi_best[0], t);
        var e = calcEntropySpecific(t, index, gi_best[2][i][0]);
       // console.log(e)
        var classific ="?";
        if(e[0] == 0.0){
            classific = sorter(e);
            //console.log(classific);
            tree.add(classific, gi_best[2][i][0], tree.traverseBF);
        }else  if(t[0].length>2){
                buildNodesDecision(removeCol(index, t),tree, gi_best[2][i][0]);
        }
    }
}


function sorter(gain){
    if(gain[1] == 0)
      return "nao";
    else if (gain[2] == 0  )
     return "sim";

    return "?";
}


function getBestEntropy(table){

    var gi_best = null;

    for(var i=0; i<table[0].length-1; i++){
        gi = gainInformation(table[0][i], table);
        if(gi_best == null){
            gi_best = [table[0][i], gi[0], gi[1]];
        }else if(gi_best[1]<gi[0]){
                gi_best = [table[0][i], gi[0], gi[1]];
        }
    }

   // if(gi_best == null)
   //console.log(table);

    return gi_best;

}
function removeCol(index, table){
    //console.log("remove index"+index);
    t = [];
    for(var i=0; i<table.length; i++){
        //console.log(table[i]);
        var ta =[];
        for(var j=0; j<table[i].length;j++){
            //console.log(table[i][j]);
            if(j != index){
                ta[ta.length] = table[i][j];
            }

        }

       t[t.length] = ta;
    }
    //console.log(t);
    return t;
}



function removeLin(value,index, table){
    //console.log("remove index"+index);
    var t = [];
    t[0] = table[0];

    for(var i=1; i<table.length; i++){
        if(table[i][index] == value)
            t[t.length] = table[i];
    }

    //console.log(t);
    return t;
}


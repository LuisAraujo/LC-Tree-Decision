
/*Mention
 * Mention is a mention of stutend in courses, can be SR, IN, MI, ME, MS, SS.
 * */
function Mention(){}
//Aprovado
Mention.APR = "APR";
//Dispença da Disciplina
Mention.DIP = "DIR";
//Aproveitamento da Disciplina
Mention.APD = "APD";
//Reprovado por falta
Mention.RPF = "RPF";
//Trancamento Total
Mention.TTM = "TMM";
//Reprovado por conceito
Mention.RPC = "RPC";
// Trancamento Parcial da Disciplina
Mention.TPM = "TPM";
//Dispensado de Matrícula
Mention.DM = "DM";
//Em curso
Mention.INC = "INC";


/*Mention.getWighMention
 * This methon allow return a wigh for any mention. This is useful for compare two mentions
 * */
Mention.getWeightMention = function(mention){

    if(mention == this.APR)
        return 9;
    if(mention == this.DIP)
        return 8;
    if(mention == this.APD)
        return 7;
    if(mention ==  this.RPF)
        return 6;
    if(mention == this.TTM)
        return 5;
    if(mention == this.RPC)
        return 4;
    if(mention == this.TPM)
        return 3;
    if(mention == this.DM)
        return 2;
    if(mention == this.INC)
        return 1;

    return 0;
}


Mention.getMention = function(mention){

    if(mention == this.APR)
        return this.APR;
    if(mention == this.DIP)
        return this.DIP;
    if(mention == this.APD)
        return this.APD;
    if(mention ==  this.RPF)
        return this.RPF;
    if(mention == this.TTM)
        return dis.TTM;
    if(mention == this.RPC)
        return this.RPC;
    if(mention == this.TPM)
        return this.TPM;
    if(mention == this.DM)
        return this.DM;
    if(mention == this.INC)
        return this.INC;

    return undefined;
}

/*Class
 * IdDisciplie is a unique identification of discipline, only permitted discipline of course
 * Semestre is the semestre of this course was coursed
 * Mention is the information of mention of student in this course ( SR | IN | MI | ME | MS | SS.
 * */
function Class(idDiscipline, timetable, mention){

    if((mention != null) && (mention != Mention.APR) && (mention != Mention.DIP) && (mention != Mention.APD) && (mention != Mention.RPF)
        && (mention != Mention.TTM) &&  (mention != Mention.RPC) &&  (mention != Mention.TPM) && (mention != Mention.DM))
        throw new Error('Cannot add add Mention. Expected a mention valid');

    //this.id = id;
    this.idDiscipline = idDiscipline;
    this.semester;
    this.mention = mention;
    this.timetable = timetable;


};

/*Class.setMention
 * This method alloaw set mention of classe
 * */
Class.prototype.setMention = function(mention){
    this.mention = mention;
}


/*Class.copy
 * This method create a new copy of class
 * */
Class.prototype.copy = function(){
    return new Class(this.idDiscipline, this.semester, this.mention, this.timetable);
}
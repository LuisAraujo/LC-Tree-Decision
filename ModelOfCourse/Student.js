/*Students
* Id is a unique identification of student, can be code pf registration in university
* IdCourse is a identification of course of student
* Classes is a set of discipline coursed by this students.
* SemesterStart is the semester of the student entered in course
* DropDown is a flag of know if student dropdown of course
* */
function Students(id, course, semesterstart, dropdown) {
    this.id = id;
    this.course = course;
    this.classes = [];
    this.semesterStart = semesterstart;
    this.dropdown = dropdown;
}

/*Students.addClass
 * this method allows insert of class at specific student
 * */
Students.prototype.addClass = function(c, mention){
    if(c.__proto__.constructor.name == "Class"){
        if(mention==undefined)
            c.mention = Mention.INC;
        else
            c.mention = mention;
        this.classes[this.classes.length] = c;
    }
}


/*Students.getClassesCoursed
 * this method retrurn all disciplines coursed
 * */
Students.prototype.getClassesCoursed = function(){
     classCoursed = []
     for(var i = 0; i<this.classes.length; i++){
         if(this.classes[i].mention != Mention.INC)
            classCoursed[classCoursed.length] = this.classes[i];
     }

     return classCoursed;
}


/*Students.getClassesCoursedWithSucess
 * this method return all disciplines coursed with approval
 * */
Students.prototype.getClassesCoursedWithSucess = function(){
    classesSucess = [];

    for(var i=0; i<this.classes.length; i++){
        if( (this.classes[i].mention == Mention.APR) || (this.classes[i].mention == Mention.DIP) || (this.classes[i].mention == Mention.APD))
          classesSucess[classesSucess.length] = this.classes[i];
    }
    return classesSucess;
}


/*Students.getClassesCoursedWithRetetion
 * this method return all disciplines coursed with reproof
 * */
Students.prototype.getClassesCoursedWithRetetion = function(){
    classesRetention = [];

    for(var i=0; i<this.classes.length; i++){
        if( (this.classes[i].mention != Mention.INC) && (this.classes[i].mention != Mention.APR) && (!this.classes[i].mention != Mention.DIP) && (!this.classes[i].mention != Mention.APD))
            classesRetention[classesRetention.length] = this.classes[i];
    }
    return classesRetention;
}

/*Students.getNumberClassesCoursedWithRetetion
 * this method return all disciplines coursed with reproof added of information of how times was coursed
 * */
Students.prototype.getNumberClassesCoursedWithRetetion = function(){
    classesRetention = [];
    function classes(pclass){
        this.class = pclass;
        this.numberCoursed= 1;
    };
    for(var i=0; i<this.classes.length; i++){

        if( (this.classes[i].mention != Mention.APR) && (this.classes[i].mention != Mention.DIP) && (this.classes[i].mention != Mention.APD)){
            flag = 0;
            for(var j=0; j<classesRetention.length; j++){
                if(classesRetention[j].c.id == this.classes[i]){
                    classesRetention[j].numberCoursed++;
                    flag = 1;
                }
            }

            if(flag == 0)
                classesRetention[classesRetention.length] = new classes(this.classes[i]);
        }
    }
    return classesRetention;
}


/*Students.getDisciplineState
* this method the state of discipline (Approval, reproof, not coursed)
* */
Students.prototype.getDisciplineState = function(id){
    mention = "";
    for(var i=0; i<this.classes.length; i++){
        if(this.classes[i].idDiscipline == id)
            if ( Mention.getWeightMention(mention) <  Mention.getWeightMention(this.classes[i].mention))
                mention = this.classes[i].mention;
    }
    if(mention!= "")
        return mention;
    else
    //not coursed
    return "NCO";
}

/*Students.getDisciplineForSemester
 * this method the state of discipline (Approval, reproof, not coursed)
 * */
Students.prototype.getDisciplineForSemester = function(semester){
    disciplines = [];

    for(var i=0; i<this.classes.length; i++){
        if(this.classes[i].semester == semester)
            disciplines[disciplines.length] = this.classes[i];
    }
    return disciplines;
}


/*Students.getDisciplineCanCoursedInSemester
 * this method the state of discipline (Approval, reproof, not coursed)
 * */
Students.prototype.getDisciplineCanCoursedInSemester = function(semester){
    disciplines = [];

    for(var i=0; i<semester.classes.length; i++){

        isDependence = 0;
        //find discipline of this semester
        disc = semester.course.findDiscipline(semester.classes[i].idDiscipline);
        state = this.getDisciplineState(disc.id);
        //console.log(disc, state)
        if ((state=="INC") || (state=="APR") || (state=="DIR") || (state=="APD"))
          continue;

        //travel this dependence of discipline
        for(var j = 0; j< disc.dependence.length; j++){
            state = this.getDisciplineState(disc.dependence[j].idDiscipline);
            //if the studente not was approval in dependence
            if ((state!="APR") && (state!="DIR") && (state!="APD"))
                 isDependence = 1;
        }

        if(isDependence == 0){

            disciplines[disciplines.length] =  disc;
        }
    }

    return disciplines;
}

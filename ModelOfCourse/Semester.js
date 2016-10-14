
/*Semester
 * id is a unique identification of Semester, can be year of semester;
 * Classes is set of class in this semester
 * */
function Semester(id){
    this.id = id;
    this.course;
    this.classes = [];
}

/*Semester.addClasses
 * This method add a classe in a semester specific. Must be of type ClassForSemester
 * */
Semester.prototype.addClasse = function(pclass){
    conflict = 0;
    //travel all classes of semester
    for(var i=0; i<this.classes.length; i++){
        //travel timetable of each classes
        for(var j =0; j<this.classes[i].timetable.length; j++){
            //travel for compare timetable of pclass
            for(var l =0; j<pclass.timetable.length; l++){
                //if have confit timetable
                if((this.classes[i].timetable[j][0] == pclass.timetable[l][0]) && (this.classes[i].timetable[j][1] == pclass.timetable[l][1]))
                    //check if disciplines are a same semester in matrix, if yes have ane conflict
                    if( this.course.findDiscipline(this.classes[i].idDiscipline).semester == this.course.findDiscipline(pclass.idDiscipline).semester )
                      conflict = 1;
                    break;
            }

            if(conflict==1)
                break;
        }

        if(conflict==1)
         break;
    }
    if(conflict == 0){
        pclass.semester = this.id;
        this.classes[this.classes.length] = pclass;
    }
}


Semester.prototype.getDiscipline = function(idDiscipline){
    for(var i=0; i<this.classes.length; i++)
      if(this.classes[i].idDiscipline == idDiscipline){
          return this.classes[i].copy();
      }

    return null;
}

/*ClassForSemester
 * id is a unique identification of Semester, can be year of semester;
 * Classes is set of class in this semester
 * time is a hours of course, can be first (1) or second (2).
 * */
function ClassForSemester(idDiscipline, time, days){
    this.idDiscipline = idDiscipline;
    this.time = time;
    this.days = days;
    this.semester;
}


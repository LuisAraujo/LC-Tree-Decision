

/*Course
 * Id is a unique identification of course.
 * Name is a name od course. Example: Licenciatura em Computação
 * Disciplines is a set of disciplines at course
 * */
function Course(id, name){
    this.id = id;
    this.name = name;
    this.disciplines = [];
    this.studentes = [];
    this.semesters = [];
    this.limiteRetentionByDiscipline = 3;
};


/*Course.findDiscipline
 * this method allows find discipline in course, return true if discipline exists and false if not
 * */
Course.prototype.findDiscipline = function(id){
    //for(var i=0; i< this.disciplines.length; i++){
    //    if(this.disciplines[i].id == id)
            return this.disciplines[id-1];
    //};

    //return null;
}


/*Course.addDiscipline
 * this method allows add discipline in course, only permitted elements of type Discipline
 * */
Course.prototype.addDiscipline = function(discipline){
    if(discipline.__proto__.constructor.name == "Discipline")
        this.disciplines[this.disciplines.length] = discipline;
    else
        throw new Error('Cannot add add Discipline. Expected discipline of type Discipline');

};


/*Course.addSemester
 * this method allows add discipline in course, only permitted elements of type Discipline
 * */
Course.prototype.addSemester= function(semester){
    if(semester.__proto__.constructor.name == "Semester"){

        for(var i=0; i<this.semesters.length; i++)
          if(this.semesters[i].id == semester.id)
              throw new Error('Cannot add Semester with same id of semester cadastred');

        semester.course = this;
        this.semesters[this.semesters.length] = semester;

    }else
        throw new Error('Cannot add add Semester. Expected semester of type Semester');

};


/*Course.addDependenceOfDiscipline
 * this method allows add dependente of discipline in course, only permitted discipline of course
 * */
Course.prototype.addDependenceOfDiscipline = function(id, idDependece){
    discipline = this.findDiscipline(id);

    if(discipline != null){
        disciplineDependence = this.findDiscipline(idDependece);
        if(disciplineDependence != null){
            discipline.dependence[discipline.dependence.length] = disciplineDependence;
        }else{
            throw new Error('Cannot add dependence undefined.');
        }

    }else{
        throw new Error('Cannot add dependence for discipline undefined.');
    }
}

/*Course.getNumberDisciplineByArea
 * this method return amount of disciplines by area
 * */
Course.prototype.getNumberDisciplineByArea= function(area){
    count =0;
    for(var i=0; i<this.disciplines.length; i++){
        if(this.disciplines[i].area == area)
            count ++;
    }
    return  count;
};

/*Course.getNumberDisciplineByAreaWithClasses
 * this method return amount of disciplines by area with specific classes
 * */
Course.prototype.getNumberDisciplineByAreaWithClasses= function(area, classes){
    count =0;
    for(var i=0; i<classes.length; i++){
        if(this.findDiscipline(classes[i].idDiscipline).area == area)
            count ++;
    }
    return  count;
};

Course.prototype.getDisciplinesByArea = function(area, classes){
    classesArea = [];
    for(var i=0; i<classes.length; i++){
        if(classes[i].area == area)
            classesArea[classesArea.length] = classes[i];
    }
    return  classesArea;
}

/*Course.getNumberDisciplineByAreaWithDisciplines
 * this method return amount of disciplines by area with specific classes
 * */
Course.prototype.getNumberDisciplineByAreaWithDisciplines= function(area, disciplines){
    count =0;
    for(var i=0; i<disciplines.length; i++){
        if(disciplines[i].area == area)
            count ++;
    }
    return  count;
};



/*Course.addStudent
 * this method allows add student in course, only permitted elements of type Student
 * */
Course.prototype.addStudent = function(studentes){
    if(studentes.__proto__.constructor.name == "Students"){
        this.studentes[this.studentes.length] = studentes;
        studentes.course = this;
    }else
        throw new Error('Cannot add add Student. Expected student of type Studente');

};

/*Course.findStudent
 * this method allows find student by id in course
 * */
Course.prototype.findStudent = function(id){
    for(var i=0; i<this.studentes.length; i++)
      if(this.studentes[i].id == id)
        return this.studentes[i];

    return undefined;

};

/*Course.getStudents
 * this method return all studentes in course
 * */
Course.prototype.getStudents = function(){
    return this.studentes;
};




/*Course.getSemesters
 * this method return all semesters of course
 * */
Course.prototype.getSemesters = function(){
    return this.semesters;
}


/*Course.findSemester
 * this method allows find semesters by id
 * */
Course.prototype.findSemester = function(id){
    for(var i=0; i<this.semesters.length; i++)
      if(this.semesters[i].id == id)
        return this.semesters[i];

    return null;
}


/*Course.getDisciplineRisk
 * this method retorn all discipline in Risk. Exemple if number of time reproof  -  limiteReproof = 1
 * */
Course.prototype.getDisciplineRisk = function(disciplines){
    var disciplinesRisk = [];
    var disciplinesCount = [];

    for(var i=0; i<disciplines.length; i++){
        var flagHave =0;
        for(var j = 0; j<disciplinesCount.length; j++){

            if(disciplinesCount[j][0].idDiscipline == disciplines[i].idDiscipline){

                disciplinesCount[j][1]++;

                //console.log("add", disciplines[i], disciplinesCount[j][1])
                //console.log(this.limiteRetentionByDiscipline, disciplinesCount[j][1]);
                if( this.limiteRetentionByDiscipline - disciplinesCount[j][1] <= 1){
                    //console.log("risco");
                    var flagHave2=0;
                    for(l=0; l<disciplinesRisk.length; l++){
                        //console.log("já escontrado");
                        if(disciplinesRisk[l].idDiscipline == disciplines[i].idDiscipline)
                          flagHave2 = 1;
                    }

                    if(flagHave2 == 0){

                        disciplinesRisk[disciplinesRisk.length] = this.findDiscipline(disciplines[i].idDiscipline);
                    }
                }
                flagHave = 1;
            }
        }

        if(flagHave == 0){

            disciplinesCount[disciplinesCount.length] = [disciplines[i], 1];
            //console.log("insert", disciplinesCount[disciplinesCount.length-1][1])

        }

    }




    //console.log(disciplinesRisk);
    return disciplinesRisk;
};
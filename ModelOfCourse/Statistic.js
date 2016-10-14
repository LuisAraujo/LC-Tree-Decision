

function Statistic(student){
    this.id= student.id;
    this.course = student.course.name;

    this.disciplinesSucess = student.getClassesCoursedWithSucess().length;
    this.disciplinesRetention = student.getClassesCoursedWithRetetion().length;
    this.disciplinesCoursed = student.getClassesCoursed().length;
    this.disciplines = [];
    this.semesterStart = student.semesterStart;
    this.averageDisciplinesCoursedBySemester = 0;

    function discipline(name, success, retention, porcentSucess,mostApproval, porcentMostApproval, amoutDiscNoCoursed, disciplinesRisk){
        this.name = name;
        this.success = success;
        this.retention = retention;
        this.porcentSucess = porcentSucess;
        this.mostApproval = mostApproval;
        this.porcentMostApproval = porcentMostApproval;
        this.amoutDiscNoCouserd = amoutDiscNoCoursed;
        this.disciplinesRisk = [];
        if(disciplinesRisk != undefined)
            this.disciplinesRisk = disciplinesRisk;

    }

    var semesters = student.course.getSemesters();
    var h, c, l, e, p;
    for(var i=0; i<semesters.length;i++){
        disciplineCoursed = student.getDisciplineCanCoursedInSemester(semesters[i]);

        h = student.course.getNumberDisciplineByAreaWithDisciplines(Area.HUM, disciplineCoursed);
        c = student.course.getNumberDisciplineByAreaWithDisciplines(Area.COMP, disciplineCoursed);
        l = student.course.getNumberDisciplineByAreaWithDisciplines(Area.LIN, disciplineCoursed);
        e = student.course.getNumberDisciplineByAreaWithDisciplines(Area.EXA, disciplineCoursed );
        p = student.course.getNumberDisciplineByAreaWithDisciplines(Area.PED, disciplineCoursed );
    }

    this.averageDisciplinesCoursedBySemester = (h+c+l+e+p)/semesters.length;


    var name = "COMPUTACAO";
    var success = student.course.getNumberDisciplineByAreaWithClasses(Area.COMP, student.getClassesCoursedWithSucess());
    var dr = student.getClassesCoursedWithRetetion();
    var retention = student.course.getNumberDisciplineByAreaWithClasses(Area.COMP, dr);
    var disciplinesRisk = student.course.getDisciplinesByArea(Area.COMP, student.course.getDisciplineRisk(dr));
    var porcentSucess =  (100*success)/student.course.getNumberDisciplineByArea(Area.COMP);
    var mostApproval =  student.course.getNumberDisciplineByArea(Area.COMP) - success;
    var porcentMostApproval =  (100*mostApproval)/student.course.getNumberDisciplineByArea(Area.COMP);



    this.disciplinesCOMP = new discipline(name, success, retention, porcentSucess,mostApproval, porcentMostApproval, c, disciplinesRisk);
    this.disciplines[this.disciplines.length] = this.disciplinesCOMP;


    name = "PEDAGOGIA";
    success = student.course.getNumberDisciplineByAreaWithClasses(Area.PED, student.getClassesCoursedWithSucess());

    retention = student.course.getNumberDisciplineByAreaWithClasses(Area.PED, dr);
    disciplinesRisk = student.course.getDisciplinesByArea(Area.PED, student.course.getDisciplineRisk(dr));
    porcentSucess = (100*success)/student.course.getNumberDisciplineByArea(Area.PED);
    mostApproval =  student.course.getNumberDisciplineByArea(Area.PED) - success;
    porcentMostApproval =  (100*mostApproval)/student.course.getNumberDisciplineByArea(Area.PED);

    this.disciplinesPED= new discipline(name, success, retention, porcentSucess,mostApproval, porcentMostApproval, p, disciplinesRisk);
    this.disciplines[this.disciplines.length] = this.disciplinesPED;


    name = "EXATAS";
    success = student.course.getNumberDisciplineByAreaWithClasses(Area.EXA, student.getClassesCoursedWithSucess());
    retention = student.course.getNumberDisciplineByAreaWithClasses(Area.EXA, dr);
    disciplinesRisk = student.course.getDisciplinesByArea(Area.EXA, student.course.getDisciplineRisk(dr));
    porcentSucess = (100*success)/student.course.getNumberDisciplineByArea(Area.EXA);
    mostApproval =  student.course.getNumberDisciplineByArea(Area.EXA) - success;
    porcentMostApproval =  (100*mostApproval)/student.course.getNumberDisciplineByArea(Area.EXA);


    this.disciplinesEXA = new discipline(name, success, retention, porcentSucess,mostApproval, porcentMostApproval, e, disciplinesRisk);
    this.disciplines[this.disciplines.length] = this.disciplinesEXA;


    name = "LINGUAGENS"
    success = student.course.getNumberDisciplineByAreaWithClasses(Area.LIN, student.getClassesCoursedWithSucess());
    retention = student.course.getNumberDisciplineByAreaWithClasses(Area.LIN, dr);
    disciplinesRisk = student.course.getDisciplinesByArea(Area.LIN, student.course.getDisciplineRisk(dr));
    porcentSucess = (100*success)/student.course.getNumberDisciplineByArea(Area.LIN);
    mostApproval =  student.course.getNumberDisciplineByArea(Area.LIN) - success;
    porcentMostApproval =  (100*mostApproval)/student.course.getNumberDisciplineByArea(Area.LIN);

    this.disciplinesLIN = new discipline(name, success, retention, porcentSucess,mostApproval, porcentMostApproval, l, disciplinesRisk);
    this.disciplines[this.disciplines.length] = this.disciplinesLIN;


    name = "HUMANAS";
    success = student.course.getNumberDisciplineByAreaWithClasses(Area.HUM, student.getClassesCoursedWithSucess());
    retention = student.course.getNumberDisciplineByAreaWithClasses(Area.HUM, dr);
    disciplinesRisk = student.course.getDisciplinesByArea(Area.HUM, student.course.getDisciplineRisk(dr));
    porcentSucess =  (100*success)/student.course.getNumberDisciplineByArea(Area.HUM);
    mostApproval =  student.course.getNumberDisciplineByArea(Area.HUM) - success;
    porcentMostApproval =  (100*mostApproval)/student.course.getNumberDisciplineByArea(Area.HUM);

    this.disciplinesHUM = new discipline(name, success, retention, porcentSucess,mostApproval, porcentMostApproval, h, disciplinesRisk);
    this.disciplines[this.disciplines.length] = this.disciplinesHUM;


}


Statistic.prototype.printData = function(){

    console.log("Estudante: "+this.id+"\n");
    console.log("Curso: "+ this.course+"\n");
    console.log("Ingresso em: "+ this.semesterStart+"\n");


    console.log("\nRESUMO DOS DADOS \n");
    console.log("Quantidade total de disciplinas cursadas: "+ this.disciplinesCoursed);
    console.log("Quantidade total de disciplinas aprovadas: "+ this.disciplinesSucess);
    console.log("Quantidade total de reprovacoes: "+ this.disciplinesRetention);
    console.log("Media de disciplinas cursadas por semestre: "+ this.averageDisciplinesCoursedBySemester);
    console.log();
    console.log("\n");

    for(var i=0; i<this.disciplines.length; i++){
        console.log("Disciplinas de "+this.disciplines[i].name);
        console.log("Aprovado em: "+this.disciplines[i].success+" disciplina(s)" );
        console.log("Reprovado em: "+this.disciplines[i].retention+" vez(es)" );
        console.log("Concluido: "+this.disciplines[i].porcentSucess +" %");
        console.log("Restantes: "+this.disciplines[i].mostApproval+ " ("+this.disciplines[i].porcentMostApproval+"%)");
        console.log("Soma disciplinas nao cursada nos semestres: "+this.disciplines[i].amoutDiscNoCouserd);
        console.log("Disciplinas de risco:");
        var stringRisk = "";
        for(var j=0; j<+this.disciplines[i].disciplinesRisk.length;j++){
             stringRisk+= this.disciplines[i].disciplinesRisk[j].name+" |";

            console.log(stringRisk);
        }
        console.log("\n");
    }


}

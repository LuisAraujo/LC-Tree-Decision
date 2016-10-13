window.onload = function(){

    /*var tree = new Tree('CEO');

    tree.add('VP of Happiness', 'CEO', tree.traverseBF);
    tree.add('VP of Happiness', 'CEO', tree.traverseBF);
    console.log(tree._root);*/

    //Creating a new course (id, name, semester initial)
    var course = new Course(1, "LC", "2011.1");
    //Crating disciplines of course
    createDisciplines(course);

    //Crating a new Semester (id)
    var sem = new Semester("2011.1");
    //Adding semester in course
    course.addSemester(sem);
    //Creating classes and adding in semester (idDicipline, timetable, mention)
    sem.addClasse(new Class(3, [["seg", 2],["ter", 2]],null));
    sem.addClasse(new Class(1, [["seg", 1],["ter", 1]],null));
    sem.addClasse(new Class(2, [["qui", 2],["qua", 2]],null));
    sem.addClasse(new Class(4, [["qui", 1],["sex", 1]],null));
    sem.addClasse(new Class(11,[["seg", 2],["ter", 1]],null));

    //Creating another semester
    sem = new Semester("2011.2");
    course.addSemester(sem);
    sem.addClasse(new Class(3, [["seg", 2],["ter", 2]],null));
    sem.addClasse(new Class(1, [["seg", 1],["ter", 1]],null));
    sem.addClasse(new Class(2, [["qui", 2],["qua", 2]],null));
    sem.addClasse(new Class(4, [["qui", 1],["sex", 1]],null));
    sem.addClasse(new Class(11,[["seg", 2],["ter", 1]],null));

    //Creating Student (id, semester initial)
    var student = new Students(100,null, "2011.1", false);
    student.addClass(sem.getDiscipline(1), Mention.RPC);
    student.addClass(sem.getDiscipline(1), Mention.RPC);
    student.addClass(sem.getDiscipline(1), Mention.RPC);
    student.addClass(sem.getDiscipline(3));

    //Adding student in course
    course.addStudent(student);

    //Creating Statistic object
    var statistic = new Statistic(student);
    //print Data
    statistic.printData();

};




function createDisciplines(course){
    //Creating Disciplines and adding in course
    course.addDiscipline(new Discipline(1,"Algoritmo", Area.COMP,1));
    course.addDiscipline(new Discipline(2,"Metodologia da Pesquisa",Area.HUM,1 ));
    course.addDiscipline(new Discipline(3,"Lógica Matemática",Area.EXA,1));
    course.addDiscipline(new Discipline(4,"Comunicação e Expressão",Area.LIN,1));
    course.addDiscipline(new Discipline(5,"História da Educação",Area.HUM,1)); // ou pedagia
    course.addDiscipline(new Discipline(6,"Informática Aplicada a Educação",Area.COMP,1)); //o foco é mais computacao

    course.addDiscipline(new Discipline(7,"Linguagem de Programação",Area.COMP,2));
    course.addDiscipline(new Discipline(8,"Arquitetura de Computadores",Area.COMP,2));
    course.addDiscipline(new Discipline(9,"Cálculo I",Area.EXA,2));
    course.addDiscipline(new Discipline(10,"Inglês I",Area.LIN,2));
    course.addDiscipline(new Discipline(11,"Filosofia da Educação",Area.HUM,2));// ou pedagia
    course.addDiscipline(new Discipline(12,"Psicologia da Educação",Area.HUM,2));// ou pedagia

    course.addDiscipline(new Discipline(13,"Linguagem Programação OO I",Area.COMP,3));
    course.addDiscipline(new Discipline(14,"Sistemas Operacionais",Area.COMP,3));
    course.addDiscipline(new Discipline(15,"Álgebra Linear",Area.EXA,3));
    course.addDiscipline(new Discipline(16,"Cálculo II",Area.EXA,3));
    course.addDiscipline(new Discipline(17,"Inglês II",Area.LIN,3));
    course.addDiscipline(new Discipline(18,"Didática",Area.PED,3));
    course.addDiscipline(new Discipline(19,"Estrutura de Dados",Area.COMP,3));

    course.addDiscipline(new Discipline(20,"Linguagem Programação OO II",Area.COMP,4));
    course.addDiscipline(new Discipline(21,"Modelagem de Banco de Dados",Area.COMP,4));
    course.addDiscipline(new Discipline(22,"Analise e Projeto de Sistemas",Area.COMP,4));
    course.addDiscipline(new Discipline(23,"Avaliação de Aprendizado",Area.PED,4));
    course.addDiscipline(new Discipline(24,"Sociologia da Educação",Area.HUM,4)); // ou pedagia
    course.addDiscipline(new Discipline(25,"Metodologia e Prática do Ensino da Computação",Area.PED,4));

    course.addDiscipline(new Discipline(26,"Desenvolvimento Web",Area.COMP,5));
    course.addDiscipline(new Discipline(27,"Banco de Dados",Area.COMP,5));
    course.addDiscipline(new Discipline(28,"Redes de Computadores I",Area.COMP,5));
    course.addDiscipline(new Discipline(29,"Ciência, Tecnologia e Sociedade",Area.HUM,5));
    course.addDiscipline(new Discipline(30,"Organização da Educação Brasileira",Area.HUM,5)); // ou pedagia
    course.addDiscipline(new Discipline(31,"Metodologia e Prática do Ensino da Computação II",Area.PED,5));
    course.addDiscipline(new Discipline(32,"Estágio Supervisionado em Computação I",Area.PED,5));

    course.addDiscipline(new Discipline(33,"Interação Humano-Computador",Area.COMP,6));
    course.addDiscipline(new Discipline(34,"Gerência de projetos",Area.COMP,6));
    course.addDiscipline(new Discipline(35,"Redes de Computadores II",Area.COMP,6));
    course.addDiscipline(new Discipline(36,"Empreendedorismo",Area.HUM,6));
    course.addDiscipline(new Discipline(37,"Libras",Area.LIN,6));
    course.addDiscipline(new Discipline(38,"Metodologia da pesquisa II",Area.HUM,6));
    course.addDiscipline(new Discipline(39,"Estágio Supervisionado em Computação II",Area.PED,6));

    course.addDiscipline(new Discipline(40,"Multimídia e Hipermídia",Area.COMP,7));
    course.addDiscipline(new Discipline(41,"Software Educacional",Area.COMP,7)); // ou pedagia
    course.addDiscipline(new Discipline(42,"Educação a Distância",Area.COMP,7)); // ou pedagia
    course.addDiscipline(new Discipline(43,"Optativa I",Area.OPT,7));
    course.addDiscipline(new Discipline(44,"Optativa II",Area.OPT,7));
    course.addDiscipline(new Discipline(45,"Estágio Supervisionado em Computação III",Area.PED,7));

    course.addDiscipline(new Discipline(46,"TCC",Area.HUM,8));
    course.addDiscipline(new Discipline(47,"Ética e Cidadania",Area.HUM,8));
    course.addDiscipline(new Discipline(48,"Economia, Trabalho e Educação",Area.HUM,8));
    course.addDiscipline(new Discipline(49,"Optativa III",Area.OPT,8));
    course.addDiscipline(new Discipline(50,"Optativa IV",Area.OPT,8));
    course.addDiscipline(new Discipline(51,"Estágio Supervisionado em Computação IV",Area.PED,8));

    //Adding dependences
    course.addDependenceOfDiscipline(7, 1);
    course.addDependenceOfDiscipline(9, 3);
    course.addDependenceOfDiscipline(11, 5);
    course.addDependenceOfDiscipline(12, 5);
    course.addDependenceOfDiscipline(13, 7);
    course.addDependenceOfDiscipline(14, 8);
    course.addDependenceOfDiscipline(15, 9);
    course.addDependenceOfDiscipline(16, 9);
    course.addDependenceOfDiscipline(17, 10);
    course.addDependenceOfDiscipline(18, 11);
    course.addDependenceOfDiscipline(18, 12);
    course.addDependenceOfDiscipline(19, 4);
    course.addDependenceOfDiscipline(20, 13);
    course.addDependenceOfDiscipline(21, 13);
    course.addDependenceOfDiscipline(22, 13);
    course.addDependenceOfDiscipline(23, 18);
    course.addDependenceOfDiscipline(24, 11);
    course.addDependenceOfDiscipline(25, 18);
    course.addDependenceOfDiscipline(26, 20);
    course.addDependenceOfDiscipline(27, 21);
    course.addDependenceOfDiscipline(28, 20);
    course.addDependenceOfDiscipline(30, 11);
    course.addDependenceOfDiscipline(31, 25);
    course.addDependenceOfDiscipline(35, 28);
    course.addDependenceOfDiscipline(38, 2);
    course.addDependenceOfDiscipline(39, 32);
    course.addDependenceOfDiscipline(45, 39);
    course.addDependenceOfDiscipline(46, 38);
    course.addDependenceOfDiscipline(51, 45);

}


function printDataCourse(course){
    console.log("Curso: "+ course.name+"\n");
    dTotal = course.disciplines.length;
    console.log("Quantidade de disciplinas: "+ dTotal+"\n");
    n = course.getNumberDisciplineByArea(Area.COMP);
    console.log("Quantidade de COMPUTACAO: "+n+"| "+ (100*n)/dTotal +"% \n");
    n = course.getNumberDisciplineByArea(Area.PED);
    console.log("Quantidade de PEDAGOGIA: "+n+"| "+ (100*n)/dTotal +"% \n");
    n = course.getNumberDisciplineByArea(Area.EXA);
    console.log("Quantidade de EXATAS: "+n+"| "+ (100*n)/dTotal +"% \n");
    n = course.getNumberDisciplineByArea(Area.HUM);
    console.log("Quantidade de HUMANAS: "+n+"| "+ (100*n)/dTotal +"% \n");
    n = course.getNumberDisciplineByArea(Area.LIN);
    console.log("Quantidade de LINGUAGENS: "+n+"| "+ (100*n)/dTotal +"% \n");
    console.log("\n \n");
}

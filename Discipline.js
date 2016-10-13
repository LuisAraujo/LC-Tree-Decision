
/*Discipline
 * id is a unique identification of Discipline, can be code of discipline university;
 * Disciplines is a set of disciplines at course
 * */
function Discipline(id, name, area, semester){
    this.id = id;
    this.name = name;
    this.area = area;
    this.dependence = [];
    this.semester = semester;
}
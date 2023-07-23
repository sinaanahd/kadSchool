function find_teacher_name(id, all_teachers, kelasses) {
    const teachers = [];
    const kelass = kelasses.find(k => k.kelas_id === id);
    //console.log(id, all_teachers, kelasses, kelass)
    kelass.teachers.forEach(t => {
        const teacher = all_teachers.find(it => it.teacher_id === t);
        teachers.push(teacher.fullname);
    })
    return teachers;
}
export default find_teacher_name;
function find_teacher_name(kelasses, id) {
    const teachers = [];
    kelasses.forEach(k => {
        if (k.kelas_id) {
            k.teachers.forEach((t) => {
                // teachers.includes(t)
                if (!teachers.includes(t.fullname)) {
                    teachers.push(t.fullname);
                }

            })
        }
    });
    return teachers;
}
export default find_teacher_name;
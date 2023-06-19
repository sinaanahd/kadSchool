function find_class(kelasses, paranet_id) {
    const kelas = kelasses.find(k => k.kelas_id === paranet_id);
    return kelas.kelas_title;
}
export default find_class;
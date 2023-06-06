function find_class(kelasses, paranet_id, j_id) {
    let kelass_id = false;
    let kelass = false;
    let jalase = false;
    kelasses.forEach((k, i) => {
        if (k.kelas_id === paranet_id) {
            kelass_id = i;
            kelass = k;
        }
        i++;
    });
    if (!kelass_id) {
        kelass.jalasat.forEach((j, i) => {
            if (j.jalase_id === j_id) {
                jalase = i;
            }
            i++;
        })
    }
    return [kelass_id, jalase];
}
export default find_class;